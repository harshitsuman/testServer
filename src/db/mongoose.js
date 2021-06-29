const mongoose = require('mongoose');
// let mongo_data = {
let host = "52.15.155.125"
let port = 27017
let username = "myUserDevAdmin"
// const PASSWORD = encodeURIComponent('HJVjfwfvw@3242sdv');
let password = encodeURIComponent('HJVjfwfvw@3242sdv');
// "HJVjfwfvw@3242sdv"
let database = "testENVDB"
// }
mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect('mongodb://localhost:27017/testENVDB', { useNewUrlParser: true, useUnifiedTopology: true });


var db = mongoose.connection;

db.on('error', console.error.bind(console,'Error in creating connection..!!'));
db.once('open', console.log.bind(console, 'Connection created successfully..!!'));