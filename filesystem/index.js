const fs = require('fs');
const { resolve } = require('path');

const FileBaca = (error, data) => {
    if(error) {
        console.log('Cannot read the note');
        return;
    }
  console.log(data);
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', FileBaca);