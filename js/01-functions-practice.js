//STEP 1
function halfNumber(number) {
    let divideNumber = number / 2;
    console.log('Half of ' + number + ' is ' +  divideNumber);
    return divideNumber;
}

halfNumber(14);

//STEP 2
function squareNumber(number) {
    let numberSquared = number * number;
    console.log('The result of squaring the number ' + number + ' is ' + squaredNumber);
    return numberSquared;
}

squareNumber(15);

//STEP 3
function percentOf(number1, number2) {
    let percentage = (number1 / number2) * 100;
    console.log(number1 + ' is ' + percentage + '% of ' + number2);
    return percentage;
}

percentOf(7, 18);


//STEP 4
function FindModulus(number1, number2){
    let modulus = (number1 % number2);
    console.log(modulus + ' is the modulus of ' + number1 + ' and ' + number2)
    return modulus;

}

//STEP 5

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
const number3 = parseFloat(prompt('Enter third number: '));

function add(number1, number2, number3) {
     let sum = number1 + number2 + number3;
     return sum;
     
}
 