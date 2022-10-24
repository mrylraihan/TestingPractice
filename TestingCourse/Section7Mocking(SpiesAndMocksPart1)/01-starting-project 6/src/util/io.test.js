import {it, expect, vi} from 'vitest'
import {promises as fs} from 'fs'
import {testFN} from './io'
import writeData from './io';

vi.mock('fs')

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