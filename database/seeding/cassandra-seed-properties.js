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


const tableName = 'properties1';

const createTableQuery = `
  CREATE TABLE ${tableName} (
    id int PRIMARY KEY ,
    price int,
    bedroom decimal,
    bathroom decimal,
    sqft decimal,
    address text,
    city text,
    state text,
    zipCode text,
    saleStatus text,
    tourButton boolean,
    zestimate  decimal,
    estPayment decimal
)`;

const dropTableQuery = `DROP TABLE IF EXISTS ${tableName}`;


const totalFiles = 10;
let fileNumber = 1;

const csvToCassandra = () => {

  const results = [];

  // COPY command  only works in the shell
  
  fs.createReadStream(`./data/properties/datafile-${fileNumber}.csv`)
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
          
          results[i].address = results[i].address.replace("'", " ");
          results[i].city = results[i].city.replace("'", " ");

          var insertQuery = `INSERT INTO properties (id, price, bedroom, bathroom, sqft, address, city, state, zipCode, saleStatus, tourButton, zestimate, estPayment) VALUES (${results[i].id}, ${results[i].price}, ${results[i].bedroom}, ${results[i].bathroom}, ${results[i].sqft}, '${(results[i].address)}', '${results[i].city}', '${results[i].state}', '${results[i].zipCode}', '${results[i].saleStatus}', ${results[i].tourButton}, ${results[i].zestimate}, ${results[i].estPayment} )`;
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
  .catch(() => console.log('Error uploading data'))



// COPY command  only works in the shell
// const copyCSVQuery = "COPY properties (id, price, bd, ba, sqft, address, city, state, zipCode, saleStatus, tourButton, zestimate, estPayment) FROM './data/properties/sample.csv' WITH DELIMITER =',' AND HEADER = TRUE";
//  client.execute(dropTableQuery)
//     .then( () => client.execute(createTableQuery))
//     .then(results => console.log("Success creating table"))

