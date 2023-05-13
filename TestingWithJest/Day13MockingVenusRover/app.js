const express = require('express');
const app = express();
const port = 4000;

const roverController = require('./controllers/roverController');

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/rover', roverController)
app.use('/', (req,res)=>res.json({message:'im working'}))

app.listen(port, ()=>console.log(`app is working on port ${port}`))