// Задача 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
people.sort(function (a, b) {
   if (a.age > b.age) {
     return 1;
   }
   if (a.age < b.age) {
     return -1;
   }
   return 0;
});
console.log(people);

// Задача 2

function isPositive(num) {
    return num > 0;
};

function isMale(person) {
 return person.gender === "male";
};

function filter(arr, functionFilter) {
    const filterArr = [];
    for (let item of arr) {
        if (functionFilter(item)) {
            filterArr.push(item);
        };
    };
    return filterArr;
};

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const peopleGender = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopleGender, isMale));

// Задача 3

const timer = () => {
  let i = 0;
	setInterval(() => {
    i = i + 3
		console.log(new Date());
	  if (i == 30) {
      console.log('30 секунд прошло');
      i = 0;
    };
  }, 3000);

};

// Задача 4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// Задача 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))