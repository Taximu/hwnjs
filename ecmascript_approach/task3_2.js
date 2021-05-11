import stream from 'stream'
import util from 'util'
import path from 'path'
import csv from 'csvtojson'
import fs from 'fs'

const pipeline = util.promisify(stream.pipeline);
const csvFilePath = path.join(path.resolve(), './csv/data.csv');
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