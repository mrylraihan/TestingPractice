import { describe, it, expect, beforeEach } from 'vitest'
import { extractPostData } from './posts'

const testTile = 'test'
const testContent = 'test content'
let testObj
describe('extractPostData', ()=>{
    beforeEach(()=>{
        testObj = {
            title: testTile,
            content: testContent
            , get(key) {
                return this[key]
            }
        }
    })
    it('should extract title and content from the provided form data', ()=>{
       
        const data = extractPostData(testObj)
        expect(data.title).toBe(testTile)
        expect(data.content).toBe(testContent)
    })
})