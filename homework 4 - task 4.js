// 4. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'.
// Напишіть її двома варіантами:

// Використовуючи setInterval
// Використовуючи вкладений setTimeout
// detonatorTimer(3); // 3 // 2 // 1 // BOOM!

// detonatorTimer(delay) { // тут ваш код }
  
//v1
function detonatorTimer(delay) {

  // Якщо нуль тоді виводимо текст "BOOM!"
  if (delay === 0) {

    console.log("BOOM!");

  // Якщо не нуль тоді треба викликати функцію таймера
  } else if (delay !== 0) {
    
    // Викликається кожен раз, якщо аргумент не нуль
    console.log(delay);

    // Запускає рекурсію
    setTimeout(() => {
      detonatorTimer(delay - 1);
    }, 1000);

  }

}

detonatorTimer(7);



//v2
function detonatorTimer2(delay) {

  // Викликаємо кожен раз
  let idInterval = setInterval(() => {

    // Виводимо в консолі значення delay
    console.log(delay);

    // Відмінусовуємо від аргумента одиницю і оновлюємо значення аргументу
    delay = delay - 1;
    
    // Якщо нуль тоді бум
    if(delay === 0) {
      console.log("BOOM!");
      clearInterval(idInterval);
    }
  }, 1000);

}

detonatorTimer2(7);
