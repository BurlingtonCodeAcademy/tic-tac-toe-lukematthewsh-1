const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/')

app.listen(PORT, () => {console.log(`Running on port ${PORT}`)})