import {describe, expect, it, vi} from 'vitest'
import {generateReportData} from './data'

describe('generateReportData', ()=>{
    it('should have called in passed in function', ()=>{
        const logger = vi.fn()//creates an empty function and keeps track of any function executions of this function 
        generateReportData(logger)
        expect(logger).toHaveBeenCalled()
    })
})
