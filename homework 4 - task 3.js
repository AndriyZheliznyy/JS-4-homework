// Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:

// властивість за якою треба посортувати
// опцію напрямку сортування, зростання чи спадання
// const movies = [ { movieName: 'The Thing', releaseYear: 1982, directedBy: 'Carpenter', runningTimeInMinutes: 109, }, 
// { movieName: 'Aliens', releaseYear: 1986, directedBy: 'Cameron', runningTimeInMinutes: 137, }, 
// { movieName: 'Men in Black', releaseYear: 1997, directedBy: 'Sonnenfeld', runningTimeInMinutes: 98, },
// { movieName: 'Predator', releaseYear: 1987, directedBy: 'McTiernan', runningTimeInMinutes: 107, }, ];

// console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого 
//console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого 
//console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку

// function byProperty(property, direction) { // тут ваш код }

const movies = [ { movieName: 'The Thing', releaseYear: 1982, directedBy: 'Carpenter', runningTimeInMinutes: 109, }, 
{ movieName: 'Aliens', releaseYear: 1986, directedBy: 'Cameron', runningTimeInMinutes: 137, }, 
{ movieName: 'Men in Black', releaseYear: 1997, directedBy: 'Sonnenfeld', runningTimeInMinutes: 98, },
{ movieName: 'Predator', releaseYear: 1987, directedBy: 'McTiernan', runningTimeInMinutes: 107, }, ];

function byProperty(property, direction) {
        return movies.sort((valueFirst, valueNext) => {
            let val1 = valueFirst[property];
            let val2 = valueNext[property];
    
            if(direction === '>') {
                if(val1 > val2)
                    return -1;
            }
    
            if(direction === '<') {
                if(val1 < val2)
                    return -1;
            }
        });
    }

console.log(byProperty('releaseYear', '>'));
//console.log(byProperty('runningTimeInMinutes', '<'));
//console.log(byProperty('movieName', '>'));
