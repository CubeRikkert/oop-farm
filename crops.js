class Wheat {
  constructor(acres) {
    this.acres = acres
  }
  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3)
  }
}


class Sugercane {
  constructor(acres) {
    this.acres = acres
  }
  getYieldInKg() {
    return Math.pow(this.acres * 2.6, 1.1)
  }
}

module.exports = { Wheat, Crop, Sugarcane }
