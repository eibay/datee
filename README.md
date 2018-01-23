# datee
A simple library for dates comparison. The current application works on fixed format date :
``` 
 Input> 15 04 1969, 12 09 1945
Output> 12 09 1945, 15 04 1969, 8616
```
Ensure you have all the necessary packages needed by running "npm install".
To run this program, type the following in your terminal:

## As Bin:
|  Steps to run as bin program |   Description                                   |
| :----------------------------|:----------------------------------------------- |
|  a. npm start                | similar to running "npm install -g"             |
|  b. datee                    | run program with help as default to show options|


## Direct: 
|  Run directly with options   |  Option     | Description                       |
| :----------------------------|:----------- |:----------------------------------|
|  node ./src/index.js         | -h / --help | run with help option              |
|  node ./src/index.js         | -c / --cli  | run using console/terminal option |
|  node ./src/index.js         | -f / --file | loads "dates.txt" file and run    |


## Run and verify tests:
    - npm test

## Credits:
Credits to open source project below to help develop this:
 - [@std/esm](https://www.npmjs.com/package/@std/esm) : enables JS modules and ES6 Syntax
 - [commander](https://www.npmjs.com/package/commander) : enables configurable cli options 
 - [mocha](https://mochajs.org) : javascript test framework 
 - [chai](http://chaijs.com) : BDD / TDD assertion library

## License: ( MIT )

