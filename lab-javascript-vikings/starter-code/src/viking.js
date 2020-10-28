class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
    // const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    // const saxon = this.saxonArmy[saxonIndex];
    // const viking = this.vikingArmy[vikingIndex];
    // const message = saxon.receiveDamage(viking.strength);
    // if (saxon.health < 1) {
    //   this.saxonArmy.splice(saxonIndex, 1);
    // }
    // return message;
  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
    // const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    // const saxon = this.saxonArmy[saxonIndex];
    // const viking = this.vikingArmy[vikingIndex];
    // const message = viking.receiveDamage(saxon.strength);
    // if (viking.health < 1) {
    //   this.vikingArmy.splice(vikingIndex, 1);
    // }
    // return message;
  }

  // generic attack: Todo
  attack(attackArmy, defendArmy) {
    const attackerIndex = Math.floor(Math.random() * attackArmy.length);
    const defenderIndex = Math.floor(Math.random() * defendArmy.length);

    const attackerSoldier = attackArmy[attackerIndex];
    const defenderSoldier = defendArmy[defenderIndex];

    const message = defenderSoldier.receiveDamage(attackerSoldier.strength);
    if (defenderSoldier.health < 1) {
      defendArmy.splice(defenderIndex, 1);
    }
    return message;
  }

  showStatus() {
    if (!this.saxonArmy.length) return "Vikings have won the war of the century!";
    if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";
    return "Vikings and Saxons are still in the thick of battle.";
  }
}

const viking1 = new Viking('Timmy', 10, 5);
const war1 = new War();
war1.addViking(viking1);
console.log(war1.vikingArmy);
const damage = viking1.receiveDamage(3);
// console.log(damage);
// console.log(viking1.name);
