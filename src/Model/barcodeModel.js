const mongoose = require('mongoose');

var barcodeSchema = new mongoose.Schema({
    barndName: {
        type: String,
        trim: true,
        required: true
    },
    product_name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: String,
        trim: true,
        required: true
    },
    uuid: {
        type: String,
        trim: true,
        required: true
    }
},{
    // versionKey : false,
    // collection : 'student'
    timestamps: true
});

module.exports = mongoose.model('barcodeModel',barcodeSchema);