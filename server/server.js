//requires
const express = require('express');
const bodyParser = require('body-parser')
const app = express(); 
//globals
const port = 5000;
//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}))
//spin up server
app.listen(port, () =>{
    console.log('server is up on:', port)
})//end server up
//get route
const people = ['Heather', 'Heather', 'Halima']
app.get('/tester', (req, res)=>{
    console.log('In /tester GET');
    res.send(people);
})//end GET

app.post('/tester', (req, res)=>{
    console.log('got to POST/tester', req.body);
    people.push(req.body.name)
    console.log(people);
    res.send('woof')
})