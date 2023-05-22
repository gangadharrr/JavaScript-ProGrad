//String declaration 
//Strings are immutable 
//Double Quotes and Single Quotes
//In JavaScript, you can choose single quotes or double quotes to wrap your strings in. 
const goodString1 = "This is a test";
const goodString2 = 'This is a test';

const multiLineString=`I like the song.
I gave it a score of 90%.`;

console.log(goodString1);
console.log(goodString2);
console.log(multiLineString);

//Proper Usage of Strings with Quotes
const goodString3 = "This is 'a' test";
const goodString4 = 'This is "a" test';

//Another Option
const goodString5 = 'This is \'a\' test';

//Bad strings Examples
// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

//String is Immutable

let String="Hello World!";
var string1="Hello World! 1";
const string2="Hello World! 2";
console.log(string2);
string2[1]='2';
console.log(string2);

