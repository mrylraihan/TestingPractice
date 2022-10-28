import { it, expect, describe, vi } from 'vitest'
import  {HttpError, ValidationError}  from './errors'
// import  * as ErrorMethods  from './errors'

describe('test HttpError', ()=>{
    it('checking if we get back an object from HttpError class', ()=>{
        const status = 1;
        const message = 'I work'
        const data = {key:'test'}

        const newError = new HttpError(status, message, data)
        expect(newError.message).toBe(message)
        expect(newError.data).toBe(data)
        expect(newError.statusCode).toBe(status)
    })
})

describe('test ValidationError', ()=>{
    it('testing the return of ValidationError', ()=>{
        const message = 'im working'
        const result = new ValidationError(message)
        expect(result.message).toBe(message)
    })
})
// describe('test Mock HttpError', ()=>{
//     it('testing the return of ValidationError', ()=>{
//         const httpMock = vi.spyOn(ErrorMethods, 'HttpError').mockImplementation(() => 'im working') // how to spy on functions but not objects if we add new to our HttpError we will fail because it will be calling the class 
//         const message = 'im working'
//         const result = HttpError()
//         expect(httpMock).toBeCalled()
//         expect(result).toBe(message)
//     })
// })
