const fs = require('fs');
const db = require('../modules/fileHandler');

const getAllStudents = async (req, res) => {
    try {
        const studentsData = await db.readStudentsFromFile();

        if(!studentsData) {
            return res.status(404).json({message: 'No students found'});
        }

        res.status(200).json(studentsData);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createStudent = async (req, res) => {
    try {
        const{ name, branch } = req.body;
        if(!name || !branch) {
            return res.status(400).json({message: 'Details are missing'});
        }


        // read the file first
        let existingStudents = await db.readStudentsFromFile();

        //if existing students is null or undefined, initialize it as an empty array

        if(!existingStudents) {
            existingStudents = [];
        }

        //create and push new student

        const newStudent = {
            id: existingStudents.length + 1,
            name,
            branch
        };

        existingStudents.push(newStudent);

        await db.writeStudentsToFile(existingStudents);

        res.status(201).json({message: 'Student created successfully', student: newStudent});
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = { getAllStudents , createStudent };