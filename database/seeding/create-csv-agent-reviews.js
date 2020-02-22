const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');       // module to generate fake information
const fs = require('fs');

const noOfRecords = 10000000;
const noOfRecordsPerFile = 1000000;
const noOfFiles = noOfRecords/noOfRecordsPerFile;

let fno = 10;

const makeCSV = () => {

  const write = count => {
    console.log(`Created a CSV file ${fno} with ${count} records`);
        fno++;
        if(fno <= noOfFiles) {
          makeCSV(); // subsequent call
        }
  };


  const writeReview = fs.createWriteStream(`./data/agent-reviews/datafile-agents-reviews-${fno}.csv`);
  writeReview.write('agentid, reviewtext, review\n', 'utf8');

  let count = 0;

  for(let i = 1; i <= noOfRecordsPerFile; i++) {

    // each agent can have many reviews
    for(let j = 0; j <  (Math.random() * 12)+1 ; j++) {

        let singleReview = { // generate random information for each house(documnet)
          agentid: ( (fno-1) * noOfRecordsPerFile) +  i,
          reviewtext: faker.fake("{{lorem.sentence}}"),
          review: parseFloat((Math.random() * 2 + 3).toFixed(2)),
        }  

        let singleReviewStr = singleReview.agentid + ',' + singleReview.reviewtext + ',' + singleReview.review + '\n'
        count++;
        writeReview.write(singleReviewStr, 'utf8');
    }

  }
  writeReview.once('drain', () => write(count));
}

makeCSV();   // initial call


