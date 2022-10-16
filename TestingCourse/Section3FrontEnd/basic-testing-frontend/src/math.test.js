import { it, expect } from 'vitest'
import {add} from './math'

it('testing add to sum all number values in an array',()=>{
    const result = add(...[1,2,3]);
    expect(result).toBe(6)
});

it('should not return a negative', ()=>{
    const result = add(...[10])
    expect(result).not.toBe(11)
    expect(result).toBe(10)
})