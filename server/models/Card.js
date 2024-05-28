/*
I kept getting validation errors so I turned required to false.  Everything looks good in the database on mongodb site
*/
//dcards(detailedcard) is the card info from the open fda api drug database. The merged deck(mcard) is the new 
//deck created with the parts that I wanted to take from the detailed deck.
const mongoose= require('mongoose');


const Schema = mongoose.Schema;
const CardSchema = new Schema({
   
    generic: {
        type: String,
        required: false
    },
    brand: {
        type: String,
        required: false
    },
    use: {
        type: String,
        required: false
    },
    dea_class:{
        type: String,
        required: false
    },
    form:{
        type: String,
        required: false
    },
    action:{
        type: String,
        required: false

    },
    route:{
        type: String,
        required: false
    }

});

module.exports = mongoose.model('Card', CardSchema);