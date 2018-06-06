class Farm {
  constructor(name, crops, animals) {
    this.name = name
    this.crops = []
    this.animals = []
  }

  addCrop(crop) {
    this.crops.push(crop)
  }

  addAnimal(animal) {
    this.animals.push(animal)
  }

  calculateIncome() {
    const cropIncome = this.crops
    .map(crop => crop.getYieldInEuros())
    .reduce((a,b) => a + b, 0)
    const animalIncome = this.animals
    .map(animal => animal.getValueInEuros())
    .reduce((a,b) => a + b, 0)
    return cropIncome + animalIncome
  }

  printFarm() {
  console.log(`----------------\n- Farm: ${this.name}  -\n- No.  of crops: ${this.crops.length}  -\n- No.  of animals ${this.animals.length} -\n- Total income: ${this.calculateIncome()} -\n----------------`)
  }

}



module.exports.Farm = Farm
