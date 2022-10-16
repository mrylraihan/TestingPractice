const sumUp = (a,b)=>{
    if(isNaN(a)||isNaN(b)){
        return 'please return a number'
    }else{
        return a+b
    }
}
const sumDown = (a,b)=>{
    return a-b
}
const multiply = (a,b)=>{
    return a*b
}
const divide = (a,b)=>{
    return a/b
}
console.log(sumUp(2,'ll'))

const dummyFn= ()=>{

}

const useDummyFn = (a, b)=>{
    const name = module.exports.dummyFn(a,b)
    return  `hey im ${name}`
}

module.exports = {
    sumUp,
    sumDown,
    multiply,
    divide,
    dummyFn,
    useDummyFn
}