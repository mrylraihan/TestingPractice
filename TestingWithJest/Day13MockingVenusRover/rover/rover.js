const roverData = require('../data/roverData')
const rover = require('../data/roverData')

const getRoverLocation = ()=>{
    return rover;
}

const changeRoverDirection = (direction) =>{
    const dir = ['North','East','South','West']
    if(direction === 'right'){
        if(roverData.directionFacing == 'West'){
            roverData.directionFacing = dir[0]
    }else{
        let roverDir = dir.indexOf(roverData.directionFacing)
        roverData.directionFacing = dir[roverDir+1]
    }
}else if(direction === 'left'){
    if(roverData.directionFacing === 'North'){
        roverData.directionFacing = dir[dir.length-1]
    }else{
        let roverDir = dir.indexOf(roverData.directionFacing)
        roverData.directionFacing = dir[roverDir-1]
    }
}
return roverData
}
// console.log(getRoverLocation())
const moveRover = (move)=>{
    move == 'forwards' && roverData.directionFacing == 'North'? roverData.coordinates.y++:''
    move == 'forwards' && roverData.directionFacing == 'South'? roverData.coordinates.y--:''
    move == 'backwards' && roverData.directionFacing == 'North'? roverData.coordinates.y--:''
    move == 'backwards' && roverData.directionFacing == 'South'? roverData.coordinates.y++:''
    move == 'forwards' && roverData.directionFacing == 'East'? roverData.coordinates.x++:''
    move == 'forwards' && roverData.directionFacing == 'West'? roverData.coordinates.x--:''
    move == 'backwards' && roverData.directionFacing == 'East'? roverData.coordinates.x--:''
    move == 'backwards' && roverData.directionFacing == 'West'? roverData.coordinates.x++:''
    if(roverData.coordinates.x == 6||roverData.coordinates.x == -6||roverData.coordinates.y == 6||roverData.coordinates.y == -6){
        roverData.coordinates.x = 0;
        roverData.coordinates.y = 0;
        roverData.directionFacing = "North";
        return 'sorry your rover is damaged'
    }else{
        return roverData
    }
}
 
module.exports = {
    getRoverLocation,
    changeRoverDirection,
    moveRover
}