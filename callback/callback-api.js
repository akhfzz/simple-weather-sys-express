const {callAPI, secCallAPI} = require('./callback-basic');

setTimeout(()=>{
    callAPI(
        'http://api.weatherstack.com/current?access_key=4ffd498ad0eee9360b6a5a6c89ea57d7&query=37.8267,-122.4233',
        (data, error) => {
            if(error){
                console.log('error: '+error)
            }
            secCallAPI('192102002', (dt, err) => {
                if(err){
                    console.log(err)
                }
                console.log('data: '+data);
                console.log(dt)
            })
        }
    )
}, 2000)