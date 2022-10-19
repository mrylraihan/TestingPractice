// if you want to mock the data globally 
// you have to mock the data before we get the functions 
// mocking the data BEFORE WE REQUIRE THE FUNCTIONS, the functions are required in each 
// describe block 
beforeEach(()=>{
    const mockExpenses = [
        { num: '4' },
        { num: '5' },
        { num: '6' }
]

jest.mock('../data/fakeData.js', ()=>mockExpenses)

})

afterEach(()=>{
    jest.resetModules();
})

describe('test getData1', ()=>{
    it('it should return 4', ()=>{
        const usingDataFN = require('../app')

        const result = usingDataFN.getData1()
        expect(result.num).toBe('4')
    })
})
describe('test getData2', ()=>{
    it('it should return 5', ()=>{
        const usingDataFN = require('../app')

        const result = usingDataFN.getData2()
        expect(result.num).toBe('5')
    })
})
describe('test getData3', ()=>{
    it('it should return 6', ()=>{
        const usingDataFN = require('../app')

        const result = usingDataFN.getData3()
        expect(result.num).toBe('6')
    })
})

// we are calling the function in each describe block 
// now what if we want to test some in a separate mock 
// we can run our mock locally in the describe block 

describe('test getData3', () => {
    beforeEach(() => {
        const mockExpenses = [
            { num: 'Foot' },
            { num: 'Bread' },
            { num: 'Table' }
        ]

        jest.mock('../data/fakeData.js', () => mockExpenses)

    })

    afterEach(() => {
        jest.resetModules();
    })
    it('it should return 6', () => {
        const usingDataFN = require('../app')

        const result = usingDataFN.getData1()
        expect(result.num).toBe('Foot')
    })
})

describe('test getData3', () => {
    beforeEach(() => {
        const mockExpenses = [
            { food: 'Pizza' },
        ]

        jest.mock('../data/fakeData.js', () => mockExpenses)

    })

    afterEach(() => {
        jest.resetModules();
    })
    it('it should return 6', () => {
        const usingDataFN = require('../app')

        const result = usingDataFN.getData1()
        expect(result.food).toBe('Pizza')
    })
})