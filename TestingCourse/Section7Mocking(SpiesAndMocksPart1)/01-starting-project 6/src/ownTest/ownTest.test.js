import {it, expect, describe} from 'vitest'
import { sayName, greetName } from './ownTest'

describe('test ownTest.js', ()=>{
    it('test if it works', ()=>{
        const result = greetName('Wallie')
        expect(result).toBe('Wallie')
    })
    // it('test if it sayName works', ()=>{
    //     greetName('Wallie')
    //     expect(greetName).toBeCalled()
    //     // expect(sayName).toBeCalled()
    //     //  this will fail because we havent spied on the sayName or greetName to use tobeCalled
    // })

})