beforeEach(() => {
    const mockExpenses = { name: 'Wayel' }

    jest.mock('../fakeData.js', () => mockExpenses)

})

afterEach(() => {
    jest.resetModules();
})
const app = require('../app')

describe('sumUp test',()=>{
    it('sum up arguments',()=>{
        const num1 = 2
        const num2 = 2

        const result = app.sumUp(num1, num2)
        expect(result).toBe(4)
    })
})
describe('sumUp test',()=>{
    it('test non nums',()=>{
        const num1 = 'e'
        const num2 = 'fff'

        const result = app.sumUp(num1, num2)
        expect(result).not.toBe(result instanceof String)//checks if return value is a string
    })
})

describe('sumDownTest', ()=>{
    it('test sumDown',()=>{
        const num1 = 3;
        const num2 = 1;

        const result = app.sumDown(num1, num2)
        expect(result).toBe(2)

    })
})

describe('multiply test', ()=>{
    it('testing the multple function', ()=>{
        const num1 = 2;
        const num2 = 3;

        const result = app.multiply(num1, num2)
        expect(result).toBe(6)
        // expect(result).not.toBe(7)
    })
    // your can do multiple it block which will be considered different test
    it('testing the multple function', ()=>{
        const num1 = 2;
        const num2 = 3;

        const result = app.multiply(num1, num2)
        // expect(result).toBe(6)
        expect(result).not.toBe(7)
    })
})

describe('divide test', ()=>{
    it('testing the divide function', ()=>{
        const num1 = 3;
        const num2 = 3;

        const result = app.divide(num1, num2)
        expect(result).toBe(1)
        // expect(result).not.toBe(7)
    })
    // your can do multiple it block which will be considered different test
    it('testing the divide function', ()=>{
        const num1 = 3;
        const num2 = 3;

        const result = app.divide(num1, num2)
        // expect(result).toBe(6)
        expect(result).not.toBe(2)
    })
})

// use spyOn 

describe('test dummyfn', ()=>{
    const dummyFnSpyOn = jest.spyOn(app, 'dummyFn').mockImplementation((a,b)=>`${a} ${b}`)

    it('test dummyFn', ()=>{
        // arrange
        const name1 = 'Wallie'
        const name2 = 'Raihan'
        // act
        const result = app.dummyFn(name1, name2)
        // assert
        expect(result).toBe('Wallie Raihan')
    })
    
    it('test dummyFn', ()=>{
        // arrange
        const name1 = 'Wallie'
        const name2 = 'Raihan'
        // act
        const result = app.useDummyFn(name1, name2)
        // assert
        expect(result).toBe('hey im Wallie Raihan')
    })

})


describe('test useFakeData', ()=>{
  
    it('get back mock data', ()=>{
        const app = require('../app')
        const result = app.useFakeData()
        expect(result.name).toBe('Wayel')
    })
})