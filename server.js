// server.js
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 80;

// Endpoint to serve the image
app.get('/image', (req, res) => {
    const imagePath = path.join(__dirname, 'image.png'); // Make sure to have an image.png in your project directory

    // Log the request
    console.log(`Image requested by ${req.ip} at ${new Date().toISOString()}`);

    res.sendFile(imagePath);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
