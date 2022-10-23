
describe('greet', ()=>{
    it('test greet function returns Hello', ()=>{
        const app = require('../app')
        const result = app.greet()
        expect(result).toBe('Hello')
    })
})
describe('greet', ()=>{
    it('test greet function returns Hello', ()=>{
        const app = require('../app')
        let name = 'Wallie'
        const result = app.greetWithName(name)
        expect(result).toBe('Hey im WALLIE')
    })
})
describe('greet', ()=>{
    it('test greet function returns Hello', ()=>{
        const app = require('../app')
        const getNameSpyOn = jest.spyOn(app, 'getName').mockImplementation((a)=>a)
        // const app = require('../app')
        let name = 'Wallie'
        const result = app.greetWithName(name)
        expect(result).toBe('Hey im Wallie')
    })
})