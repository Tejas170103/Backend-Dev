const express = require('express');

const app = express();
const router = express.Router();

const {getAllStudents,createStudent} = require('../Controllers/studentController');

router.get('/', getAllStudents);
router.post('/', createStudent);

module.exports = router;