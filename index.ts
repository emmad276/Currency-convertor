import inquirer from "inquirer";
const currency : any = {
    USD : 1,  // base currency
    EUR : 0.91,
    INR : 74.57,
    PKR : 280
};



let user_answer = await inquirer.prompt([
    {name: "from",
    message : "Please select your from currency",
    type : "list",
    choices : ["USD","EUR",'INR',"PKR"]

    },
    {
        name: "to",
        message : "Which currency do like to convert ?",
        type : "list",
        choices : ["USD","EUR",'INR',"PKR"]
       
    },
    {name: "Amount",
    message : "Enter your amount",
    type : "number",
    
    }
])

let fromAmount = currency[user_answer.from];       // exchange rate
let toAmount = currency[user_answer.to];  // exchange rate
let amount = user_answer.Amount;
let baseAmount = amount / fromAmount // base currency
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount)