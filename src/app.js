const exp = require('express');
const path = require('path');
const hbs = require('hbs');
const request = require('request');

const app = exp();

// const publicDirectory = path.join(__dirname, '../public')
// const viewsToTemplates = path.join(__dirname, '../templates')
// const partial = path.join(__dirname, '../templates/partials')

// //install hbs before for dynamic, default folder views
// app.set('view engine', 'hbs')
// //after customize, folder move to templates
// app.set('views', viewsToTemplates)
// app.use(exp.static(publicDirectory))

// hbs.registerPartials(partial)

// app.get('/halo',(req, res) => {
//     res.send(`<h1>halo</h1>`)
// })

// app.get('/dynamic', (req, res) => {
//     res.render('index', {
//         name:"izal",
//         nim: 19212002
//     })
// })

app.get('/product', (req, res) => {
    if(!req.query.search){
        res.send({
            error: "Can't search"
        })
    }
    let data = [];
    url = `http://api.weatherstack.com/current?access_key=${req.query.search}&query=${req.query.query}`;
    request({url: url}, (err, {body}) => {
        if(err){
            res.send("Can't fetch data");
        }else{
            const parse = JSON.parse(body)
            res.send({
                status: 'success',
                country: parse.location.country,
                temperature: parse.current.temperature
            })
        }
    })
})

app.get('*', (req, res) => {
    res.send("404")
})

module.exports = app