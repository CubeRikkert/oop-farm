

class Animal {
  constructor(age, price) {
    this.age = age
    this.price = price
  }

  getValueInEuros() {
    return this.price * this.getWeightInKg()
  }
}

class Pig extends Animal {
  constructor(...args) {
    super(...args)
    this.price = 4
  }
  getWeightInKg() {
    if (this.age * 2.3 > Math.ceil(700)) {return 700}
      return this.age * 2.3
  }
}

class Cow extends Animal {
  constructor(...args) {
    super(...args)
    this.price = 5
  }
  getWeightInKg() {
    if (this.age * 1.5 > Math.ceil(1200)) {return 1200}
      return this.age * 1.5
  }
}

class Horse extends Animal {
  constructor(...args) {
    super(...args)
    this.price = 10
  }
  getWeightInKg() {
    if (this.age * 1.7 > Math.ceil(1000)) {return 100}
      return this.age * 1.7
  }
}

module.exports = { Animal, Pig, Cow, Horse }
