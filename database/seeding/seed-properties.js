var fs = require('fs');
const path = require('path');
var {Pool} = require('pg');
var copyFrom = require('pg-copy-streams').from;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'zillowsummary',
  password: 'postgres',
  port: 5432
});

var tableName = 'properties';

const createTableQuery = `
CREATE TABLE ${tableName} (
  id integer PRIMARY KEY,           
  price integer  NOT NULL,        
  bd decimal,           
  ba decimal,          
  sqft decimal,         
  address text,
  city text,
  state text,
  zipCode text,      
  saleStatus varchar(8),   
  tourButton boolean, 
  zestimate  decimal,   
  estPayment decimal   
)`;

const dropTableQuery = `
  DROP TABLE IF EXISTS ${tableName}
`;

let noOfFiles = 10;

pool.connect(function(err, client, done) {
  client.query(dropTableQuery)
    .then(() => console.log('Success in dropping table'))
    .then(() => client.query(createTableQuery))
    .then(() => console.log('Success in creating table'))
    .then(() => {

      for(let i = 1; i <= noOfFiles; i++) {

        var inputFile = path.join(__dirname, `./data/properties/datafile-${i}.csv`);

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
      .catch()
  
});






