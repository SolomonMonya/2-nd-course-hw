// Задача 1

let jsLine = 'js';
jsLine = jsLine.toUpperCase()
console.log(jsLine)

// Задача 2

const searchStart = (userText, searchPart) => {
    let searchObjects = []
    userText.forEach((searchText) => {
        if (searchText.toLowerCase().includes(searchPart.toLowerCase())) {
	    	return searchObjects.push(searchText)
        };
    });
    console.log(searchObjects);
};
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

// Задача 3

const nuber = 32.58884;
console.log(Math.round(nuber));
console.log(Math.ceil(nuber));
console.log(Math.floor(nuber));

// Задача 4

const userNumber = [52, 53, 49, 77, 21, 32];
let maxElem = userNumber[0]
let minElem = userNumber[0]
userNumber.forEach((numberElem) => {
    return maxElem = Math.max(maxElem, numberElem)
});
userNumber.forEach((numberElem) => {
    return minElem = Math.min(minElem, numberElem)
});
console.log(maxElem);
console.log(minElem);
// Не работает так:
// const userNumber = [52, 53, 49, 77, 21, 32];
// console.log(Math.min(userNumber));
// console.log(Math.max(userNumber));
// Почему?

// Задача 5

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
console.log(getRandomInt(11));

// Задача 6

const getRandomNums = (userNum) => {

    const arrRandomNums = [];
    let quantity = Math.floor(userNum / 2);
    
    for (let i = 0; i < quantity; i++) {
        arrRandomNums.push(Math.round(Math.random() * userNum));
    };

    return console.log(arrRandomNums);

};
getRandomNums(10);

// Задача 7

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};
getRandomArbitrary(5, 11);

// Задача 8

let newUserDate = new Date();
console.log(newUserDate);

// Задача 9

let currentDate = new Date();
console.log(currentDate);
currentDate.setDate(currentDate.getDate() + 73)
console.log(currentDate);

// Задача 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); 

let fullDate = "Дата: " + myDate.getDate() + 
" " + months[myDate.getMonth()] + 
" " + myDate.getFullYear() + 
" - это " + days[myDate.getDay()] + 
"\nВремя: " + myDate.getHours() +
":" + myDate.getMinutes() +
":" + myDate.getSeconds();

console.log(fullDate);

// Задача 11

function gameMemory() {

    let fruitWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    for (let i = fruitWords.length - 1; i > 0; i--) {

      let j = Math.floor(Math.random() * (i + 1)); 
      
      [fruitWords[i], fruitWords[j]] = [fruitWords[j], fruitWords[i]];
    
    };
    fruitWords.split(' ');
    alert(fruitWords);
    
    let questionFirst = prompt('Чему равнялся первый элемент массива?');
    let questionLast = prompt('Чему равнялся последний элемент массива?');
    
    if (fruitWords[0].toLowerCase() != questionFirst.toLowerCase() && fruitWords[6].toLowerCase() != questionLast.toLowerCase()) {
        alert('Вы ответили неверно.');
    } else if (fruitWords[0].toLowerCase() != questionFirst.toLowerCase() || fruitWords[6].toLowerCase() != questionLast.toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Всё верно, вы победили!');
    };
  };



