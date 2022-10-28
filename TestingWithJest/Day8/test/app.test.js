describe('test doSomething' , ()=>{
    it('test returns', ()=>{
        const app = require('../app')
        const result = app.doSomething()
        expect(result).toBe('hey im doing Something')
    })
})

describe('mock doSomething', ()=>{
    it('return hi', ()=>{
        const app = require('../app')
        const spyOnMethod = jest.spyOn(app, 'doSomething').mockImplementationOnce(()=>'hi')
        // mockImplementationOnce will the mock just for this test, if we did mockImplementation it would change it for all test after this one 
        // const spyOnMethod = jest.spyOn(app, 'doSomething').mockImplementation(()=>'hi') this would fail
        const result = app.doSomething()
        expect(result).toBe('hi')
    })
})

describe('test doSomething', () => {
    it('test returns', () => {
        const app = require('../app')
        const result = app.doSomething()
        expect(result).toBe('hey im doing Something')
    })
})

const objTest = {
    method1(){
        return 'im method1'
    },
    method2(){

    }
}

describe('test fake object', ()=>{
    it('mock method1', ()=>{
        const spyOnMethod = jest.spyOn(objTest, 'method1').mockImplementationOnce(()=>"i work")
        // const spyOnMethod = jest.spyOn(objTest, 'method1').mockImplementation(()=>"i work")
        const test = 'i work'
        const result = objTest.method1()
        expect(result).toBe(test)
    })
})
describe('test fake object', ()=>{
    it('mock method1', ()=>{
        const test = 'im method1'
        const result = objTest.method1()
        expect(result).toBe(test)
    })
})