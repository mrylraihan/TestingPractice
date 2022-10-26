import {describe, expect, it, vi} from 'vitest'
import * as md from './doSomething/sdMethods'
import {sumUp, useSumUp} from './testingCb'

describe('test sumUp', ()=>{
   it('testing sumUp return', ()=>{
       const num1= 2
       const num2= 2
       const result = sumUp(num1, num2)
       expect(result).toBe(4)
   })
})
describe('test sumUp', ()=>{
   it('testing sumUp return', ()=>{
       const num1= 2
       const num2= 2
       const result = useSumUp(num1, num2, sumUp)
       expect(result).toBe(4)
   })
})
describe('test sumUp mock', ()=>{
   it('testing sumUp return', ()=>{
       const num1= 2
       const num2= 2
       const mockedSumUp = vi.fn((a,b)=>[a,b])
       const result = useSumUp(num1, num2, mockedSumUp)
       expect(result).toEqual([2,2])
       expect(mockedSumUp).toBeCalled()
   })
})

// vi.mock('doSomething')
describe('test doSomething', () => {
    it('testing doSomething', () => {
        
        const result = md.doSomething()
        expect(result).toBe('doSomething')
    })
})

describe('test doSomething', () => {
    it('testing doSomething', () => {
    //    vi.mock(md, () => 'nothing')
        const spyonmd = vi.spyOn(md, 'doSomething').mockImplementation(() => 'nothing')

        const result = md.doSomething()
        expect(spyonmd).toBeCalled()
        expect(result).toBe('nothing')
    })
})