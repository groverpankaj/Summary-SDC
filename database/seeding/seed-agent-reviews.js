var fs = require('fs');
const path = require('path');
var copyFrom = require('pg-copy-streams').from;

const poolConfig = require('./pool-config.js');
const pool = poolConfig.pool;

var tableName = 'agentreviews';

const createTableQuery = `
  CREATE TABLE ${tableName} (
    agentid integer,           
    reviewtext text,               
    review decimal         
  )`;

// ALTER TABLE agentreviews
// ADD CONSTRAINT fk_agents_propertyreviews FOREIGN KEY (agentid) REFERENCES agents(id);

// CREATE INDEX arId
// ON agentreviews(agentid);

const dropTableQuery = `
  DROP TABLE IF EXISTS ${tableName}
`;

let noOfFiles = 10;

pool.connect(function(err, client) {
  client.query(dropTableQuery)
    .then(() => console.log('Success in dropping table'))
    .then(() => client.query(createTableQuery))
    .then(() => console.log('Success in creating table'))
    .then(() => {     

      for(let i = 1; i <= noOfFiles; i++) {

        var inputFile = path.join(__dirname, `./data/agent-reviews/datafile-agents-reviews-${i}.csv`);

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






