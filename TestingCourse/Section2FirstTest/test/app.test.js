const addUp = require('../app')

describe('testing addup', ()=>{
    it('should sum total', ()=>{
        const num1 = 2;
        const num2 = 3;

        const result = addUp(num1, num2)

        expect(result).toBe(5)
    })
})


it('adds 1 + 2 to equal 3', () => {
    expect(addUp(1, 2)).toBe(3);
});