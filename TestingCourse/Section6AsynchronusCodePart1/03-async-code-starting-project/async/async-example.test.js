import {expect, it} from 'vitest'
import { fetchCall, generateToken, generateTokenPromise } from './async-example'

it('should generate a token value', (done)=>{
    const testUserEmail = 'test@test.com'

    generateToken(testUserEmail, (err, token)=>{
        try{
            expect(token).toBeDefined()
            // expect(token).toBe(2)
            done()
        }catch(err){
            done(err)
        }
    })
})

it('should generate a token value', ()=>{
    const testUSerEmail = 'test@test.com'

    return expect(generateTokenPromise(testUSerEmail)).resolves.toBeDefined()
})
it('should generate a token value', ()=>{
    const testUSerEmail = 'test@test.com'

    return expect(generateTokenPromise(testUSerEmail)).resolves.not.toBe(2)
})
it('should generate a token value', async ()=>{
    const testUSerEmail = 'test@test.com'

    const token = await generateTokenPromise(testUSerEmail)
    expect(token).not.toBe(2)
})