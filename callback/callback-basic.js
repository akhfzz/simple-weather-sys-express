const req = require('request');
const fs = require('fs');

let callAPI = (url, callback) => {
    const urls = url;

    const request = req({url: urls}, (err, {body}) => {
        if(err){
            callback('error');
        }else{
            fs.writeFileSync('./file/weather.json', body);
            callback(body);
        }
    })
    return request
}

let secCallAPI = (nim, callback) => {
    const data = {
        nim: nim,
        nama: process.argv[2]
    }
    const string = JSON.stringify(data)
    callback(string);
}

module.exports = {callAPI, secCallAPI};