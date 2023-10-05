const { validateIp, sayHi } = require('../second')


describe("validateIp", ()=>{
    it('Should output undefined if no input is passed through', ()=>{
        let emptyIp;
        const result = validateIp(emptyIp)
        // expect(result).toBeUndefined()
        expect(result).toBeFalsy()
        expect(result).toEqual(undefined)
    })
    it("Should output an error message if the IP address doesn't contain enough parts", ()=>{
        let testIp = '192.168.0';
        const result = validateIp(testIp)
        
        expect (result).toBeTruthy()
        expect (result).toEqual('There are 4 parts to a valid IP Address')
    })
    it("Should output an error message if the IP address contains an empty part", ()=>{
        let testIp = '192..0.1';
        const result = validateIp(testIp)
        
        expect (result).toBeTruthy()
        expect (result).toEqual('a valid IP has 4 numerical parts')
    })
    it("Should output an error message if the IP address less then 0 or greater then 255", ()=>{
        let testIp = '192.257.1.1';
        const result = validateIp(testIp)
        
        expect (result).toBeTruthy()
        expect (result).toEqual('a valid IP has 4 numerical parts is not less then 0 and no more then 255')
    })
    it("Should output an error message if the IP address contains a leading 0", ()=>{
        let testIp = '192.001.0.1';
        const result = validateIp(testIp)
        
        expect (result).toBeTruthy()
        expect(result).toEqual('the first part of an IPv4 address cannot be zero')
    })
    it("if Ip is correct return ip", ()=>{
        let testIp = '192.121.223.112';
        const result = validateIp(testIp)
        
        expect (result).toBeTruthy()
        expect(result).toEqual(testIp)
    })
    it('sayHi',()=>{
        let result = sayHi()
        expect(result).toBe("hi")
    })
   
})