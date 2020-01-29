const express = require('express');
const port = 3002;
const path = require('path');

// set up server
var app = express();
app.set('port', port);

// parsing
app.use(express.urlencoded({'extended': true}));

// specify the directory of static files
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// response to request
app.get('/api/data', (req, res) =>{
  res.sendStatus(200);
})

// start server
app.listen(port, () => {
  console.log('Listening on', port);
});

module.exports = app;