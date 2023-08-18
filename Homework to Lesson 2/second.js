// task 2.1
let arr;
arr = [11, 08, 24, 1991, 16, 30, -100, 'car', 'box', 50];
console.log(arr);

//task 2.2
// let book1'={
//     title: 'Okten',
//     pageCount:100,
//     genre:'fantasy'
// };
let book2={
    title:'OktenKyiv',
    pageCount:50,
    genre:'fantasy'
};
let book3={
    title:'OktenWarsaw',
    pageCount:70,
    genre:'fantasy'
};
console.log(book1);
console.log(book2);
console.log(book3);


// task 2.3

let booking = {
    title: 'Titanic',
    pageCount:495,
    genre: 'romantic',
    authors: ['name','age']
}

// task 2.4
let using = [
    {name:'Igor',username:'A',password: 123},
    {name:'Maksym',username:'B',password: 456},
    {name:'Viktor',username:'C',password: 789},
    {name:'Volodymyr',username:'D',password:589},
    {name:'Anna',username:'E',password:254},
    {name:'Maria',username:'F',password:356},
    {name:'Julia',username:'G',password:695},
    {name:'Oksana',username:'H',password:451},
    {name:'Svitlana',username:'I',password:378},
    {name:'Yana',username:'J',password:697}

]
console.log(using[0].password);
console.log(using[1].password);
console.log(using[2].password);
console.log(using[3].password);
console.log(using[4].password);
console.log(using[5].password);
console.log(using[6].password);
console.log(using[7].password);
console.log(using[8].password);
console.log(using[9].password);

//Логічні розгалуження
//1.

let x = prompt('enter your number');
if (x!=0) {console.log('True')}
else {(console.log('False')};

//2.- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59}
if (time>=0 & time<=15) {console.log('firstQuarter');}
else if (time>=16 & time<=30) {console.log('secondQuarter');}
else if (time>=31 & time<=45) {console.log('thirdQuarter');}
else if (time>=46 & time<=59) {console.log('fourthQuarter');}

//3.- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31};
if (day>=1 & day<=10) {console.log('1 декада місяця');}
else if (day>=11 & day<=20) {console.log('2 декада місяця');}
else (day>=21 & day<=31) {console.log('3 декада місяця'),}


//4.Timetable - switch- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let numberday = prompt('enter number day of the week');
switch (numberday) {
    case '1'://число вводити без одинарних лапок?
        console.log('Monday!');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
        case '4':
        console.log('Thursday');
        break;
        case '5':
        console.log('Friday');
        break;
        case '6':
        console.log('Saturday');
        break;
        case '7':
        console.log('Sunday');
        break;
    default:
        console.log('????');
}

//5. Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let y=4;
let z = 6;
if (y>z) {console.log('y');}
else if (y<z) {console.log('z');}
else (y=z) {console.log('y=z')}


//6. Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)



//7.- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".