const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<h2>Hello Alex and Class!</h2></br><b><u>Welcome to Pipeline Allo</u></b>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
