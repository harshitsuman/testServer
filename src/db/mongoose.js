const mongoose = require('mongoose');
let mongo_data = {
    host: "52.15.155.125",
    port: 27017,
    username: "myUserDevAdmin",
    password: "HJVjfwfvw@3242sdv",
    database: "testENVDB"
}
mongoose.connect(mongo_data, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect('mongodb://localhost:27017/testENVDB', { useNewUrlParser: true, useUnifiedTopology: true });


var db = mongoose.connection;

db.on('error', console.error.bind(console,'Error in creating connection..!!'));
db.once('open', console.log.bind(console, 'Connection created successfully..!!'));