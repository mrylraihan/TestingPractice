const nameData = require('./data/fakeNameData')
const foodData = require('./data/fakeFoodData')
const getNameData = ()=>{
    
    return nameData
}

const getObjData = ()=>{
    return foodData
}
getNameData()
module.exports = {
    getNameData, getObjData
}