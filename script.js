//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
  ];
  
  people.sort((person1, person2) => person1.age - person2.age);
  
  console.log(people);
  //Задание 2
  function isPositive(number) {
    return number > 0;
  }
  
  function isMale(person) {
    return person.gender === 'male';
  }
  
  function filter(array, ruleFunction) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (ruleFunction(array[i])) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  }
  
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
  const people1 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
  ];
  
  console.log(filter(people1, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]\
  //Задание 3
  function printCurrentDate() {
    const currentDate = new Date();
    console.log(currentDate);
  }
  
  let secondsPassed = 0;
  const interval = 3000; // 3 секунды в миллисекундах (1000 миллисекунд = 1 секунда)
  
  const timer = setInterval(() => {
    printCurrentDate();
    secondsPassed += 3;
  
    if (secondsPassed >= 30) {
      clearInterval(timer);
      console.log("30 секунд прошло");
    }
  }, interval);
  //Задание 4
  function delayForSecond(callback) {
    setTimeout(callback, 1000);
    callback(); // 1000 миллисекунд = 1 секунда
  }
  
  delayForSecond(function () {
    console.log('Привет, Глеб!');
  });

  //Задание 5
  function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) { cb(); }

    }, 1000)
}
function sayHi(name) {
  console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));