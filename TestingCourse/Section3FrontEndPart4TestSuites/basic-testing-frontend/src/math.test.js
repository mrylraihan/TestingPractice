import { it, expect, describe } from 'vitest'
import {add, subtract, testThrown} from './math'

describe('add() test', ()=>{

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
    
    it('should throw an error is provided multiple args instead of an array',()=>{
        const num1 = 2;
        const num2 = 2;
        
        const resultFn = () =>{
            add(num1, num2)
        }
        
        expect(resultFn).toThrow()
    })
    
})

describe('subtract() test', ()=>{

    // my own test
    it('should test subtract returns the right total', ()=>{
        const num = [10, 5]
        
        const result = subtract(num)
        expect(result).toBe(-15)
    })
    
    it('should test out its only getting one argument', ()=>{
        const num1 = 2;
        const num2 = 2;
        
        const resultFn = () => {
            subtract(num1, num2)
        }
        
        expect(resultFn).toThrow()
    })
    it('should test out its only getting one argument', ()=>{
        
        const resultFn = () => {
            subtract()
        }
        expect(resultFn).toThrow()
        expect(resultFn).toThrow(TypeError)
        expect(resultFn).toThrow('numbers is not iterable')
        expect(resultFn).toThrow(/is not iterable/)
    })
    it('should test out its only getting one argument', ()=>{
        
        const resultFn = () => {
            subtract()
        }
        
        expect(resultFn).toThrow('numbers is not iterable')
    })
})
describe('testThrown test', ()=>{
    it('test testThrown Error', ()=>{
        const resultFn = ()=>{
            testThrown()
        }
        expect(resultFn).toThrow()
        expect(resultFn).toThrow(Error)
        expect(resultFn).toThrow(/Something went wrong/)
    })
})  