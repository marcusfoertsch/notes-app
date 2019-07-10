const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      },
      body: {
          describe: 'Note body',
          demandOption: true,
          type: 'string'
      }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('Listing the notes')
    }
});

yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function() {
        console.log('Reading the note')
    }
});

yargs.parse();