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
          {id: 'recentSale', title: 'recentSale'},
          {id: 'phoneNo', title: 'phoneNo'},
          {id: 'image', title: 'image'},
          {id: 'url', title: 'url'}
      ]
  });

  var dataArray = [];

  for(let i = 1; i <= noOfRecordsPerFile; i++) {

    let firstName = faker.fake("{{name.firstName}}");
    let lastName = faker.fake("{{name.lastName}}");

    let agent = { // generate random information for each house(documnet)
      id: ( (fno-1) * noOfRecordsPerFile) +  i,
      firstName: firstName,
      lastName: lastName,
      recentSale: Math.floor(Math.random() * 100),
      phoneNo: faker.fake("{{phone.phoneNumberFormat}}"),
      image: Math.floor(Math.random()* 20 + 1),
      url: (firstName + '-' + lastName).toLowerCase()
    }  
    
    dataArray.push(agent);

  }

  
  csvWriter.writeRecords(dataArray)       // returns a promise
    .then(() => {
        let endTime = Date.now();
        let timeTaken = (endTime - startTime)/1000;
        console.log(`Created a CSV file with ${dataArray.length} records in ${timeTaken}s`);
        fno++;
        dataArray = null;
        if(fno <= noOfFiles) {
          makeCSV(); // subsequent call
        }
      })
}

makeCSV();   // initial call


