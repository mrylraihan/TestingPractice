const fn = require('../app')

describe('testing make to upper case', ()=>{
    // before each will be here
    beforeEach(()=>{
        jest.resetAllMocks()
        console.log('testing')
    })

    it('let test makeUpperCase', ()=>{
        // arrange
        const word = 'word'
        // act
        const result = fn.makeUpperCase(word)
        //assert
        expect(result).toBe(word.toUpperCase())
    })
    it('lets test makeWordUpperCase', ()=>{
        // arrange
        const word = 'word'
        // act
        const result = fn.makeWordUpperCase(word)
        //assert
        expect(result).toBe(word.toUpperCase())
    })
    it('lets test makeUpperCase mock', ()=>{
        jest.spyOn(fn, 'makeUpperCase').mockImplementation(a=>a)
        // arrange
        const word = 'word'
        // act
        const result = fn.makeWordUpperCase(word)
        //assert
        expect(result).not.toBe(word.toUpperCase())
        expect(result).toBe(word)
    })
    it('let test makeUpperCase', () => {
        // arrange
        const word = 'word'
        // act
        const result = fn.makeUpperCase(word)
        //assert
        expect(result).toBe(word.toUpperCase())
    })
    it('lets mock the nest makeUpperCase', ()=>{
        jest.spyOn(fn, 'makeUpperCase').mockImplementation(a => 'Mr.'+a)
        // arrange
        const word = 'word'
        // act
        const result = fn.makeWordUpperCase(word)
        //assert
        expect(result).not.toBe(word.toUpperCase())
        expect(result).toBe('Mr.word')
    })
    
    
})