const fs = require('fs');
const cassandra = require('cassandra-driver');
const csv = require('csv-parser')

var PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider;
var client = new cassandra.Client ({ 
  contactPoints:['127.0.0.1:9042'], 
  localDataCenter: 'datacenter1',
  keyspace: 'zillowsummary',
  authProvider: new PlainTextAuthProvider('cassandra', 'cassandra')
});


const tableName = 'agentProperties';

const createTableQuery = `
  CREATE TABLE ${tableName} (
    propertyId int,
    agentId int,
    listingAgent boolean,
    PRIMARY KEY(agentId, propertyId) 
  )`;
  

const dropTableQuery = `DROP TABLE IF EXISTS ${tableName}`;


const totalFiles = 10;
let fileNumber = 1;

const csvToCassandra = () => {

  const results = [];
  
  fs.createReadStream(`./data/propertyAgents/datafile-property-agents-${fileNumber}.csv`)
    .pipe(csv())
    .on('data', data => results.push(data))
    .on('end', () => {

      console.log("Rows Read: ", results.length , `from file no: ${fileNumber}`)

      let csvRows = results.length;
      let recordsUploaded = 0;
      let batchSize = 150;

      const cassandraUpload = () => {
        
        // For last records 
        if( (csvRows - recordsUploaded < batchSize)) {
          batchSize = csvRows - recordsUploaded;
        }

        // New Batch
        var queryBatch = [];
        for(let i = recordsUploaded; i < recordsUploaded + batchSize; i++) {

          var insertQuery = `INSERT INTO ${tableName} (propertyId, agentId, listingAgent) VALUES (${results[i].propertyId}, ${results[i].agentId}, ${results[i].listingAgent} )`;
          queryBatch.push(insertQuery);

        }


        client.batch(queryBatch)
          .then( () => { 
            recordsUploaded += batchSize;
            console.log( (( (fileNumber-1) * csvRows) + recordsUploaded), ' of ', csvRows * totalFiles);
            if(recordsUploaded < csvRows) {   // One batch uploaded, call the next
              cassandraUpload();
            } else {
              console.log(`File ${fileNumber} Upload Complete`); // One file uploaded, call the next
              if(fileNumber < totalFiles) {
                fileNumber++;
                csvToCassandra();  
              }
            }
          })
          // .then(client.shutdown())
          .catch(err => console.log(err))

        }

        cassandraUpload()

    });
    
}

client.execute(dropTableQuery)
  .then(() => console.log('Successful in dropping table'))
  .then(() => client.execute(createTableQuery))
  .then(() => console.log('successful in creating table'))
  .then(() => csvToCassandra()) // Initial call
  .catch((error) => console.log('Error uploading data', error))


