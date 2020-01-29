const mongoose = require('mongoose');
const House = require('./schema.js'); // model built for database

const dbName = '7-xillow'             // database name 

let retrieve = (id, callback) =>{
  // connect to MongoDB
  mongoose.connect(`mongodb://localhost:27017/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((log) => { return House.findOne({id: id}, {_id:0, __v:0}) }) // find a house(document) with specific id number
    .then((data) => {
      callback(null, data); // invoke callback with data as argument if retrieved
    })
    .catch((err) => {
      calbacck(err, null); // invoke callback with with error as argument if error occurs
    });
};

module.exports = retrieve;