const path = require('path');
const express = require('express');
// const hbs = require('hbs');
const app = express();
const getBody = require('./utils/getBody');


// config all file need to be run
app.set('view engine','hbs');
const pDir = path.join(__dirname, '../public');
const viewDir = path.join(__dirname,'../templates/views');
app.set('views', viewDir);
app.use(express.static(pDir));





app.get('/', (req, res) => {
    getBody((err,apiDate)=>{
        if(err){
            res.send({err});
        }
        res.send("index",{
            data_info: apiDate,
        })
    });
    
    res.render("index");
})



app.listen('3000', (req, res) => {
    console.log("running on port " + `http://localhost:3000/`);
})