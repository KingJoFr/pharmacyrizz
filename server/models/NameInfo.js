const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RandName = new Schema(
    {
        name: {
            type: String,
            required: false
        },
        birthday:{
            type: Date,
            required: false
        }
    }
);

module.exports = mongoose.model('RName', RandName);