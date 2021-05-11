const stream = require('stream');
const util = require('util');

const pipeline = util.promisify(stream.pipeline);
const csv = require('csvtojson');
const fs = require('fs');
const csvFilePath = require('path').join(__dirname, '../csv/data.csv');
const readableStream = fs.createReadStream(csvFilePath);

let writeToFile = function(json) {
  let jsonString = JSON.stringify(json);
  fs.appendFile('./csv/jsonfile.txt', jsonString + "\n", function (err) {
      if (err) {
        throw err;
      }
  });
}

pipeline(csv().fromStream(readableStream), 
         csv().subscribe(function(jsonObj) { writeToFile(jsonObj); })
);

console.log('CSV data extraction and transformation is done!');