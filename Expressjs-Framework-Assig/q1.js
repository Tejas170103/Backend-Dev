const express = require('express'); 
const app = express();
const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];

app.get('/users', (req, res) => {
    const nameFilter = req.query.name;
    if (nameFilter) {
        const filtered = users.filter(u => u.name.toLowerCase().includes(nameFilter.toLowerCase()));
        return res.json(filtered);
    }
    res.json(users);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
