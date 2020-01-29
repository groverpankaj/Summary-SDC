const mongoose = require('mongoose');
const House = require('./schema.js'); // model built for database

const dbName = '7-xillow'       // database name 

let retrieve = (id, callback) =>{
  // connect to MongoDB
  mongoose.connect(`mongodb://localhost:27017/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((log) => { return House.find({id: id}, {_id:0, __v:0}) }) // find a house(document) with specific id number
    .then((data) => {
      callback(null, data); // perform callback on data if retrieved
    })
    .catch((err) => {
      calbacck(err, null); // perform callback on error if error occurs
    });

}

module.exports = retrieve