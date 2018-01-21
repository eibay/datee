import * as Datee from './datee'

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('./src/dates.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`----------------------------------------`)
  Datee.getInput(line)
  console.log(" Input> ", line)
  console.log("Output> ", Datee.getOutput())
});