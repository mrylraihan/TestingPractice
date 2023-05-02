beforeEach(() => {
    jest.clearAllMocks()
    jest.resetModules()
})
// because we are calling the function we are testing in each describe block, we can call 
// the mock data in each other them 
// quick note when mocking data you need to mock the data before calling the method that uses that data 

describe('getData', ()=>{
    it('see name be wallie', ()=>{
        const app2 = require('../app2')
        const result = app2.getData()
        expect(result.name).toBe('Wallie')
    })
})

describe('test fake data', ()=>{
    it('test fake Data', ()=>{
        const app2 = require('../app2')
        jest.mock('../fakeData/fakeData.js', ()=>{return {name:"Wayel"}})
        const result = app2.getData()
        expect(result.name).toBe('Wayel')
    })
})
describe('test fake data', ()=>{
    it('test fake Data', ()=>{
        jest.mock('../fakeData/fakeData.js', ()=>{return {name:"Mike"}})
        const app2 = require('../app2')
        const result = app2.getData()
        expect(result.name).toBe('Mike')
    })
})
