## Instructions : for setup up a jest test suite 
<hr>

1. Now to start this from scratch we need to follow a few steps 
1. first create a project folder 
1. then create a main js file where you will have all the functions you will be testing 
1. then run npm init -y to create a package.json 
1. then create a folder called test in you root folder, and the test fille should be named the same as the file you are trying to test with the file extension `.test.js`
1. so if you testing functions in `app.js` (where all your functions are) then in your test folder you will create a `app.test.js`
1. the run `npm i --save-dev jest` this will install jest ot your dependencies 
1. then run `npm jest --init` this will create a package.json for the jest tool specifically 
1. once you install this you will run through a while bunch of options 
1. use npm npm test to run your test


```js
// importing functions from app.js to test
const {sumUp,sumDown,multiply,divide} = require('../app')

//  what function you are testing
describe('sumUp test',()=>{
    // what you plan to test 
    it('sum up arguments',()=>{
        // Arrange
        const num1 = 2
        const num2 = 2
        // Act
        const result = sumUp(num1, num2)
        // Assert
        expect(result).toBe(4)
    })
})


```

***Resources***

- [resource for test methods on expect](https://jestjs.io/docs/expect)