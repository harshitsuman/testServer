var barcodeModel = require('../Model/barcodeModel.js');
const uuid = require('uuid');

module.exports = {
    fetchAllProducts : (req, res, next) => {
        barcodeModel.find().then(result => {
            res.send({
                status: 200,
                message: "Retrieved successfully",
                success : true,
                data: result
            })

        }).catch(err => {
            res.status(500).send(err);
        });
    },

    insertProducts : (req, res, next) => {
const uuid = require('uuid');
        req.body.uuid = uuid.v4()
        barcodeModel.create(req.body).then(result => {
            res.send({
                status: 201,
                message: "Record inserted successfully",
                success : true,
                data: result
            })
        }).catch(err => {
            res.status(500).send(err);
        });
    }
}
