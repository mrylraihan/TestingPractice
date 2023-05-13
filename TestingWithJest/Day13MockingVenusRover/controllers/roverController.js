const express = require('express')
const router = express.Router()
const rover = require('../rover/rover')

router.get('/', (req,res)=>{
    const roverLocation = rover.getRoverLocation()
    res.json(roverLocation)
})
router.get('/turn/:direction', (req,res)=>{
    const newRoverLocation = rover.changeRoverDirection(req.params.direction)
    res.json(newRoverLocation)
})
router.get('/move/:move', (req,res)=>{
    const roverMove = rover.moveRover(req.params.move)
    res.json(roverMove)
})

module.exports = router