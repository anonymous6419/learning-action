require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

console.log("LocationId", process.env.LOCATION);
console.log("ProjectId", process.env.PROJECT_ID);
console.log("VERTEX_AI_CREDENTIALS_BASE64", process.env.VERTEX_AI_CREDENTIALS_BASE64);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});