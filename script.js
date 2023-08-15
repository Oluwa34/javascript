//************* Values and Variables */

console.log("Hello World!");

let firstname = "Guy";

console.log(firstname);

//***** Variables Naming Conventions */

let obinna4 = "obinna";
let _charles = "charles";
let $chidubem = "chidubem";

console.log(obinna4, _charles, $chidubem);

//*********Data types */

/*
1. string
2. Number
3. Bigint
4. Boolean
5. Undefined 
6. Null 
7. Symbol 
8. Object
*/

//Boolean -> True or False values

var javaScriptIsEasy = true;
var lifeIsHard = false;

console.log(typeof lifeIsHard);

//Numbers

let chekwube = 30;
let kingsley = 29.8;

console.log(typeof chekwube);
console.log(typeof kingsley);

//strings

let message = "welcome to France";
console.log(typeof message);

let guy = "34";
console.log(typeof guy);

let donald = "24" + 2;
console.log(donald, typeof donald);

//Undefined

let year;
console.log(year, typeof year);

//An empty value has nothing to do with 'undefined'
let car = '';
console.log(typeof car);

//When adding a number and a string, Javascript will treat the number as a string

let vehicle = 16 + 4 + "volvo"
console.log(vehicle, typeof vehicle);

/*Null
In Javascript null is nothing. It is supposed to be something that doesn't exist. The data type of null of object*/

let money = null;
console.log(money, typeof money);

/**Difference between undefined and null typeof undefined is undefined typeof null is object */

//similarities 

console.log(null === undefined);