// task 2.1 Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr;
arr = [11, 08, 24, 1991, 16, 30, -100, 'car', 'box', 50];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//task 2.2

let book3={
    title:'OktenWarsaw',
    pageCount:70,
    genre:'fantasy'
};
console.log(book3);


// task 2.3

let booking = {
    title: 'Titanic',
    pageCount:495,
    genre: 'romantic',
    authors: [
        {name:'Antonio', age: 13}
        {name:'Antoni', age: 45},
    ]
};
console.log(booking);

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

let x =5;
if (x!=0) {console.log('True')}
else {(console.log('False')};

//2.- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 18;
if (time>=0 & time<=15) {console.log('firstQuarter');}
else if (time>=16 && time<=30) {console.log('secondQuarter');}
else if (time>=31 && time<=45) {console.log('thirdQuarter');}
else if (time>=46 && time<=59) {console.log('fourthQuarter');}

//3.- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 30;
if (day>0 && day<=10) {console.log('1 декада місяця');}
else if (day>10 && day<=20) {console.log('2 декада місяця');}
else (day>20 && day<=31) {console.log('3 декада місяця'),}
else { console.log('Wrong day')}


//4.Timetable - switch- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day2=6;
switch (day2) {
    case 1:
        console.log('Monday!');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
        case 4:
        console.log('Thursday');
        break;
        case 5:
        console.log('Friday');
        break;
        case 6:
        console.log('Saturday');
        break;
        case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Error');
}

//5. Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let y=4;
let z = 6;
if (y>z) {console.log('y');}
else if (y<z) {console.log('z');}
else if (y===z) {console.log('equal');}
else { console.error('Error')}

//6. Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x;
x = x || 'default';
x = x ?? 'default';
console.log(x)


//7.- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if (coursesAndDurationArray[0].monthDuration>5) {
    console.log ('Super!!!');
}
if (coursesAndDurationArray[1].monthDuration>5) {
    console.log ('Super!!!');
}
if (coursesAndDurationArray[2].monthDuration>5) {
    console.log ('Super!!!');
}
if (coursesAndDurationArray[3].monthDuration>5) {
    console.log ('Super!!!');
}
if (coursesAndDurationArray[4].monthDuration>5) {
    console.log ('Super!!!');
}
if (coursesAndDurationArray[5].monthDuration>5) {
    console.log ('Super!!!');
}
