let a = 20;
alert(a);
console.log(a);

let iphoneReleaseYear = 2007;
alert(iphoneReleaseYear);
console.log(iphoneReleaseYear);

let firstNum = 10;
let secondNum = 2;
let amountNum = firstNum + secondNum;
let differenceNum = firstNum - secondNum;
let productNum = firstNum * secondNum;
let particularityNum = firstNum / secondNum;
alert(`${amountNum}, ${differenceNum}, ${productNum}, ${particularityNum}.`);
console.log(`${amountNum}, ${differenceNum}, ${productNum}, ${particularityNum}.`);

let two = 2;
let five = 5;
let exponentiation = 2 ** 5;
alert(exponentiation);
console.log(exponentiation);

a = 9;
console.log(a);
let b = 2
let remainder = a % b
alert(remainder);
console.log(remainder);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
console.log(num)

let age = prompt('Сколько вам лет?');
alert(age);

const user = {
	name: 'Monya',
	age: 3034,
	isAdmin: false
}

user['city of residence'] = 'Tziyon';
user['age'] = -1011;
delete user['city of residence'];
let info = prompt("Что вы хотите узнать о пользователе?");
alert(user[info]);
console.log(user[info]);

let userName = prompt("Введите ваше имя.")
alert(`Привет, ${userName}!`)