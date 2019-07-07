const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Marcus.');

fs.appendFileSync('notes.txt', '\nI am 31 years old.');