// Example of a VERY simple Monopoly game simulation

// Each square represents the cash earned when a player is on it. For example:
// - If a user is at position 0, the cash will increase by 100€
// - If a user is at position 4, the cash will decrease by 40€

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// --- Initialization ---

// let player1 = {
//     name: 'Pao',
//     color: 'red',
//     position: 0,
//     cash: 1000
// }
/*
let player2 = {
    name: 'Kevin',
    color: 'blue',
    position: 0,
    cash: 1000
}

let player3 = {
    name: 'Timmy',
    color: 'black',
    position: 0,
    cash: 1000
}
*/
let dice;
/*
// roll the die
dice = 1 + Math.floor(6 * Math.random());
// move the player
player1.position = player1.position + dice % squares.length;
console.log(player1);
// update the cash
player1.cash += squares[player1.position];
// check for winning and losing
if (player1.cash <= 0) {
    console.log(`Game over for ${player1.name}`);
}
*/

let player1 = {
    name: 'Pao',
    color: 'red',
    position: 0,
    cash: 1000,
    move: function () {
        let dice = 1 + Math.floor(6 * Math.random());
        this.position = this.position + dice % squares.length;
        // update the cash
        this.cash += squares[this.position];
        // check for winning and losing
        if (this.cash <= 0) {
            console.log(`Game over for ${this.name}`);
        }
    }
}
let player2 = {
    name: 'Timmy',
    color: 'blue',
    position: 0,
    cash: 1000,
    move: function () {
        let dice = 1 + Math.floor(6 * Math.random());
        this.position = this.position + dice % squares.length;
        // update the cash
        this.cash += squares[this.position];
        // check for winning and losing
        if (this.cash <= 0) {
            console.log(`Game over for ${this.name}`);
        }
    }
}

class Player {
    constructor(name, color) {
        this.color = color;
        this.name = name;
        this.position = 0;
        this.cash = 1000;
    }
    move() {
        let dice = 1 + Math.floor(6 * Math.random());
        this.position = this.position + dice % squares.length;
        // update the cash
        this.cash += squares[this.position];
        // check for winning and losing
        if (this.cash <= 0) {
            console.log(`Game over for ${this.name}`);
        }
    }
}
const obj = {};
obj.name = 'Timmy'
const playerPao = new Player('Pao', 'red');
playerPao.moves = 10;
// console.log(playerPao);

// class Cat {
//    // constructor gets called if class is instantiated - the object gets created 
//     constructor(name, color, sound, lives) {
//         this.name = name;
//         this.color = color;
//         this.sound = sound;
//         this.lives = lives;
//     }

//     makeSound() {
//         return this.sound;
//     }
// }
// class Bird {
//     constructor(name, color, sound) {
//         this.name = name;
//         this.color = color;
//         this.sound = sound;
//     }
//     makeSound() {
//         return this.sound;
//     }
//     fly() {
//         return 'i am flying'
//     }
// }

// this is the parent class that cat and bird inherit
// from
class Animal {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
    makeSound() {
        return this.sound;
    }
}

class Cat extends Animal {
    constructor(name, color, sound, lives) {
        // we have to call the parent constructor
        // and pass the properties that are
        // assigned in Animal
        super(name, color, sound);
        this.lives = lives;
    }
    // if we define the same method as in the parent
    // class this method here gets used if we call:
    // cat.makeSound()
    makeSound() {
        return 'sound of child class'
    }
}
class Bird extends Animal {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
    fly() {
        return 'i am flying'
    }
}

class Dog {
    bark() {
        return 'barking'
    }
}

const dog = new Dog();
console.log(dog.bark());

const cat = new Cat('Kitty', 'blue', 'meow', 9);

console.log(cat.makeSound());





// console.log(player1.move());