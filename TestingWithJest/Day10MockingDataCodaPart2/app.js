function addNumbers(num1, num2) {
    return num1 + num2
}

function subtractNumbers(num1, num2) {
    return num1 - num2
}

function multipleNumbers(num1, num2) {
    return num1 - num2
}

function divideNumbers(num1, num2) {
    return num1 / num2
}
function exponentNumbers(num1, exponent) {
    let acc = 1
    for (let i = 0; i < Math.abs(exponent); i++) {
        // acc = multipleNumbers(acc, num1)
        acc = module.exports.multipleNumbers(acc, num1)

    }
    if (exponent < 0) {
        acc = 1 / acc
    }
    return acc
}

const testingFnCall=(num1,num2,times)=>{
    let total = 0
    for (let i = 0; i < times; i++) {
        let result = module.exports.addNumbers(num1, num2); 
        total = total + result
    }
    return total
}

// console.log(testingFnCall(1,2,2))

module.exports = {
    addNumbers, subtractNumbers, multipleNumbers, divideNumbers, exponentNumbers, testingFnCall
}
