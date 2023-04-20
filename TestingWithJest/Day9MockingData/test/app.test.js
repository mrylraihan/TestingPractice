let mockFoodData =[]
beforeEach(()=>{
     mockFoodData = [
        {food:'Pizza'},
        {food:'Sandwich'},
        {food:'Pasta'},
        {food:'Salad'},
        {food:'Gyro'},
    ]
    jest.mock('../data/fakedata', ()=>mockFoodData)
})

afterEach(()=>{
    jest.clearAllMocks()
    jest.resetModules()
})
describe('test FakeData', ()=>{
    //mocking data
    it('should return food', ()=>{
        const app = require('../app')
        const result = app.getFoodData()
        expect(result.length).toBe(5)
        expect(result[0].food).toBe('Pizza')
    })
    // here we are manipulating the mock data
    it('should return food', ()=>{
        const app = require('../app')
        const cake = {food:'Cake'}
        const result = app.getFoodData()
        result[0]= cake
        expect(result.length).toBe(5)
        expect(result[0].food).toBe('Cake')
    })
    // here we are testing to see if the mockdata has gotten resetted
    it('should return food', () => {
        const app = require('../app')
        const test = {food:'test'}
        const result = app.getFoodData()
        result.push(test)
        expect(result.length).toBe(6)
        
    })
})