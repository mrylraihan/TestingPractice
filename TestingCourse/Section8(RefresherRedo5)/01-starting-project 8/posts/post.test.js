import {describe, it, expect} from 'vitest'
import { extractPostData } from './posts'

describe('extractPostData', ()=>{
    it('should extract title and content from the provided form data', ()=>{
       const testTile = 'test'
       const testContent = 'test content'
        const testObj = {
            title:testTile,
            content:testContent
            ,get(key){
            return this[key]
            }
        }
        const data = extractPostData(testObj)
        expect(data.title).toBe(testTile)
        expect(data.content).toBe(testContent)
    })
})