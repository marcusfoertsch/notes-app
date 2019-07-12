const fs = require('fs');
const chalk = require('chalk');

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }

    else {
        console.log(chalk.red.inverse('No note found!'));
    }
};

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => note.title === title);


    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
    }

    else {
        console.log('Note title taken!');
    }
};

const removeNote = (title) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title !== title);

    if (!duplicateNote) {
        saveNotes(notesToKeep);

        console.log(chalk.green.inverse('Note removed!'));
    }
    else {
        console.log(chalk.red.inverse('No note found!'));
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();

        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const listNotes = () => {
    const notes = loadNotes();

    notes.forEach((note) => console.log(note.title));
};

module.exports = {
    readNote: readNote,
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote
};