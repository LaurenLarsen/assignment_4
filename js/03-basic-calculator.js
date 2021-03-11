// IMPORT THE MODULE
import * as calc from './modules/calculator.js';





// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
const operator = prompt('Enter operator ( either +, -, * or / ): ');
while (i !== operator){
    prompt(' You Must Enter operator ( either +, -, * or / ): ');
}


// CHECK TO SEE WHAT OPERATION THEY'RE USING

switch(operator) {
    case '+':
         result = number1 + number2;
        alert(calc.add (number1, number2));
        break;

    case '-':
         result = number1 - number2;
         alert(calc.subtract (number1, number2));
        break;

    case '*':
         result = number1 * number2;
         alert(calc.multiply (number1, number2));
        break;

    case '/':
         result = number1 / number2;
         alert(calc.divide (number1, number2));
        break;

    default:
        alert('Invalid operator');
        break;
}

// CALL THE APPROPRIATE FUNCTION


