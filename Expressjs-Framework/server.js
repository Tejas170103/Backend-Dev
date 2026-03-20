const express = require('express');
const studentRoutes = require('./Routes/studentRoutes');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/students/',studentRoutes);

app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`);
});