// Задача 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] == 10) break;
	console.log(arr[i]);
}; 
 
// Задача 2

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 4) {
        console.log(i);
        break
    };
}; 

console.log(numbs.indexOf(4));

// Задача 3

const prnt = [1, 3, 5, 10, 20];
console.log(prnt.join(' '));

// Задача 4

const mult = [];
for (let i = 0; i < 3; i++) {
	mult[i] = [];
    for (let j = 0; j < 3; j++) {
		mult[i].push(1);
	}
};
console.log(mult);

// Задача 5

const addNumbs = [1, 1, 1];
for (let j = 0; j < 3; j++) {
    addNumbs.push(2);
}
console.log(addNumbs);

// Задача 6

let sortNumber = [9, 8, 7, 'a', 6, 5];
sortNumber.pop(sortNumber.sort());
console.log(sortNumber);

// Задача 7

const guess = [9, 8, 7, 6, 5];
let userAnswer = prompt('Угадай число')
let isRight = false
for (let i = 0; i < 5; i++) {

    if (guess[i] == userAnswer) {
        isRight = true
        break;

    };
};

if (isRight == true) {
    console.log('Угадал');
} else {
    console.log('Не угадал');
};


const guess2 = [9, 8, 7, 6, 5];
let userAnswer2 = Number(prompt('Угадай число'));
if (guess2.includes(userAnswer2)) {

    alert(`Угадал`);

} else {

    alert(`Не угадал`);

};

// Задача 8

const textAlf = 'abcdef';
textString = Array.from(textAlf);
textString = textString.reverse()
console.log(textString);

// Задача 9

const arrDis = [[1, 2, 3,],[4, 5, 6]]
arrComb = arrDis.flat(Infinity);
console.log(arrComb);

// Задача 10

const arrUser = [5, 7, 3, 6, 1];

for (let i = 0; i < arrUser.length - 1; i++) {
    console.log(arrUser[i] + arrUser[i + 1]);
}

// Задача 11

function getMult() {

    const num = [];

    num.push(prompt('Введите ваше число.'));

    const exp = num.map(el => el ** 2);

    return exp;

};
getMult()

// Задача 12

function getLengt() {

    const getLengthWords = source => source.map(str => str.length);

    console.log(getLengthWords([(prompt('Введите ваше слово.'))]));

    return;

};
getLengt()


// Задача 13

function filterPositive(array) {
    const even = array.filter(el => el < 0);
    return console.log(even);
}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);

