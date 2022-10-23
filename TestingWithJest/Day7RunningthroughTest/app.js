const greet = ()=>{
    return 'Hello'
}

const getName= (name)=>{
    return name.toUpperCase()
}

const greetWithName=(input)=>{
    let name = module.exports.getName(input)
return `Hey im ${name}`
}

module.exports = {
    greet,
    getName, 
    greetWithName
}