const { read } = require('fs');

const fs = require('fs').promises;

const readStudentsFromFile = async () => {
    try {
        const fileData = await fs.readFile('./Expressjs-backend/modules/student.json', 'utf-8');
        
        return JSON.parse(fileData);
    }
    catch (error) {
        console.log(error.message);
    }
};

const writeStudentsToFile = async (records) => {
    try {
        await fs.writeFile('./Expressjs-backend/modules/student.json', JSON.stringify(records));
    }
    catch (error) {
        console.log(error.message);
    }
};

module.exports = { readStudentsFromFile, writeStudentsToFile };
