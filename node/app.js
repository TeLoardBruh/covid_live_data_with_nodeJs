const path = require('path');
const express = require('express');
// const hbs = require('hbs');
const app = express();
const getBody = require('./utils/getBody');


// config all file need to be run
app.set('view engine', 'hbs');
const pDir = path.join(__dirname, '../public');
const viewDir = path.join(__dirname, '../templates/views');
app.set('views', viewDir);
app.use(express.static(pDir));

app.set("port", process.env.PORT || 5000);




app.get('/', (req, res) => {
    getBody((err, apiDate) => {
        if (err) {
            res.send({
                err
            });
        }
        res.send("index", {
            data_info: apiDate,
        })
    });

    res.render("index");
})


app.listen(app.get("port"), function () {
    console.log("running on port", app.get("port"));
});