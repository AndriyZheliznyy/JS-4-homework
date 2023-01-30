// 2. Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b) // a * b

// console.log(multiply(5)(5)) // 25 console.log(multiply(2)(-2)) // -4 console.log(multiply(4)(3)) // 12

// function multiply(a) { // тут ваш код }

function multiply (a) {
  return function (b) {
    return a * b;
  };
};

console.log(multiply(2)(-2));