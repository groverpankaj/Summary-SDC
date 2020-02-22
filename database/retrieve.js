// const mongoose = require('mongoose');
// const House = require('./schema.js'); // model built for database

// const dbName = '7-xillow'             // database name 

// // const url = process.env.NODE_ENV === 'production' ? 'database' : 'localhost';

// let retrieve = (id, callback) =>{
//   // connect to MongoDB
//   mongoose.connect(`mongodb://localhost:27017/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => { return House.findOne({id: id}, {_id:0, __v:0}) }) // find a house(document) with specific id number
//     .then((data) => {
//       callback(null, data); // invoke callback with data as argument if retrieved
//     })
//     .catch((err) => {
//       callback(err, null); // invoke callback with with error as argument if error occurs
//     });
// };
 
// module.exports = retrieve;


const poolConfig = require('./seeding/pool-config.js');
const pool = poolConfig.pool;


module.exports.property = (id, callback) =>{
  
  pool.connect(function(err, client, done) {
    
    let query = `SELECT * FROM properties WHERE id=${id}`;

    client.query(query)
    .then((data) => {
      client.release();
      callback(null, data.rows); // invoke callback with data as argument if retrieved
    })
    .catch((err) => {
      client.release();
      callback(err, null); // invoke callback with with error as argument if error occurs
    });
  })

}

module.exports.agents = (id, callback) =>{
  pool.connect(function(err, client, done) {
    
    let query = `SELECT pa.propertyid, pa.agentid, pa.listingAgent, a.firstname, a.lastname, a.recentsale, a.phoneno, a.image, a.url, AVG(ar.review) AS review, COUNT(ar.review) as reviewcount
      FROM propertyagents pa
      JOIN agents a
      ON pa.agentid = a.id
      JOIN agentreviews ar ON a.id = ar.agentid  
      WHERE pa.propertyid=${id}
      GROUP BY pa.propertyid, pa.agentid, pa.listingAgent, a.firstname, a.lastname, a.recentsale, a.phoneno, a.image, a.url
    `;  

    client.query(query)
    .then((data) => {
      client.release();
      callback(null, data.rows); // invoke callback with data as argument if retrieved
    })
    .catch((err) => {
      client.release();
      callback(err, null); // invoke callback with with error as argument if error occurs
    });
  })

}