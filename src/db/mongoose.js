const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testENVDB', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console,'Error in creating connection..!!'));
db.once('open', console.log.bind(console, 'Connection created successfully..!!'));