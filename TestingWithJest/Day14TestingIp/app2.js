const validateIp = (input)=>{
    let results = ''
    if(!input){
        results = undefined
    }
    

    let arr = input.split('.');
    if(arr.length<4){
        results = 'There are 4 parts to a valid IP Address'
    }else{
        arr.forEach(element => {
            if(element == ''){
                results = 'a valid IP has 4 numerical parts'
            }else if(+element>255||+element<0 && element !=""&& !(element[0]&&element[1])){
                results = 'a valid IP has 4 numerical parts is not less then 0 and no more then 255'
            }else if(element[0]=="0" && element[1]){
                results = "the first part of an IPv4 address cannot be zero"
            }
        });
    }
return results

}

module.exports = validateIp

input = '192..0.1'
const test = input.split('.')

console.log(test)
