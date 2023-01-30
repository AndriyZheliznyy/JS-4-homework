// 5. **Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять. Наприклад:**
    
//     let me = {
//     name: 'Mykola',
//     residency: 'Lviv',
//     gender: 'male',
//     age: 31,
//     hobby: 'crafting',
//     defaultMood: 'focused',
//     currentMood: 'sleepy',
//     introduce() {
//     console.log(`My name is ${this.name} and I live in ${this.residency}`);
//     },
//     prognose() {
//     console.log(`I hope that next year I'm gonna be ${this.age+1}`);
//     },
//     describeMyMood(){
//     console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
//     }
//     }
    
//     me.introduce();
//     me.prognose();
//     me.describeMyMood();
    
//     Можете описати скільки хочете властивостей і не менше 2 методів.
//     Не соромтесь)

const me = {
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

me.basicInfo();
me.whereILive();
me.whatIDoVsLike();
me.wish();