const stream = require('stream');
const util = require('util');

const pipeline = util.promisify(stream.pipeline);
const csv = require('csvtojson');
const fs = require('fs');
const csvFilePath = require('path').join(__dirname, '../csv/data.csv');

const readableStream = fs.createReadStream(csvFilePath);
const writableStream = fs.createWriteStream('./csv/jsonfile.txt');

pipeline(readableStream, csv(), writableStream).then(() => {
  console.log('CSV data extraction and transformation is done!');
});
