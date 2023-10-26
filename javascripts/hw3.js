// Задача 1
let password = 'пароль';
let userPassword = prompt('Введите пароль')
if (userPassword === password) {console.log('Пароль введен верно')}
else {console.log('Пароль введен неправильно')}

// Задача 2
let c = 2;
(c > 0 && c < 10) ? alert('Верно') : alert('Неверно'); 
(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно'); 

// Задача 3
let d = 30;
let e = 120;
(d > 100 || e > 100) ? alert('Верно') : alert('Неверно');
(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');


// Задача 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
a = Number(a);
b = Number(b);
alert(a + b);
console.log(a + b);

// Задача 5
let month = prompt('Введите порядковый номер месяца.')
switch (month) {
    case '1':
        console.log('Январь');
        break;
    case '2':
        console.log('Февраль');
        break;
    case '3':
        console.log('Март');
        break;
    case '4':
        console.log('Апрель');
        break;
    case '5':
        console.log('Май');
        break;
    case '6':
        console.log('Июнь');
        break;
    case '7':
        console.log('Июль');
        break;
    case '8':
        console.log('Август');
        break;
    case '9':
        console.log('Сентябрь');
        break;
    case '10':
        console.log('Октябрь');
        break;
    case '11':
        console.log('Ноябрь');
        break;
    case '12':
        console.log('Декабрь');
        break;

        
    default:
        console.log('Такого номера месяца не существует!');
}

// Дополнительная практика

// Задание 7

let userNumber = prompt('Введите число');
let isNumber = !isNaN(Number(userNumber));

(isNumber = NaN) ? console.log('Это не число') : console.log('Это число');

let numberRemainder = userNumber % 2;
console.log(numberRemainder);
// Почему когда я ставлю тут равенство, код не работает?
(numberRemainder > 0) ? console.log('Это число нечетное') : console.log('Это число четное');

// Задание 8

if (/Android/i
    .test(navigator.userAgent)) {

    alert("Установите версию приложения для Android по ссылке")

    clientOS = 1

} else console.log("Используется не Android")

if (/iPhone|iPad|iPod/i
    .test(navigator.userAgent)) {

    alert("Установите версию приложения для iOS по ссылке")

    clientOS = 0

} else console.log("Используется не iOS.")
