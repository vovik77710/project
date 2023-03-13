"use strict";

// const vihicleBodyWidth = 5000,  vihicleBodyLength = 4000;

// console.log("Ширина кузова авто: " + vihicleBodyWidth + ', длина: ' + vihicleBodyLength)

// ['dsfdsfsd', 'dsfsdfsd', 'sfdfsdfsd'].map(a =>)

//Request

//snake_case

//UPPER_SNAKE-CASE

//Kebab-case

//PascalCase

// const COLOR_RED = '#F00';

// let number = 4.6;
// console.log(4/0)

// const person = "5";

// const bool = false

// console.log(something)

// let und
// console.log(und)

// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false,
// };

// console.log(obj['name'])

// const arr = ['plum.png', 'orange', 6, 'apple.bmp',  {}, [] ];
// console.log(arr[0])

// const arr = [1, 2, 3];

// console.log(arr[1]);

// const obj = { a: 1, b: 2 };

// const obj = {
//   Anna: 500,
//   Alice: 800,
// };

// console.log(obj);

// const arr = ["a", "b", "c"];

// arr[10] = '3456'
// console.log(arr);

// const arrObj = {
//   a: 'a',
//   1: 'b',
//   2: 'c',
//   abc: {
//     df: [{}, {}],
//     def: {

//     }
//   }
// };

// const b = 'b'

// arrObj['b'] = '1234';

// console.log(arr[1]);
// console.log(arrObj.b);

// const storeName = 'Daraboz';
// console.log(storeName);

// alert('hello')

// const result = confirm('Hello?')
// console.log(result);

// const answer = prompt('are you 18 years old?', '18')
// console.log(answer + 5);

// const anwers = [];
// anwers[0] = prompt("Как ваше имя", "");
// anwers[1] = prompt("Как ваше фамилия", "");
// anwers[2] = prompt("Как ваше отчество", "");

// console.log(typeof (anwers));

// const category = "toys";

// console.log(`html://someurl.com/${category}`);

// const user = "Vova";
// alert(`How are you name? ${user}`);

//.....................

// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

//     // ++incr;
//     // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 2 * 2 !== '6');

// const isCheked = false
//     isClose = false

//     console.log(isCheked || !isClose);

// const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (1) {
//   console.log('ok');
// } else {
//   console.log('error');
// }

// const num = 50
// if (num < 49) {
//   console.log('error');
// } else if  (num > 100)  {
//     console.log('many');
// } else {
//   console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');;
// +'4';

//...........................

// const num = '50';

// switch (num) {
//   case 49:
//     console.log("neverno");
//     break;

//   case 100:
//     console.log("neverno");
//     break;

//   case '50':
//     console.log("verno");
//     break;
//   default:
//     console.log("ne v etot raz");
//     break;
// }

//..............................

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//   console.log('ya syt');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// console.log(hamburger === 3 || cola || fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "wwerwerwe");

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//   console.log("vse syty");
// } else {
//   console.log("my uhodim");
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let  johnReport, alexreport, samReport, mariareport = 'done';
// console.log(johnReport || alexreport || samReport || mariareport);

// console.log(0);

//......................

// let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }

// while (num < 55);

// for (let i = 1; i < 10; i++) {
//    if (i === 6) {
//     continue
//    }
//    console.log(i);
// }

//................

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// let result = '';
// const lenght = 7;

// for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//       result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`first level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`third level: ${k}`);
//     }
//   }
// }

//.........................23

// function firstTask() {

// for (let i = 5; i <= 10; i++) {
//   console.log(i);
//   }
// }

// firstTask()

// function secondTask() {

// for (let i = 20; i >= 10; i--) {
//   if (i === 13) break;
//   console.log(i);

//   }
// }

// secondTask()

// function thirdTask() {
//   for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//       }

//   }

// }

// thirdTask()

// for (let i = 2; i <= 16; i++) {  //пример
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }

// }

// function fourthTask() {

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else{
//     console.log(i);
//   }
//     i++;
//   }
// }
// fourthTask()

// let i = 1;

// while (i <= 15) {
// 	i ++;
// 	if (i % 2)
// 	console.log(i);
// }

// function fifthTask() {

// let arr = [];
// for (let i = 5; i <= 10; i++) {
// 	arr[i - 5] = i
// }
//   console.log(arr);
//   return arr;
// }

// fifthTask()

//.....................24

// function firstTask() {

//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];

//   }
//   console.log(result);
//   return result;
// }
// firstTask()

// function secondTask() {
//   const data = [5, 10, 'Shopping', 20, 'Homework']

//   for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//       data[i] = data[i] * 2;
//     } else if (data[i] = `${data[i]} - done`) {

//     }
//   }
//   console.log(data);
//     return data;
// }
// secondTask()

// function thirdTask() {

//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];
//   for (let i = 1; i < data.length; i++) {
//     result[i - 1] = data[data.length - i];
//   }
//   console.log(result);
//   return result;
// }

// thirdTask()

// let result = '';
// const lenght = 7;

// for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//       result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//    result += " ";

//   }
//   for (let j = 0; j < 2 * i +1; j++) {
//     result +='*';

//   }

//   result += '\n';
// }

// console.log(result);

//...........................24

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// const numMoviesWatched = +prompt("Какой ваш любимый фильм?", "");

// if (numberOfFilms > 0 && numberOfFilms <= 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
//     console.log('Вы классический зритель');
// } else if (numberOfFilms > 30) {
//     console.log("Вы киноман");
// } else {
//     console.log('Произошла ошибка');
// }

// if (numMoviesWatched.length = 0 && numMoviesWatched.length > 50) {
//     numberOfFilms;
//     numMoviesWatched;
// } else {
//     console.log("Ваш любимый фильм " + numMoviesWatched);
// }

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null &&  b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('erorr');
//         i--;
//     }

// }

// if (personalMovieDB < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >=30) {
//     console.log("Вы киноман");
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);

//...................25

// let num = 20;
// function fistShowMessage(text) {
//     console.log(text);
//     num = 10;
// }

// fistShowMessage('jhgjhgjh');
// console.log(num);

// function calc(a, b) {
//     return( a + b);
// }

// console.log(calc(4, 5));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
//     console.log(anotherNum);

// const logger = function () {
//     console.log('hello');
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b
// };

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     alert(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work();

//..................26

// const usdCurr = 28;
// const discount = 0.9;

// function convert(a, b) {
//   return a * b;
// }

// function promotion(result) {
//   console.log(result * discount);
//   return function(){

//   }
// }

// const res = convert(500, usdCurr);

// promotion(res);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);;
//     if (i ===3) {
//       return
//     }
//   }
//   console.log('done');
// }

// test()

//..................27

// function sayHello(name) {
//   return console.log( `Hello, ${name}!`);
// }

// sayHello('vova');

// function returnNeighbiringNumbers(num) {
//   console.log([num -1, num, num + 2]);
// }

// returnNeighbiringNumbers(6)

// function getMathResult(baza, progressNum) {

//   if (typeof(progressNum) !== "number" || progressNum <= 0) {
//     console.log(baza);
//     return baza;
//   }

//   let result = "";

//     for (let i = 1; i <= progressNum; i++) {
//         if (i === progressNum) {
//             result += `${baza * i}`;
//         } else {
//             result += `${baza * i}---`;
//         }
//     }
//     console.log(result);
//     return result
// }

// getMathResult(5, 3);

// function getMathResult(a, b) {
//   if (typeof(b) !== 'number' || b <= 0) {
//     console.log(a);
//     return a;
//   }

//   let str = '';

//   for (let i = 1; i <= b; i++) {
//     if (b === i) {
//       str += `${a * i}`;
//     } else {
//       str += `${a * i} ---`;
//     }

//   }
//   console.log(str);
//   return str;

// }

// getMathResult(3, 5);

//.............................28

// const str = "test";
// const arr = [1, 2, 4];

// console.log(str[2] = "d");
// console.log(str);





// function numberProgression(base, times) {
//     if (typeof times !== 'number' || times <= 0) {
//         console.log(base);
//       return base;
//     }
//     let result = base.toString();
//     for (let i = 1; i < times; i++) {
//       result += '---' + (base * (i + 1)).toString();
//     }
//     console.log(result);
//     return result;
//   }


//   numberProgression(5, 0);



//...............28

// const str = 'test';

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());



// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));


// const logg = 'Hello world';
// console.log(logg.slice(-3, -2));

// console.log(logg.substr(2, 3));


// const num = 12.2;
// console.log(Math.round(num));


// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


//.......................29



// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""); 
//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""); 
        
//     }
// }

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };




// function rememberMyFilms(params) {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != null &&  b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('erorr');
//             i--;
//         }
    
//     } 
// }

// // rememberMyFilms();





// function detectionPersonalLevel() {
//     if (personalMovieDB < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >=30) {
//         console.log("Вы киноман");
//     } else {
//         console.log('Произошла ошибка');
//     } 
// }

// // detectionPersonalLevel();

// function showMyBD(hidden) {
//     if(!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyBD(personalMovieDB.privat);



// function writeYourGender() {
//     for (let i = 1; i <= 3; i++) { 
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGender();


//..........................


// function calculateVolumeAndArea(num) {
//     let result = num * num * 6;
//     let result2 = num * num * num;
//     if (typeof (num) !== "number" || num < 0 || !Number.isInteger(num)) {
//         console.log("При вычислении возникла ошибка");
//     } else {
//         console.log(`Объем куба: ${result}, площадь поверхности: ${result2}`);
//     }
// }

// calculateVolumeAndArea(5);


//.............................


// function getCoupeNumber(num) {

//     if (typeof(num) !== 'number' || num < 1 || num > 36 || num %1 !== 0) {
//         return "Ошибка, проверьте правильность введенного места"
//     } else if (num <=4) {
//         return 1 ;
//     } else if (num <=8) {
//         return 2 ;
//     } else if (num <=12) {
//         return 3 ;
//     } else if (num <=16) {
//         return 4 ;
//     } else if (num <=20) {
//         return 5 ;
//     } else if (num <=24) {
//         return 6 ;
//     } else if (num <=28) {
//         return 7 ;
//     } else if (num <=32) {
//         return 8 ;
//     } else {
//         return 9 ;
//     }

// }
// console.log(getCoupeNumber(15));

//.......................

// function getCoupeNumber(num) {

//     if (typeof(num) !== 'number' || num < 0 || num %1 !== 0) {
//         return "Ошибка, проверьте правильность введенного места";
//     }
//     if (num === 0 || num > 36) {
//         return "Таких мест не существует";
//     }

//     return Math.ceil(num/4)

// }
// console.log(getCoupeNumber(34));


//...................... мое

// function getTimeFromMinutes(minuts) {
//     let hoursTime = Math.floor( minuts / 60);
//     let minuteTime = minuts - (hoursTime * 60);

//     if (typeof (minuts) !== 'number' || minuts <= 0 || minuts > 600) {
//         return `Ошибка, введите верные данные`;
//     } else if (minuts < 120 ) {
//         return `Это ${hoursTime} час и ${minuteTime} минут`;

//     } else if (minuts < 300) {
//         return `Это ${hoursTime} часа и ${minuteTime} минут`;
//     } else {
//         return `Это ${hoursTime} часов и ${minuteTime} минут`;
//     }
// }


// console.log(getTimeFromMinutes(200));

//................. от GPT

// function getTimeFromMinutes(minutes) {
//   if (typeof minutes !== 'number' || isNaN(minutes) || !Number.isInteger(minutes) || minutes < 0 || minutes > 600) {
//     return "Ошибка, проверьте данные";
//   }

//   const hours = Math.floor(minutes / 60);
//   const remainderMinutes = minutes % 60;

//   const hoursWord = getHoursWord(hours);
//   const minutesWord = getMinutesWord(remainderMinutes);

//   return `Это ${hours} ${hoursWord} и ${remainderMinutes} ${minutesWord}`;
// }

// function getHoursWord(hours) {
//   const lastDigit = hours % 10;gi
//   const beforeLastDigit = Math.floor(hours / 10) % 10;

//   if (beforeLastDigit === 1) {
//     return 'часов';
//   } else if (lastDigit === 1) {
//     return 'час';
//   } else if (lastDigit >= 2 && lastDigit <= 4) {
//     return 'часа';
//   } else {
//     return 'часов';
//   }
// }

// function getMinutesWord(minutes) {
//   const lastDigit = minutes % 10;

//   if (lastDigit === 1 && minutes !== 11) {
//     return 'минута';
//   } else if (lastDigit >= 2 && lastDigit <= 4 && !(minutes >= 12 && minutes <= 14)) {
//     return 'минуты';
//   } else {
//     return 'минут';
//   }
// }


// console.log(getTimeFromMinutes(50));
