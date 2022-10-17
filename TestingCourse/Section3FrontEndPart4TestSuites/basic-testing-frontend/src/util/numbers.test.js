import { it, expect, describe } from 'vitest'
import { transformToNumber } from './numbers'

describe('transformToNumber', ()=>{

    it('should transform a string number to a number of type number', ()=>{
        const input = '1'
        
        const result = transformToNumber(input)
        
        expect(result).toBe(parseInt(input))
        expect(result).toBeTypeOf('number')
    })
    
    it('should yield NaN for non-transformable values', ()=>{
        const input = 'invalid'
        
        const result = transformToNumber(input)
        expect(result).toBeNaN()
    })
    it('should yield NaN for non-transformable values', ()=>{
        const input = 'invalid'
        const input2 = {}
        const result = transformToNumber(input)
        const result2 = transformToNumber(input2)
        expect(result).toBeNaN()
        expect(result2).toBeNaN()
    })
})