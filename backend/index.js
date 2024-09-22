const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// A simple GET route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// A POST route
app.post('/data', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received successfully',
        receivedData: data
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
