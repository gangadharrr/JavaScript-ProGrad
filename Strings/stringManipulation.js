//String Accessing and Usage
const sentence="Welcome to JavaScript!";
console.log(sentence[0]);
console.log(sentence[5]);

//String Concatenation 
const sentence1="JavaScript!";
console.log(sentence+sentence1);
console.log(sentence.concat(sentence1));
console.log(sentence.concat(sentence1[2]))

//String Interpolation
const val="Java!";
const sentence3=`Welcome to ${val} Language`;
console.log(sentence3);
console.log(`${sentence}${val}`);

//Operators inside string interpolation
const firstNumber = 10;
const secondNumber = 39;
const result21 = `The result of multiplying ${firstNumber} by ${secondNumber} is ${firstNumber * secondNumber}.`;
console.log(result21);

//Ternery operator inside string interpolation
const drinks = 4.99;
const food = 6.65;
const total = drinks + food;
const result = `The total bill is ${total}. ${total > 10 ? `Your card payment will be declined` : `Your card payment will be accepted`}.`
console.log(result);

//String Conversion
const myString = "123";
const myNum = parseInt(myString);
console.log(myNum==myString);
console.log(myNum===myString);

//Fixed Float
const num='301.44543';
const fl=parseFloat(num);
console.log(fl.toFixed(2));

//Number to String Conversion
const num1=1234;
const stringCon=""+num1;
console.log(typeof stringCon);
console.log( typeof num1.toString());

//Dynamic String Assignment
const numX='301.44543';
const array=["hi","hello",numX,"world"]
for(let str of array)
{
    const value=str;
    console.log(value);
}