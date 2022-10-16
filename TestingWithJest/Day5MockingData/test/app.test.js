const mockNameData = [
    {id:0, name:'Heero'},
    {id:1, name:'Duo'},
    {id:2, name:'Trowa'},
    {id:3, name:'Chang'},
    {id:4, name:'Quatre'},
]
jest.mock('../data/fakeNameData.js',()=>mockNameData)

const mockFoodData = [
    { food: 'pizza' },
    { food: 'sandwich' },
    { food: 'latte' },
    { food: 'salad' },
    { food: 'gyro' }
]
jest.mock('../data/fakeFoodData.js', () => mockFoodData)

const app = require('../app')

describe('test getNameData',()=>{
    it('should return nameData',()=>{
        const name = 'Heero'

        const result = app.getNameData()
        expect(result[0].name).toBe(name)
    })
    it('should return nameData',()=>{
        const getNameSpyOn = jest.spyOn(app, 'getNameData').mockImplementation(() => 'mike')
        const name = 'mike'

        const result = app.getNameData()
        expect(result).toBe(name)
    })
})
describe('test getFoodData',()=>{
    it('should return foodData',()=>{
        const pizza = 'pizza'

        const result = app.getObjData()
        expect(result[0].food).toBe(pizza)
    })
    it('should return foodData',()=>{
        const getObjDataSpyOn = jest.spyOn(app, 'getObjData').mockImplementation(() => 'Donuts')
        const snack = 'Donuts'

        const result = app.getObjData()
        expect(result).toBe(snack)
    })
})
