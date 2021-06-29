require('dotenv').config();
require('./db/mongoose');
const express = require('express');
var app = express();
app.use(express.json());

console.log("This is the test")

app.use(process.env.BASE_URL+'barcode',require('./Router/barcodeRouter'));
var port = process.env.PORT || 3001;
app.listen(port, console.log.bind(console,`server is up on port ${port}`));