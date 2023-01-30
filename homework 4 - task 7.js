// 7. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.

// function someFunction // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

// function slower(func, seconds) { // тут ваш код для декоратора }

// let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор

// slowedSomeFunction(/якісь аргументи/) // викликаєте декоратор

// // виведе в консоль "Chill out, you will get you result in 5 seconds" //...через 5 секунд виведе результат роботи 'someFunction'

function someFunction (a=2,b=2){
		console.log(a+b);
}

function slower(func, seconds) {
	setTimeout(func, seconds*1000);
	console.log("Chill out, you will get you result in 5 seconds");
}

let slowedSomeFunction = slower(someFunction,5);
