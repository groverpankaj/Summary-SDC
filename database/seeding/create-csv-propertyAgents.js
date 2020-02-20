const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const noOfRecords = 10000000;
const noOfRecordsPerFile = 1000000;
const noOfFiles = noOfRecords/noOfRecordsPerFile;

let fno = 1;

const makeCSV = () => {

  let startTime = Date.now();  

  let csvWriter = createCsvWriter({
      path: `./data/propertyAgents-small/datafile-property-agents-${fno}.csv`,
      header: [
          {id: 'propertyId', title: 'propertyId'},
          {id: 'agentId', title: 'agentId'},
          {id: 'listingAgent', title: 'listingAgent'}
      ]
  });

  var dataArray = [];

  for (let i = 1; i <= noOfRecordsPerFile; i++) {
    
    // listing Agent
    let eachRecord = { // generate random information for each house(documnet)
      propertyId: ( (fno-1) * noOfRecordsPerFile) +  i,
      agentId: Math.floor(Math.random() * 10000000) + 1,
      listingAgent: true
    };  
    
    dataArray.push(eachRecord);

    // Premium Agents
    for(let p = 0 ; p < Math.floor(Math.random() * 4 + 1); p++) {
      let eachRecord = { 
        propertyId: ( (fno-1) * noOfRecordsPerFile) +  i, // remains same 
        agentId: Math.floor(Math.random() * 10000000) + 1,
        listingAgent: false
      }; 
      dataArray.push(eachRecord);
    }
    
  }

  
  csvWriter.writeRecords(dataArray)       // returns a promise
    .then(() => {
        let endTime = Date.now();
        let timeTaken = (endTime - startTime)/1000;
        console.log(`Created a CSV file with ${dataArray.length} records in ${timeTaken}s`);
        fno++;
        dataArray = null;
        if(fno <= noOfFiles) {
          makeCSV();   // subsequent call
        }
      })
}

makeCSV();  // initial call


