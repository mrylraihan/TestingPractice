import {it, vi, expect} from 'vitest'
import { HttpError } from './errors'
import {sendDataRequest} from './http'
// to mock globally avaiable functions like the fetch call which is a globall available 
const testResponseData = {testKey: 'testData'}
// we use vi.fn to create a hallow fake test we can track
const testFetch = vi.fn((url, options)=>{
    return new Promise((resolve,reject)=>{
        if(typeof options.body !== 'string'){
            return reject('not a string!')
        }
        const testResponse = {
            ok:true,
            json(){
                return new Promise((resolve, reject)=>{
                    resolve(testResponseData)
                });
            }
        }
        resolve(testResponse);
    })
})
// we use the vi method stubGlobal
vi.stubGlobal('fetch', testFetch)

it('should re turn any available any response data ', ()=>{
    // we what to make sure the response from our fetch is mocked
    const testData = {key:'test'}
    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
})

it('should convert the provided data to JSON before sending the request', async ()=>{
    const testData = { key: 'test' }
    let errorMessage;
    try{
        await sendDataRequest(testData)
    }catch(error){
        errorMessage = error;
    }
    expect(errorMessage).not.toBe('not a string!')

})

it('should throw an HttpError', ()=>{
    const testData = { key: 'test' }
    testFetch.mockImplementationOnce((url, options) => {
        return new Promise((resolve, reject) => {
            const testResponse = {
                ok: false,
                json() {
                    return new Promise((resolve, reject) => {
                        resolve(testResponseData)
                    });
                }
            }
            resolve(testResponse);
        })
    })
    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
})