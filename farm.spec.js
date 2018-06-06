const {Farm} = require('./index')
const {Wheat} = require('./crops')
const {Crop} = require('./crops')
const {Sugarcane} = require('./crops')
const { Animal, Pig, Horse, Cow } = require('./animals')


test('The income of a 100 Wheat + 100 Sugarcane + some cows, some pigs and a horse farm is X en printen :)', () => {
  const farm = new Farm('BeestenBoel')
  farm.addCrop(new Wheat(100))
  farm.addCrop(new Sugarcane(100))
  farm.addAnimal(new Cow(33))
  farm.addAnimal(new Cow(44))
  farm.addAnimal(new Pig(33))
  farm.addAnimal(new Pig(33))
  farm.addAnimal(new Horse(22))
  farm.printFarm()
  expect(farm.calculateIncome()).toBeCloseTo(3477.07, 1)
})
