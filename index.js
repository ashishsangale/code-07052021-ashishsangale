const express = require('express');
const app = express();
const index = require('./Route/index');

app.use('/', index)

app.listen(3000, () => {
    console.log('starting server')
});


