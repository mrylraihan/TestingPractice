const index = require('../app')

describe('exponent numbers test',()=>{
    
    it('should return the result of the number raised to the exponent',()=>{
        jest.spyOn(index, 'multipleNumbers').mockImplementation((x,y)=>x*y)
        // arrange
        const num = 3;
        const exponent = 4;

        // act
        const result = index.exponentNumbers(num, exponent)
        // assert
        expect(result).toBe(81)
    })
    it('should return the result of the number raised to the sum',()=>{
        jest.spyOn(index, 'multipleNumbers').mockImplementation((x,y)=>x+y)
        // arrange
        const num = 3;
        const exponent = 4;

        // act
        const result = index.exponentNumbers(num, exponent)
        // assert
        expect(result).toBe(13)
    })
})

describe('exponent numbers test',()=>{
    const mockAdd = jest.spyOn(index, 'addNumbers').mockImplementation((x,y)=>x+y)

    beforeEach(()=>mockAdd.mockClear())
    // afterAll(()=>mockAdd.mockRestore())
    it('should return the result of the number raised to the exponent',()=>{
        // arrange
        const num1 = 1;
        const num2 = 2;
        const exponent = 4;

        // act
        const result = index.testingFnCall(num1,num2, exponent)
        // assert
        expect(result).toBe(12)
        expect(mockAdd).toHaveBeenCalledTimes(exponent)
    })
    it('should return the result of the number raised to the exponent',()=>{
        // arrange
        const num1 = 1;
        const num2 = 2;
        const exponent = 4;

        // act
        const result = index.testingFnCall(num1,num2, exponent)
        // assert
        expect(result).toBe(12)
        expect(mockAdd).toHaveBeenCalledTimes(exponent)
        // expect(mockAdd).toHaveBeenCalledTimes(8)
    })
})