import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

it('should return NaN', ()=>{
    const word = 'Word'
    const result = transformToNumber(word)

    expect(result).toBe(NaN)
})
it('should return number', ()=>{
    const three = '3'
    const result = transformToNumber(three)

    expect(result).toBe(3)
    expect(result).toBe(parseInt(three))
})
it('should return error', ()=>{
  
    const resultFN = ()=>{
        transformToNumber()
    }

    expect(resultFN).not.toThrow()
})
