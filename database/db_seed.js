const mongoose = require('mongoose');
const faker = require('faker'); // module to generate fake information

const dbName = '7-xillow'       // database name
const collectionName ='summary' // table name

mongoose.connect(`mongodb://localhost:27017/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});

// define Schema for table
const propertySchema = new mongoose.Schema({
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

const House = mongoose.model(collectionName, propertySchema);

House.deleteMany({}) // delete all previous collections
  .catch((err)=> {console.log('Error in Delete All Documenets')})


console.log('START: generating and inserting 100 datas of house to database (MongoDB)');

var docInserted = 0; // trakcs #inserted documents, used to in when to disconnect MongoDB
for (let i=1; i<101; i++) {
  
  var randomVal = Math.random();
  let property = new House({ // generate random information for each document (property)
    id: i,
    price: faker.fake("{{commerce.price}}"),
    bd: Math.ceil(Math.random()*6),
    ba: Math.ceil(Math.random()*7)/2,
    sqft: faker.fake("{{random.number}}"),
    address: faker.fake("{{address.streetAddress}} {{address.secondaryAddress}}, {{address.city}}, {{address.stateAbbr}} {{address.zipCode}}"),
    status: (randomVal < 2/3) ? 'for sale' :
            (randomVal < 5/6) ? 'for rent' : 'sold',
    tour_button: faker.fake("{{random.boolean}}"),
    zestimate : faker.fake("{{commerce.price}}"),   
    estPayment: faker.fake("{{commerce.price}}")    
  });  

  property.save()
    .then(() => {
      docInserted++
      if (docInserted === 100) { // disconnect from MongoDB if all 100 document is inserted
        console.log('END generating and inserting datas to database');
        mongoose.connection.close();
      }
    });
}