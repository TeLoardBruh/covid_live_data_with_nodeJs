const request = require('request');
const fetch = require("node-fetch");


const getBody = () => {
    const url = "https://covid19.mathdro.id/api/countries/cambodia";
    // const urlNameCountry = "https://covid19.mathdro.id/api/countries/"+encodeURIComponent(countryName);
    request(url, {
        json: true
    }, async (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(url);
        const respsonse = await fetch(url);
        const toJs = await respsonse.json();
        // console.log(toJs);
    });
    
}


module.exports = getBody;