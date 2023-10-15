// Задача 1
let rpt = 0;
while (rpt < 2) {
    console.log('Привет');
    rpt++;
}

// Задача 2
let numberOne = 1
while (numberOne < 6) {
    console.log(numberOne);
    numberOne++;
}

// Задача 3
numberOne = 7
while (numberOne < 23) {
    console.log(numberOne);
    numberOne++;
}

// Задача 4
const obj = {
	Коля: '200',
	Вася: '300',
	Петя: '400'
}
for (let money in obj) { 
        console.log(`${money} — зарплата ${obj[money]} долларов.`);
    }

// Задача 5
let n = 1000
let num = 0
while (n > 50) {
    n = n / 2
    num++
}
console.log(num);

// Задача 6
for (let dayFriday = 6; dayFriday <= 31; dayFriday = dayFriday + 7) {
    
    console.log(`Сегодня пятница, ${dayFriday}-е число. Необходимо подготовить отчет.`)

}
