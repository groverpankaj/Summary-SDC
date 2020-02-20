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

// var { Pool } = require('pg');

const poolConfig = require('./seeding/pool-config.js');
const pool = poolConfig.pool;

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'zillowsummary',
//   password: 'postgres',
//   port: 5432
// });


module.exports.property = (id, callback) =>{
  
  pool.connect(function(err, client, done) {
    
    let query = `SELECT * FROM properties WHERE id=${id}`;

    client.query(query)
    .then((data) => {
    
      callback(null, data.rows); // invoke callback with data as argument if retrieved
    })
    .catch((err) => {
      callback(err, null); // invoke callback with with error as argument if error occurs
    });
  })

}

module.exports.agents = (id, callback) =>{
  pool.connect(function(err, client, done) {
    
    let query = `SELECT ps.propertyid, ps.agentid, ps.listingagent, a.firstname, a.lastname, a.review, a.reviewcount, a.recentsale, a.phoneno 
      FROM propertyAgents AS ps
      INNER JOIN agents AS a
      ON ps.agentid = a.id
      WHERE ps.propertyId=${id}`;

    client.query(query)
    .then((data) => {
      console.log(data)
      callback(null, data.rows); // invoke callback with data as argument if retrieved
    })
    .catch((err) => {
      callback(err, null); // invoke callback with with error as argument if error occurs
    });
  })

}