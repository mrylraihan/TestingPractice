const makeUpperCase = (a)=>{
    return a.toUpperCase()
}

const makeWordUpperCase = (a)=>{
    const newWord = module.exports.makeUpperCase(a)
    return newWord
}

// console.log(makeWordUpperCase('test'))

module.exports = {makeUpperCase, makeWordUpperCase}