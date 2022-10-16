import { it, expect } from 'vitest'
import {add} from './math'

it('testing add to sum all number values in an array',()=>{
    // Arrange
    const arr = [1,2,3]
    // Act
    const result = add(arr);
    // Assert
    const expectedResult = arr.reduce((preV, curV)=>preV+=curV, 0)
    expect(result).toBe(expectedResult)
});

it('should not return a negative', ()=>{
    // Arrange
    const arr = [10]
    // Act
    const result = add(arr);
    // Assert
    const expectedResult = arr.reduce((preV, curV) => preV += curV, 0)
    expect(result).toBe(expectedResult)
})

it('should return NaN if at least on invalid number is provided', ()=>{
   const inputs = ['invalid', 2, 3]

   const result = add(inputs)

   expect(result).toBeNaN()
})

it('should yield the correct sum if an array of numeric strings values is provided',()=>{
    // Arrange
    const arr = ['1','2','3']
    // Act
    const result = add(arr);
    // Assert
    const expectedResult = arr.reduce((preV, curV) => +preV + +curV, 0)
    expect(result).toBe(expectedResult)
})

it('should yield 0 if an empty array is provided', ()=>{
    const nums = []
    const result = add(nums)

    expect(result).toBe(0)
})

it('should throw an error if no value is passed into the function', ()=>{
    const resultFn = ()=>{
        add();
    }
    expect(resultFn).toThrow()
})
it('should not throw an error if no value is passed into the function', ()=>{
   const num = [1,2,3]
    const resultFn = ()=>{
        add(num);
    }
    expect(resultFn).not.toThrow()
})