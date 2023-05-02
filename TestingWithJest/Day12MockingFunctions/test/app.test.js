const app = require('../app')
// beforeEach(()=>{
//     jest.resetAllMocks() will clear all mock implementations
//  so after each test will go back to original function implementation 
// })
describe('test returnHi function', ()=>{
    it('returnHi should return hi',()=>{
        const result = app.returnHi()
        expect(result).toBe('hi')
    })
    it('returnHi should return the set mock and not hi',()=>{
        jest.spyOn(app, 'returnHi').mockImplementation(a=>a)
        const num = 1
        const result = app.returnHi(num)
        expect(result).toBe(1)
    })
    it('returnHi should return the newly set mock and not previous mock',()=>{
        jest.spyOn(app, 'returnHi').mockImplementation(a=>++a)
        const num = 1
        const result = app.returnHi(num)
        expect(result).toBe(2)
    })
    // without jest.resetAllMocks() the test will implement the last mocked implementation
    it('returnHi should return the previous mock',()=>{
        const num = 1
        const result = app.returnHi(num)
        expect(result).toBe(2)
    })
    // with jest.resetAllMocks() the test will implement the original implementation 
    it('returnHi should return the original implementation',()=>{
        jest.resetAllMocks()
        //this can be done in a before each but then each test will be reset so the mock will only be implement in the test its in 
        const result = app.returnHi()
        expect(result).toBe('hi')
    })
    it('returnHi should return hi after resetAllMocks before',()=>{
        
        const result = app.returnHi()
        expect(result).toBe('hi')
    })

    // now if you want to mock a property you have to do it differently
    it('the test variable should return an empty string',()=>{
        const result = app.test
        expect(result).toBe('')
    })
    // now if you want mock a property(variable in the file) you can use .replaceProperty
    it('test how to mock a property',()=>{
        //  the first arg is the object the second is the variable name in string 
        //the last is the value you want to replace it with
        jest.replaceProperty(app, 'test', 'Hello')
        const result = app.test
        expect(result).toBe('Hello')
    })
    it('the test variable should return an empty string', () => {
        // this will restore the variable to it original value
        jest.restoreAllMocks()
        const result = app.test
        expect(result).toBe('')
    })
})