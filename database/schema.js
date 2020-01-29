const mongoose = require('mongoose');
const collectionName = 'summary' // table(collection) name

// define schema for table(collection)
const schema = new mongoose.Schema({
    id: Number,           // id number
    price: Number,        // price
    bd: Number,           // #bedroom
    ba: Number,           // #bathroom
    sqft: Number,         // size of house in sqft
    address: String,      // address
    status: String,       // (one of 'for sale', 'for rent', 'sold')
    tour_button: Boolean, // tells page to render tour button or not
    zestimate : Number,   // price
    estPayment: Number    // price
  }
);

// create table(collection) called 'summary' with schema described above
const House = mongoose.model(collectionName, schema);

module.exports = House;