const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');       // module to generate fake information

const noOfRecords = 10000000;
const noOfRecordsPerFile = 1000000;
const noOfFiles = noOfRecords/noOfRecordsPerFile;

let fno = 1;

const makeCSV = () => {

  let startTime = Date.now();  

  let csvWriter = createCsvWriter({
      path: `./data/agents/datafile-agents-${fno}.csv`,
      header: [
          {id: 'id', title: 'id'},
          {id: 'firstName', title: 'firstName'},
          {id: 'lastName', title: 'lastName'},
          {id: 'review', title: 'review'},
          {id: 'reviewCount', title: 'reviewCount'},
          {id: 'recentSale', title: 'recentSale'},
          {id: 'phoneNo', title: 'phoneNo'}
      ]
  });

  var randomVal = Math.random(); // will be used to determine status value

  var dataArray = [];

  for(let i = 1; i <= noOfRecordsPerFile; i++) {
    
    let agent = { // generate random information for each house(documnet)
      id: ( (fno-1) * noOfRecordsPerFile) +  i,
      firstName: faker.fake("{{name.firstName}}"),
      lastName: faker.fake("{{name.lastName}}"),
      review: parseFloat((Math.random() * 5).toFixed(2)),
      reviewCount: Math.floor(Math.random() * 200),
      recentSale: Math.floor(Math.random() * 100),
      phoneNo: faker.fake("{{phone.phoneNumberFormat}}")  
    };  
    
    dataArray.push(agent);

  };

  
  csvWriter.writeRecords(dataArray)       // returns a promise
    .then(() => {
        let endTime = Date.now();
        let timeTaken = (endTime - startTime)/1000;
        console.log(`Created a CSV file with ${dataArray.length} records in ${timeTaken}s`);
        fno++;
        dataArray = null;
        // console.log(dataArray.length)
        if(fno <= noOfFiles) {
          makeCSV();
        }
      })
}

makeCSV();


