import { describe, it, expect } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber', ()=>{

  it('should transform a string number to a number of type number', () => {
    const input = '1';
    
    const result = transformToNumber(input);
    
    expect(result).toBeTypeOf('number');
  });
  
  it('should transform a string number to a number of type number', () => {
    const input = '1';
    
    const result = transformToNumber(input);
    
    expect(result).toBe(+input);
  });
  
  it('should yield NaN for non-transformable values', () => {
    const input = 'invalid';
    const input2 = {};
    
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
    
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
})

describe('cleanNumbers', ()=>{
  it('test core functionality, should return an array of number values is an array of string numbers are provided', ()=>{
    const numberValues = ['1','2','3','4','5']
    const expectedResult = [1,2,3,4,5]

    const result = cleanNumbers(numberValues)
    expect(result).toEqual(expectedResult)
    
  })
  it(' should return an array of number values is an array of string numbers are provided', ()=>{
    const numberValues = ['1','2','3','4','5']
    
    const result = cleanNumbers(numberValues)
    expect(result[0]).toBeTypeOf('number')
    expect(result).toEqual([1,2,3,4,5])
    
  })

  it('should throw an error if an array with at least one empty string is provided', ()=>{
    const numberValues = ['', 1];
    const cleanFn = ()=>{
      cleanNumbers(numberValues)
    }
    expect(cleanFn).toThrow();
  })

})