import {it, describe, expect} from 'vitest'
import { validateNotEmpty } from './validation'
describe('validateNotEmpty test', ()=>{
    it('should throw an error if empty strings is provided', ()=>{
        const testInput = ''

        const validationFn = ()=>validateNotEmpty(testInput)
        expect(validationFn).toThrow()

    })
    it('should throw an error if strings just blanks is provided', ()=>{
        const testInput = '    '

        const validationFn = ()=>{
            validateNotEmpty(testInput)
        }
        expect(validationFn).toThrow()

    })
    it('show test error message', ()=>{
        const testInput = '    '
        const testErrorMessage = 'we only got spaces'

        const validationFn = ()=>{
            validateNotEmpty(testInput, testErrorMessage)
        }
        expect(validationFn).toThrow(testErrorMessage)

    })
})