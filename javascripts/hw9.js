// Задание 1

const str_count = (str, elem) => {

    const amountElem = str.split(elem);
    console.log(amountElem.length - 1);

};

str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0

// Задание 2

const num_count = (arr) => {

    const numSquare = arr.map((num) => num ** 2);
    const numSum = numSquare.reduce(
        (allSum, numbs) => allSum + numbs
    );

    return console.log(numSum);

};

num_count([1, 2, 2]);

// Задание 3

const functionNumMath = (n) => {

    n = Math.round(Math.sqrt(n)) ** 2;

    return console.log(n);

};

functionNumMath(111);

// Задание 4 

const reverseWord = (userWord) => {

    return console.log(userWord.split('').reverse().join(''));
};

reverseWord('world');

// Задание 5

const lengthWords = (userWords) => {

    userWords = userWords.split(' ');

    const lengthUserWords = userWords.map((word) => word 
    + ' ' + word.length);

    return console.log(lengthUserWords);
};
lengthWords("apple ban");
lengthWords("you will win");

// Задание 6

const price_3for2 = (numberMango, priceMango) => {
    
    const finalMangoCost = Math.ceil(numberMango / 3 * 2) * priceMango;
    
    return console.log(finalMangoCost);

};
price_3for2(2, 3);
price_3for2(3, 3);
price_3for2(5, 3);
price_3for2(9, 5);
price_3for2(1231, 523);

// Задание 7

const nathanDrinkPerTime = (time) => {

    const nathanDrinkLitres = Math.floor(time * 0.5);
    
    return console.log(nathanDrinkLitres);

};

nathanDrinkPerTime(11.8);

// Задание 8

const invertNumber = (arrNum) => {

    const invertArrNum = arrNum.map((num) => num * -1);
    
    return console.log(invertArrNum);

};

invertNumber([1,2,3,4,5]);
invertNumber([1,-2,3,-4,5]);
invertNumber([]);

// Задание 9

const powNumber = (n) => {
   
    n = n + 1;

    let arrPowNumber = [];

    for (let i = 0; i < n; i++) {

        arrPowNumber.push(Math.pow(2, i));
        
    };
    
    return console.log(arrPowNumber);

};

powNumber(0);
powNumber(1);
powNumber(2);
powNumber(8);

// Задание 10

const multiplyingValues = (arrValues) => {

    const multiArrValues = arrValues.reduce(
        (squareValue, nextValue) => squareValue * nextValue
    );

    return console.log(multiArrValues);

};

multiplyingValues([1, 2, 3, 4]);