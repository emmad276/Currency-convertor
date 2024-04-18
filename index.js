import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    { name: "from",
        message: "Please select your currency type",
        type: "list",
        choices: ["USD", "EUR", 'INR', "PKR"]
    },
    {
        name: "to",
        message: "Which currency do like to convert ?",
        type: "list",
        choices: ["USD", "EUR", 'INR', "PKR"]
    },
    { name: "Amount",
        message: "Enter your amount",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
