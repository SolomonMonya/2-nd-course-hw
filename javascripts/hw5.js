// Задание 1

function min(a, b) {
    if (a > b)
        return b;
    else
        return a;
};
console.log(min(8, 4));
console.log(min(6, 6));

// Задание 2

function hon(n) {
    if (n % 2 == 0)
        return console.log('Число четное');
    else
        return console.log('Число нечетное');
};

hon(prompt('Введите ваше число.'));

// Задание 3

function numDisplay() {
    let nDis = prompt('Введите ваше число.');
    console.log(nDis ** 2);
    return;
};
numDisplay();

function numReturn() {
    let nRet = prompt('Введите ваше число.');
    return (nRet ** 2);
};
numReturn();

// Задание 4

function userAge() {
    let age = prompt("Сколько Вам лет?");
    if (age >= 0 && age <= 12) {
        console.log("Привет!");
        return;
    } else if (age >= 13) {
        console.log("Добро пожаловать!");
        return;
    } else {
        console.log("Вы ввели неправильное значение");
        return;
    }
};
userAge();

// Задание 5

function isNumber() {
    let numOne = prompt('Введите ваше первое число.');
    let numTwo = prompt('Введите ваше второе число.');
    let isNumberOne = !isNaN(Number(numOne));
    let isNumberTwo = !isNaN(Number(numTwo));
    if (isNumberOne == true && isNumberTwo == true) {
        numOne = Number(numOne);
        numTwo = Number(numTwo);
        console.log(numOne + numTwo);
        return;
    } 
    else {
        console.log('Одно или оба значения не являются числом');
        return;
    }
}
isNumber()

// Задание 6

function number() {
    let n = prompt('Введите ваше число.');
    let isNumberN = !isNaN(Number(n));
    if (isNumberN == true) {
        n = Number(n);
        n = Number(n ** 2)
        console.log(`n в кубе равняется ${n}`);
        return;
    } 
    else {
        console.log('Переданный параметр не является числом');
        return;
    }
}
number()

// Задание 7

function getArea() {
    console.log(this.radius ** 2 * Math.PI);
	return (this.radius ** 2 * Math.PI);
};
function getPerimeter() {
    console.log(this.radius * 2 * Math.PI);
	return (this.radius * 2 * Math.PI);
};

const circle1 = {
	radius: prompt('Введите ваше число.'),
	area: getArea,
	perimeter: getPerimeter,
}

const circle2 = {
	radius: prompt('Введите ваше число.'),
	area: getArea,
	perimeter: getPerimeter,
}
circle1.area()
circle2.perimeter()

// Задание 8

function seasons() {
    let seasonsNum = prompt("Время года какого по счёту месяца хотите узнать?");
    if (seasonsNum == 12 || seasonsNum == 1 || seasonsNum == 2) {
        console.log("Зима");
        return;
    } 
    else if (seasonsNum == 3 || seasonsNum == 4 || seasonsNum == 5) {
        console.log("Весна");
        return;
    } 
    else if (seasonsNum == 6 || seasonsNum == 7 || seasonsNum == 8) {
        console.log("Лето");
        return;
    } 
    else if (seasonsNum == 9 || seasonsNum == 10 || seasonsNum == 11) {
        console.log("Осень");
        return;
    } 
    else {
        console.log("Нужно ввести числовой номер существующего месяца");
        return;
    }
};
// seasons();