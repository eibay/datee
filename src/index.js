#!/usr/bin/env node

'use strict';
require = require("@std/esm")(module)
module.exports = [require("./app"), require("./reader")]

