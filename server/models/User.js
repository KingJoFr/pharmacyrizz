const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    permissions: {
        type: Boolean,
        required: true,
    },
    cardTracker: {
        type: Map,
        of:String,
        required: false,
        
    },
    emailOptin:{
        type: Boolean,
        required: true,
    }
   
});

module.exports = mongoose.model('User', UserSchema);