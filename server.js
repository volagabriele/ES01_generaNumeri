// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html'); // Serve il file index.html
});

app.get('/random-number', (req, res) => {
    
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    res.json({ number: randomNumber });
});

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
