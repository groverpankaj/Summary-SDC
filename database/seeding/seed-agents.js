var fs = require('fs');
const path = require('path');
// var {Pool} = require('pg');
var copyFrom = require('pg-copy-streams').from;

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'zillowsummary',
//   password: 'postgres',
//   port: 5432
// });

const poolConfig = require('./pool-config.js');
const pool = poolConfig.pool;

var tableName = 'agents';

const createTableQuery = `
  CREATE TABLE ${tableName} (
    id integer PRIMARY KEY,           
    firstName text  NOT NULL,        
    lastName text  NOT NULL,          
    review decimal,          
    reviewCount integer,         
    recentSale integer,      
    phoneNo text 
  )`;

const dropTableQuery = `
  DROP TABLE IF EXISTS ${tableName}
`;

let noOfFiles = 10;

pool.connect(function(err, client) {
  client.query(dropTableQuery)
    .then(() => console.log('Success in droping table'))
    .then(() => client.query(createTableQuery))
    .then(() => console.log('Success in creating table'))
    .then(() => {     

      for(let i = 1; i <= noOfFiles; i++) {

        var inputFile = path.join(__dirname, `./data/agents/datafile-agents-${i}.csv`);

        var stream = client.query(copyFrom(`COPY ${tableName} FROM STDIN CSV HEADER`))

        var fileStream = fs.createReadStream(inputFile);
        
        fileStream.on('error', (error) =>{
          console.log(`Error in reading file: ${error}`)
        })
        stream.on('error', (error) => {
          console.log(`Error in copy command: ${error}`)
        })
        stream.on('end', () => {
          console.log(`Completed loading data from file: ${i}`);
          if(i === noOfFiles) {
            client.end()
          }
        })

        fileStream.pipe(stream);
        }

      })
      .catch((error) => console.log('error in uploading data', error))
  
});






