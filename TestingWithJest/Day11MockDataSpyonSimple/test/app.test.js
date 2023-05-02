
// beforeEach(() => {
//     mockFoodData = [
//         { food: 'Pizza' },
//         { food: 'Sandwich' },
//         { food: 'Pasta' },
//         { food: 'Salad' },
//         { food: 'Gyro' },
//     ]
//     jest.mock('../data/data', () => mockFoodData)
// })

// afterEach(() => {
//     jest.clearAllMocks()
//     jest.resetModules()
// })

// each describe block is mocking the data the way they want the last test doesnt have a before or after each it use the last mockdata as its data 
describe('test FakeData', () => {

    beforeEach(() => {
        mockFoodData = [
            { food: 'Pizza' },
            { food: 'Sandwich' },
            { food: 'Pasta' },
            { food: 'Salad' },
            { food: 'Gyro' },
        ]
        jest.mock('../data/data', () => mockFoodData)
    })

    afterEach(() => {
        jest.clearAllMocks()
        jest.resetModules()
    })
    it('should return food', () => {
        const app = require('../app')
        const result = app.getPerson()
        expect(result[0].food).toEqual('Pizza')
        
    })
})
describe('test FakeData', () => {

    beforeEach(() => {
        mockFoodData = [
            { food: 'Pizza' },
            { food: 'Sandwich' },
            { food: 'Pasta' },
            { food: 'Salad' },
            { food: 'Gyro' },
        ]
        jest.mock('../data/data', () => mockFoodData)
    })

    afterEach(() => {
        jest.clearAllMocks()
        jest.resetModules()
    })
    //mocking data
    it('should return foodArray', () => {
        const app = require('../app')
        const result = app.getPerson()
        // expect(result.name).toBe('Wallie')
        result.push('test')
        expect(result.length).toEqual(6)
        
    })
    it('should return FoodArray', () => {
        const app = require('../app')
        const result = app.getPerson()
        // expect(result.name).toBe('Wallie')
        // result.push('test')
        expect(result.length).toEqual(5)
        
    })
})

describe('test FakeData Pizza', () => {

    beforeEach(() => {
        mockFoodData = { food: 'Pizza' }
        
        jest.mock('../data/data', () => mockFoodData)
    })

    afterEach(() => {
        jest.clearAllMocks()
        jest.resetModules()
    })
    //mocking data
    it('should return pizza', () => {
        const app = require('../app')
        const result = app.getPerson()
        expect(result.food).toEqual('Pizza')

    })
   
})

describe('test FakeData Pizza', () => {

    afterEach(() => {
        jest.clearAllMocks()
        jest.restoreAllMocks()
        jest.resetModules()
    })
    it('should return pizza', () => {
        const app = require('../app')
        const result = app.getPerson()
        expect(result.food).toEqual('Pizza')

    })

})