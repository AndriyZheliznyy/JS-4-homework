// 6. А тепер зробіть всі свої методи з задачі
// `5` прив'язаними до контексту свого об'єкту
//  - аби вони були захищені від перезапису об'єкту
//  і їх можна було викликати в таймері:**
    
//     let securedSelfIntroduce = *// якийсь код*
//     let securedSelfPrognose = *// якийсь код*
//     let securedSelfDescribeMyMood = *// якийсь код*
    
//     setTimeout(securedSelfIntroduce, 1000); *// виведе коректний результат*
//     setTimeout(securedSelfPrognose, 2000); *// виведе коректний результат*
//     setTimeout(securedSelfDescribeMyMood, 3000); *// виведе коректний результат*


let me = {
    name: "Andriy",
    location: "Wroclaw, Poland", 
    gender: 'male',
    nationality: "Ukrainian",
    age: '26', 
    weight: "85",
    height: '181', 
    occupation: 'work as technologist in food manufacturer', 
    hobby: 'cycle, train crossfit, listen music',
    slogan: 'наша русофобія не достатня!',
    biggestDesire: 'Україна виграє війну, а росія розпадеться',
    basicInfo() {        
        console.log(`My name: ${this.name}, weight: ${this.weight} kg, height: ${this.height} cm and I am ${this.age} years old.`);
    },
    whereILive() {
        console.log(`When i was 17, i moved to ${this.location} and i am still living there.`);
    },
    whatIDoVsLike() {
        console.log(`Currently I ${this.occupation},but in the free time i like to ${this.hobby}.`); 
    },
    wish() {
        console.log(`As every conscious ${this.nationality} my biggest desire is ${this.biggestDesire}. And of course i believe that still ${this.slogan}`); 
    }
};

let newMe = me;
me = null;

let securedBasicInfo     = newMe.basicInfo.bind(newMe);
let securedWhereILive    = newMe.whereILive.bind(newMe); 
let securedWhatIDoVsLike = newMe.whatIDoVsLike.bind(newMe); 
let securedwish          = newMe.wish.bind(newMe);

setTimeout(securedBasicInfo, 1000);
setTimeout(securedWhereILive, 2000); 
setTimeout(securedWhatIDoVsLike, 3000);
setTimeout(securedwish, 4000);