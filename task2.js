const csv = require('csvtojson');
const fs = require('fs');
const csvFilePath = require('path').join(__dirname, './csv/data.csv');
const readableStream = fs.createReadStream(csvFilePath);

var writeToFile = function(json) {
  var jsonString = JSON.stringify(json);
  fs.appendFile('./csv/jsonfile.json', jsonString + "\n", function (err) {
      if (err) {
          throw err;
      }
  });
}

var processCSV = function() {
  csv()
    .fromStream(readableStream)
    .subscribe(function(jsonObj) {
      writeToFile(jsonObj);
    })
    .on('error', (err) => {
      throw err;
    });
}

processCSV();
console.log('CSV data extraction and transformation is done!');
