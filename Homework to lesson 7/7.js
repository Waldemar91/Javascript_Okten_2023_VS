// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (name, surname,email,phone){
    // this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    console.log(this)
}
let user1= [
    new User(name:'Petro',surname:'Petrenko',email:'petrenko@gmail.com',phone:Oo631025890),
    new User(name:'Petro',surname:'Petrenko',email:'petrenko@gmail.com',phone:Oo631025891),
    new User(name:'Petro',surname:'Petrenko',email:'petrenko@gmail.com',phone:Oo631025892),
    new User(name:'Petro',surname:'Petrenko',email:'petrenko@gmail.com',phone:Oo631025893),
    new User(name:'Petro',surname:'Petrenko',email:'petrenko@gmail.com',phone:Oo631025894),
    new User(name:'Petro',surname:'Petrenko',email:'petrenko@gmail.com',phone:Oo631025895),
    new User(name:'Petro',surname:'Petrenko',email:'petrenko@gmail.com',phone:Oo631025896),
    new User(name:'Petro',surname:'Petrenko',email:'petrenko@gmail.com',phone:Oo631025897),
    new User(name:'Petro',surname:'Petrenko',email:'petrenko@gmail.com',phone:Oo631025898),
    new User(name:'Petro',surname:'Petrenko',email:'petrenko@gmail.com',phone:Oo631025899),
    ]
console.log(user1)



// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// changeYear (newValue) - змінює рік випуску на значення newValue
// addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// changeYear (newValue) - змінює рік випуску на значення newValue
// addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку