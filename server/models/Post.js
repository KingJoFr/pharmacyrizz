/* Whats mongoose?
    I found this site: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
    some interesting notes
    Mongoose is an ODM. What's an ODM : ODM is Object Document Mapping. 
    It is like an ORM for non-relational databases or distributed databases such as MongoDB
    from : https://medium.com/spidernitt/orm-and-odm-a-brief-introduction-369046ec57eb

    So how do you use it?
    from: https://blog.appsignal.com/2023/08/09/how-to-use-mongodb-and-mongoose-for-nodejs.html

    You can use Mongoose to model data, enforce schemas, 
    validate models, 
    and manipulate data in a database without familiarity with the underlying database semantics.

    So we've all heard that we need to learn sql but apparently that was a lie.
    
*/
const mongoose= require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);