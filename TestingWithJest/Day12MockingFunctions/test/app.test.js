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
})