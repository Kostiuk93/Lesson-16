"use strict";
/*Function Declaretion*/
function showFirstMessage() {
    console.log("Hello World!");
}

showFirstMessage();

/*Function Declaretion*/
function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello World");

/*Function Declaretion*/
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

/*Function Declaretion*/
console.log(calc(4, 4));
console.log(calc(4, 2));
console.log(calc(4, 1));
function calc(a ,b){
    return (a + b);
}



/*Function Declaretion*/
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

/*Function Expression*/
const logger = function() {
    console.log("Hello!");
};
logger ();

/*Стрелочные функции*/
const calc = (a, b) => { return a + b};

/*const calc = (a, b) => a + b;   сокрщенный вид струлочной функции*/

const calc = (a, b) => { 
    console.log('1');
    return(a + b);
};