import {it, expect} from 'vitest'
import writeData from './io';

it('should execute the writefile method', ()=>{
    const testData = 'Test';
    const testFilename = 'test.txt';
    expect(writeData(testData, testFilename)).resolves.toBeUndefined()
});