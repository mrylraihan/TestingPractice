const mockData = { food: 'tocos' }
jest.mock('../data/fakeData.js', () => mockData)
// define your mock data before you call your functions so they have access 

const mockPeople = [
    { name: 'Kiwi', id: 0 },
    { name: 'Pineapple', id: 1 },
    { name: 'Watermelon', id: 2 },
]
jest.mock('../data/moreFakeData.js', ()=>mockPeople)
// define your mock data before you call your functions so they have access 
const fn= require('../app')

describe('testing sayHello function', ()=>{
    it('return greeting with name',() => {
        const name = 'Wallie';

        const result = fn.sayHello(name)

        expect(result).toBe('hey im Wallie')
    })
  
    it('throw error if nothing passed in',() => {
     
        const resultFn=()=>fn.sayHello()

        expect(resultFn).not.toThrow()
    })
    it('return greeting with name',() => {
        const sayHelloSpyOn = jest.spyOn(fn, 'sayHello').mockImplementation(a=>a)
        const name = 'Wallie';

        const result = fn.sayHello(name)

        expect(result).toBe('Wallie')
    })

})
describe('testing getDetails function', ()=>{
    it('return details string',() => {
        const obj = {name:'Wallie', height:'5.9', weight:165};

        const result = fn.getDetails(obj)

        expect(result).toBe('detail of Wallie, weight:165, height:5.9')
    })
    it('return greeting with name',() => {
        const sayHelloSpyOn = jest.spyOn(fn, 'getDetails').mockImplementation(a=>a)
        const obj = { name: 'Wallie', height: '5.9', weight: 165 };

        const result = fn.getDetails(obj)

        expect(result).toEqual({ name: 'Wallie', height: '5.9', weight: 165 })
    })

})

describe('testing add', ()=>{
    it('testing if add with no body', ()=>{
        const addSpy = jest.spyOn(fn, 'add').mockImplementation((a, b) => a + b)
        const num1 = 5;
        const num2 = 5;

        const result = fn.add(num1, num2)
        expect(result).toBe(10)
    })
    it('testing if add with no body', ()=>{
        
        const result = fn.add()
        expect(result).toBeNaN()
    })
    
})
describe('testing add', ()=>{
    // const addSpy = jest.spyOn(fn,'add').mockImplementation((a,b)=>a-b)// it will override the previous sypOn we did to the add in the previous describe and run all test with this new spyOn add function
    it('testing if add with no body with spyOn', ()=>{
        const addSpy = jest.spyOn(fn, 'add').mockImplementation((a, b) => a - b)
        const num1 = 5;
        const num2 = 5;

        const result = fn.add(num1, num2)
        expect(result).toBe(0)
    })
    it('testing if add with no body', ()=>{
        // if we put them in there own it blocks nothing would get overriden, each spyOn function will only run in its it block 
        const addSpy = jest.spyOn(fn, 'add').mockImplementation((a, b) => [a,b])
        const num1 = 5;
        const num2 = 5;
        const result = fn.add(num1, num2)
        expect(result).toEqual([5, 5])
    })
})

describe('testing nested functions', ()=>{
    it('test spyOn add again because useAdd invokes it', ()=>{
        const addSpy = jest.spyOn(fn, 'add').mockImplementation((a, b) => a+b)
        const num1 = 3
        const num2 = 2

        const result = fn.useAdd(num1, num2)

        expect(result).toBe('your total is 5')
    })
})


// Count

describe('sum all in the array', ()=>{
    it('sum all nums in the arr', ()=>{
        const numList = [1,2,3]
        const resultFn = () => {
            add(numList);
        }
        expect(resultFn).toThrow()

    })
    it('throws errors', ()=>{
        const resultFn = () => {
            add();
        }
        expect(resultFn).toThrow()

    })
})

describe('testing mocking data', () => {
    // mocked data before the requiring functions at the top
    it('mocked data before the requiring functions at the top', () => {

        const result = fn.callFakeData()

        expect(result.food).toBe('tocos')
    })
})

// 
describe('testing mocking data', () => {
    it('test spyOn add again because useAdd invokes it', () => {
        const mockData = { food: 'Cake' }
        jest.spyOn(fn,'callFakeData').mockImplementation(()=>mockData)
        
        const result = fn.callFakeData()

        expect(result.food).toBe('Cake')
    })
})

describe('testing mocking data', () => {

beforeEach(()=>{
    jest.restoreAllMocks()//will restore all mocked functions to its original state, this will restore all mocks to its original implementation
    
})
    it('test spyOn add again because useAdd invokes it', () => {
        
        const result = fn.callFakeData()

        expect(result.food).toBe('tocos')
    })
})



describe('calling mock fruit data', ()=>{
    it('first should be kiwi', ()=>{
        const result = fn.betterTestOfFakeData()
        expect(result[0].name).toBe('Kiwi')
        expect(result.length).toBe(3)
        expect(result).toEqual(mockPeople)
    })
    it('should get whole array', ()=>{
        const mockPeople = [
            { name: 'Kiwi', id: 0 },
            { name: 'Pineapple', id: 1 },
            { name: 'Watermelon', id: 2 },
        ]
        const result = fn.betterTestOfFakeData()
        
        expect(result.length).toBe(3)
        expect(result).toEqual(mockPeople)
    })
})

describe('test startGame', ()=>{
    it('should change startGame', ()=>{
        const mockData = [1,2,3]
        jest.spyOn(fn, 'startGame').mockImplementation(() => mockData)

        const result = fn.startGame()

        expect(result.length).toBe(3)
    })
})