//requires
const express = require('express');
const app = express();
//globals
const port = 5000;
//uses
app.use(express.static('server/public'));
//spin up server
app.listen(port, () =>{
    console.log('server is up on:', port)
})//end server up
//get route