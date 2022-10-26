import {describe, expect, it, vi} from 'vitest'
import {generateReportData} from './data'

describe('generateReportData', ()=>{
    it('should have called in passed in function', ()=>{
        const logger = vi.fn()//creates an empty function and keeps track of any function executions of this function 
        generateReportData(logger)
        expect(logger).toHaveBeenCalled()
    })
})
describe('logger test', ()=>{
    it('should return what mockImplementation returns ', ()=>{
        const logger = vi.fn()//creates an empty function and keeps track of any function executions of this function 
        logger.mockImplementation(()=>'hello')//replace the function body
        const result = logger()
        expect(result).toBe('hello')
    })
    it('should return what mockImplementation returns ', () => {
        const logger = vi.fn(() => 'bat')//creates an empty function and keeps track of any function executions of this function 

        const result = logger()
        expect(result).toBe('bat')
    })
})
describe('logger test', ()=>{
    it('should return what mockImplementation returns ', ()=>{
        const logger = vi.fn(() => 'bat')//creates an empty function and keeps track of any function executions of this function 
        
        const result = logger()
        expect(result).toBe('bat')
    })
})
