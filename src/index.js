#!/usr/bin/env node

'use strict';
require = require("@std/esm")(module)
const program = require('commander')

program
  .version('0.1.0')
  .option('-c, --cli', 'Use console/terminal')
  .option('-f, --file', 'Run from text file')
  .parse(process.argv);
console.log('Running with option:')
if (program.cli) {
  console.log('  - cli or console')
  module.exports = require("./app")
}else if (program.file) {
  console.log('  - load file')
  module.exports = require("./reader")
}else {
  program.help() 
}