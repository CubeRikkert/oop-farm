

class Crop {
  constructor(acres, price) {
    this.acres = acres
    this.price = price
  }

  getYieldInEuros() {
    return this.price * this.getYieldInKg()
  }

  getCosts() {
    return this.costs * this.acres
  }
}

class Wheat extends Crop {
  constructor(acres, price) {
    super(acres, price)
    this.price = 1.5
    this.costs = 340
  }

  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3)
  }
}

class Sugarcane extends Crop {
  constructor(acres, price) {
    super(acres, price)
    this.price = 2
    this.costs = 166
  }

  getYieldInKg() {
    return Math.pow(this.acres * 2.6, 1.1)
  }
}

module.exports = { Wheat, Crop, Sugarcane }
