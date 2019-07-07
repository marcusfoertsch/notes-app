const validator = require('validator');
const getNotes = require('./notes');
const chalk = require('chalk');

console.log(getNotes);

console.log(validator.isURL('https://www.foertschemail.com'));

console.log(chalk.inverse.red('Error!'));