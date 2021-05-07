const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./Route/index');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', index)

app.listen(3000, () => {
    console.log('starting server')
});


