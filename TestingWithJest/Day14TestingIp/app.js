const validateIp = (input)=>{
    if(!input){
        return 
    }
    // let result = ''
    let ipArr = input.split('.')
    if(ipArr.length<=3){
        return 'There are 4 parts to a valid IP Address'
    }

    if(ipArr.includes("")){
        return 'a valid IP has 4 numerical parts'
    }

    if(ipArr.find(ele=>+ele<0||+ele>255)){
        return "a valid IP has 4 numerical parts is not less then 0 and no more then 255"
    }
    if (ipArr.find(ele => ele.length > 1 && +ele[0] === 0)){
        return `the first part of an IPv4 address cannot be zero`
    }

    return input
}

module.exports = validateIp

// input = '192..0.1'
// const test = input.split('.')

// console.log(test)
