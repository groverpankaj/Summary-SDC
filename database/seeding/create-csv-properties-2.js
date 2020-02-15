const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');       // module to generate fake information

const noOfRecords = 10000000;
const noOfRecordsPerFile = 1000000;
const noOfFiles = noOfRecords/noOfRecordsPerFile;

let fileNumber = 6;

const makeCSV = () => {

  let startTime = Date.now();  

  let csvWriter = createCsvWriter({
      path: `./data/properties/datafile-${fileNumber}.csv`,
      header: [
          {id: 'id', title: 'id'},
          {id: 'price', title: 'price'},
          {id: 'bd', title: 'bd'},
          {id: 'ba', title: 'ba'},
          {id: 'sqft', title: 'sqft'},
          {id: 'address', title: 'address'},
          {id: 'city', title: 'city'},
          {id: 'state', title: 'state'},
          {id: 'zipCode', title: 'zipCode'},
          {id: 'saleStatus', title: 'saleStatus'},  // For Sale / Rent / Sold => A/R/S
          {id: 'tourButton', title: 'tourButton'},
          {id: 'zestimate', title: 'zestimate'},
          {id: 'estPayment', title: 'estPayment'}
      ]
  });

  var dataArray = [];

  for(let i = 1; i <= noOfRecordsPerFile; i++) {
    let randomVal = Math.random(); // will be used to determine status value
    let currentPrice = (faker.fake("{{commerce.price}}") * (10 ** 4)) + 11000; //11000 added as sometimes faker returns 0
    let difference = parseInt(currentPrice * (randomVal/10));  
    if(randomVal < 0.5) {difference *= -1};



    let property = { // generate random information for each house(documnet)
      id: ( (fileNumber-1) * noOfRecordsPerFile) +  i,
      price: currentPrice,
      bd: Math.ceil(Math.random() * 6),
      ba: Math.ceil(Math.random() * 7) / 2,
      sqft: faker.fake("{{random.number}}") % 2000,
      address: faker.fake("{{address.streetAddress}} {{address.secondaryAddress}}"),
      city: faker.fake("{{address.city}}"),
      state: faker.fake("{{address.stateAbbr}}"),
      zipCode: (parseInt((Math.random() * (99999-10000)) + 10000)).toString(),
      saleStatus: (randomVal < 0.33) ? 'A' :
                  (randomVal < 0.66) ? 'R' : 'S',
      tourButton: (Math.random() < 0.85),
      zestimate : currentPrice + difference,   
      estPayment: parseInt(currentPrice * 0.07194606302)  //Calculated based on 6%, 30 yrs   
    };  
    
    dataArray.push(property);

  };

  
  csvWriter.writeRecords(dataArray)       // returns a promise
    .then(() => {
        let endTime = Date.now();
        let timeTaken = (endTime - startTime)/1000;
        console.log(`Created a CSV file with ${dataArray.length} records in ${timeTaken}s`);
        fileNumber++;
        dataArray = null;
        if(fileNumber <= noOfFiles) {
          makeCSV();
        }
      })
}

makeCSV();


