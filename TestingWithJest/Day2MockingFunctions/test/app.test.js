const app = require('../app')

describe('test doSomething',()=>{
    // because the spy is out side the it block 
    // it will also run for the next describe block on line 15
    const sumUpSpyOn = jest.spyOn(app, 'doSomething').mockImplementation((a,b)=>a+b)
    it('should add up',() => {
        const num1 = 1;
        const num2 = 2;

        const result = app.doSomething(num1, num2)
        expect(result).toBe(3)
    })
})
describe('test doSomething',()=>{
    it('should add up',() => {
        const num1 = 3;
        const num2 = 3;

        const result = app.doSomething(num1, num2)
        expect(result).toBe(6)
    })
})

describe('test doSomething again',()=>{
    it('should subtract up',() => {
        const sumUpSpyOn = jest.spyOn(app, 'doSomething').mockImplementation((a,b)=>a-b)
        const num1 = 2;
        const num2 = 2;

        const result = app.doSomething(num1, num2)
        expect(result).toBe(0)
    })
})
describe('test saySomething ',()=>{
    it('should subtract up',() => {
        const saySomeSpyOn = jest.spyOn(app, 'saySomething').mockImplementation((a,b)=>`${a} ${b}`)
        const word1 = 'hey';
        const word2 = 'there';

        const result = app.saySomething(word1, word2)
        expect(result).toBe('hey there')
    })
})
describe('test doSomething again',()=>{
    it('should subtract up',() => {
        const saySomeSpyOn = jest.spyOn(app, 'saySomething').mockImplementation((a, b) => `hey there, im ${a} ${b}`)
        const word1 = 'Wallie';
        const word2 = 'Raihan';

        const result = app.saySomething(word1, word2)
        expect(result).toBe('hey there, im Wallie Raihan')
    })
})


// testing and mocking nested functions 

describe('testing sayHi', ()=>{
    const addNameSpyOn = jest.spyOn(app, 'addNames').mockImplementation((a, b)=>`${a} ${b}`)
    it('testing sayHi with spyOn addNames',()=>{
        const firstN = 'Wallie'
        const secondN = 'Raihan'

        const result = app.sayHi(firstN, secondN)
        expect(result).toBe('Hey im Wallie Raihan!')
    })
    it('testing sayHi with spyOn addNames',()=>{
        const firstN = 'Wayel'
        const secondN = 'Raihan'

        const result = app.sayHi(firstN, secondN)
        expect(result).toBe('Hey im Wayel Raihan!')
    })
})
describe('testing sayHi', ()=>{
    // const addNameSpyOn = jest.spyOn(app, 'addNames').mockImplementation((a, b)=>`${a} ${b}`)
    it('testing sayHi with spyOn addNames',()=>{
        const firstN = 'Wallie'
        const secondN = 'Raihan'

        const result = app.sayHi(firstN, secondN)
        expect(result).toBe('Hey im Wallie Raihan!')
    })
   
})


describe('grade test', ()=>{
    const gradeTestSpy = jest.spyOn(app, 'gradeTest').mockImplementation(() => `testing your grade`)
    it('testing grade', ()=>{
        const result = app.gradeTest()
        expect(result).toBe('testing your grade')
    })
    it('testing grade', ()=>{
        const result = app.gradeTest()
        expect(result).not.toBe('grade')
    })

})