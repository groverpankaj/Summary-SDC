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

var tableName = 'propertyAgents';

// const createTableQuery = `
//   CREATE TABLE ${tableName} (
//     propertyId integer REFERENCES properties(id),           
//     agentId integer  REFERENCES agents(id),        
//     listingAgent boolean
//   )`;

// For loading data on EC2
const createTableQuery = `
  CREATE TABLE ${tableName} (
    propertyId integer,           
    agentId integer,        
    listingAgent boolean
  )`;

  // ALTER TABLE propertyagents
  // ADD CONSTRAINT fk_propertyagents_properties FOREIGN KEY (propertyid) REFERENCES properties(id);
   
   
  // ALTER TABLE propertyagents 
  // ADD CONSTRAINT fk_propertyagents_agentss FOREIGN KEY (agentid) REFERENCES agents(id);
  

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

        var inputFile = path.join(__dirname, `./data/propertyAgents/datafile-property-agents-${i}.csv`);

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
            client.end();
          }
        })

        fileStream.pipe(stream);
    
        }

      })
      .catch(() => console.log('Error uploading data'))

  
});






