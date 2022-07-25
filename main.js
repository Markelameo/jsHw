"use strict";

// task 1
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);

//task 2

let seconds = 60;
let minutes = 60;
let hours = 24;
let days = 365;

let myAgeInSeconds = seconds * minutes * hours * days;
console.log(myAgeInSeconds);

// task 3
let count = 42;
let userName = '42';
console.log(String(count));
console.log(`${count}`);
console.log(+userName);
console.log(Number(userName));

// task 4
let a = 1;
let b = 2;
let c = "белых медведей";
a = `${a}`;
b = `${b}`;
console.log(a + b + c);

// task 5
let access = "доступ";
let marine = "морпех";
let frost = "наледь";
let reproach = "попрек";
let hack = "рубило";
let arr = [access, marine, frost, reproach, hack];
let lengthWords = arr.length;
console.log(lengthWords);

// task 6
let name = "vlad";
let age = 23;
let married = false;
// Не понимаю как это делать, не до конца понимаю задание

// task 7
let userFirstName = prompt('Какое ваше имя?');
let userAge = prompt('Сколько вам лет?');
console.log(userFirstName);
console.log(userAge);



// ADVANCED level
// Task 1
let d = 4;
let e = 3;
[d, e] = [e, d];
console.log(`${d} ${e}`);
//деструктуризация, не до конца понимаю как это делать ибо массивы не изучали