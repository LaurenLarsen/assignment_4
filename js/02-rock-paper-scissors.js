//User chooses which tool they want to use 
let userOption = prompt("Do you choose rock, paper or scissors?");
//computer chooses based on random number
let computerOption = Math.random();
if (computerOption < 0.30) {
    computerOption = "rock";
} else if(computerOption <= 0.60) {
    computerOption = "paper";
} else {
    computerOption = "scissors";
}
//who wins?
let compare = function(option1, option2) {
    if(option1 === option2) {
    return "The result is a tie!";
}
if (option1 === "paper") {
    if (option2 === "rock") {
        return "paper wins";
    } else {
        if (option2 === "scissors") {
            return "scissors wins";
        }
    }
    if (option1 === "scissors") {
        if (option2 === "rock") {
            return "rock wins";
        } else {
            if (option2 === "paper") {
                return "scissors wins";
            }
        }
    }
    }
}
console.log("User Choose: " + userOption);
console.log("Computer Choose: " + computerOption);
compare(userOption, computerOption);