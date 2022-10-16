const data = require('./data/fakeData')
const people = require('./data/moreFakeData')

const sayHello = (name)=>{
    return `hey im ${name}`
}

const getDetails = ({name, weight, height})=>{
    return `detail of ${name}, weight:${weight}, height:${height}`
}

const count = (numbers)=> {
    let sum = 0;

    for (const number of numbers) {
        sum += +number;
    }
    return sum;
}

const add = ()=>{}

const subtract = ()=>{}

const useAdd = (a,b)=>{
    const total = module.exports.add(a,b)
    return `your total is ${total}`
}
const callFakeData = ()=>{
    return data
}

const betterTestOfFakeData = ()=>{
    return people
}

module.exports = {
    sayHello,
    getDetails,
    add,
    subtract,
    useAdd,
    callFakeData,
    count,
    betterTestOfFakeData
}