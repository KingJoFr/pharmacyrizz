const mongoose= require('mongoose');


const Schema = mongoose.Schema;
const CounterSchema = new Schema({
    count:{
        type:Number,
        requred: true

    }


});

module.exports = mongoose.model('Counter', CounterSchema);