const data = require('./data/fakeData')
const getData1 = ()=>{
   return data[0]
}
const getData2 = ()=>{
    return data[1]
    
}
const getData3 = ()=>{
    return data[2]

}

module.exports = {
  getData1,getData2,getData3
}