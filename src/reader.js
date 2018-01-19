import * as Daty from './datee'

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('./src/dates.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`----------------------------------------`)
  Daty.getInput(line)
  console.log(" Input> ", line)
  console.log("Output> ", Daty.getOutput())
});