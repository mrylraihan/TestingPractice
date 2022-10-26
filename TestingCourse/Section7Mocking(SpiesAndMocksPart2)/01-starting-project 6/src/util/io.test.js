import {it, expect, vi} from 'vitest'
import {promises as fs} from 'fs'
import {testFN} from './io'
import path from 'path'
import writeData from './io';

vi.mock('fs')
vi.mock('path', ()=>{
    return {
        default:{
            join:(...args)=>{  
                return args[args.length-1]
            }
        }
    }
})
it('should execute the writefile method', ()=>{
    const testData = 'Test';
    const testFilename = 'test.txt';
    writeData(testData, testFilename)
    // expect(writeData(testData, testFilename)).resolves.toBeUndefined()
    expect(fs.writeFile).toBeCalled()

});
it('should execute the writefile method', ()=>{
  
    const testFilename = 'test.txt';
    testFN(testFilename)
    // expect(writeData(testData, testFilename)).resolves.toBeUndefined()
    expect(fs.writeFile).toBeCalled()

});
it('should execute the writefile method', ()=>{
  
    const testData = 'Test';
    const testFilename = 'test.txt';
    writeData(testData, testFilename)
    // expect(writeData(testData, testFilename)).resolves.toBeUndefined()
    expect(fs.writeFile).toBeCalledWith(testFilename, testData)

});