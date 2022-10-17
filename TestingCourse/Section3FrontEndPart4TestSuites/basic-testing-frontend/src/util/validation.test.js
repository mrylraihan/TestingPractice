import { it, expect, describe } from 'vitest'
import { validateNumber, validateStringNotEmpty } from './validation'

describe('validateStringNotEmpty test', ()=>{

    it('should not return anything', ()=>{
        const word = 'word'
        
        const result = validateStringNotEmpty(word)
        const resultFn = ()=>validateStringNotEmpty(word)
        
        expect(result).toBe(undefined)
        expect(resultFn).not.toThrow()
    })
    it('should return error', ()=>{
        const word = ''
        
        const resultFn = ()=>validateStringNotEmpty(word)
        
        expect(resultFn).toThrow()
        expect(resultFn).toThrow(/Invalid input/)
    })
})

describe('validateNumber test', ()=>{

    it('should not return anything', ()=>{
        const num = 2
        
        const result = validateNumber(num)
        const resultFn = () => validateNumber(num)
        
        expect(result).toBe(undefined)
        expect(resultFn).not.toThrow()
    })
    it('should return error', ()=>{
        const num = 'two'
        
        const resultFn = () => validateNumber(num)
        
        expect(resultFn).toThrow()
        expect(resultFn).toThrow(/Invalid number/)
    })
})