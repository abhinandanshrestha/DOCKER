// Create a basic api using express JSON

var express = require('express');

var app = express();

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World! hai');
    console.log('printed')
});

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});



