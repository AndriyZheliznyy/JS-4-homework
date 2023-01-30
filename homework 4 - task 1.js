// 1. **Напишіть функцію `addThemAll` яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
// Використайте оператор розширення:**
    
//     console.log(addThemAll(2,4)); *// 6*
//     console.log(addThemAll(1,2,3,4)); *// 10*
//     console.log(addThemAll(5,5,10)); *// 20*
    
//     function addThemAll *// тут пишете свій код*


	function addThemAll(a, b, ...args) {
	  let sum = a + b;
	  for (let arg of args) {
	  	sum += arg;
	  }
	  return sum;
	}
	console.log(addThemAll(1,2,3,4));

