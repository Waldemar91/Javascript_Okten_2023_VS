// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let x ='hello world';
let y ='lorem ipsum';
let z ='javascript is cool';
console.log(x.length)
console.log(y.length)
console.log(z.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let pass1 = 'hello world';
let case1 = pass1.toUpperCase();
console.log(case1);
let pass2 = 'lorem ipsum';
let case2 = pass2.toUpperCase();
console.log(case2);
let pass3 = 'javascript is cool';
let case3 = pass3.toUpperCase();
console.log(case3);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let pass4 = 'HELLO WORLD';
let case4 = pass4.toLowerCase();
console.log(case4);
let pass5 = 'LOREM IPSUM';
let case5 = pass5.toLowerCase();
console.log(case5);
let pass6 = 'JAVASCRIPT IS COOL';
let case6 = pass6.toLowerCase();
console.log(case6);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// Думав спочатку знаходити під яким індексом знаходиться d - тоді перший раз вирізати, і так зробити від кінця - можливо як каже Сергій не камільфО АЛЕ СПРАЦЮВАЛО))
let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// Не вийшло вивести в одинарних лапках - 'ревуть',etc...
let str1 = 'Ревуть воли як ясла повні';
let Arr = str1.split('');
console.log(Arr);
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// Не можу осягнути як зробити стрінгові(())
let k = [10,8,-7,55,987,-1011,0,1050,0];
let r=k.map((k)=>k+'');
console.log(r)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(a, b) {
    if (a > b) return a;
    // if (a == b) return 0;
    if (a < b) return b;
}
let nums = [ 11, 21, 3 ];
nums.sort(sortNums);
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
function sortBymonthDuration(coursesAndDurationArray) {
    coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
}
sortBymonthDuration(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker