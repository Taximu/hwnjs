import stream from 'stream';
import util from 'util';
import path from 'path';
import csv from 'csvtojson';
import fs from 'fs';

const pipeline = util.promisify(stream.pipeline);
const csvFilePath = path.join(path.resolve(), './csv/data.csv');
const readableStream = fs.createReadStream(csvFilePath);
const writableStream = fs.createWriteStream('./csv/jsonfile.txt');

pipeline(readableStream, csv(), writableStream).then(() => {
  console.log('CSV data extraction and transformation is done!');
});
