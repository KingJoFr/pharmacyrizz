
/*What is Mongoose? Mongoose is a Node. 
js-based Object Data Modeling (ODM) library for 
MongoDB. It is akin to an Object Relational Mapper (ORM) 
such as SQLAlchemy for traditional SQL databases. 
The problem that Mongoose aims to solve is allowing developers to 
enforce a specific schema at the application layer.
*/
/*Mongoose provides a number of features that make it easier to work with MongoDB, including:
Schema validation: Mongoose can validate data before it is saved to the database, which can help to prevent errors.
Type casting: Mongoose can automatically cast data to the correct type, which can save time and effort.
Relationships: Mongoose can manage relationships between data, such as one-to-many and many-to-many relationships.
Plugins: Mongoose provides a number of plugins that can be used to add additional functionality, such as authentication, logging,
 and caching.
 
 a tutorial how to use mongoose in express:https://blog.appsignal.com/2023/08/09/how-to-use-mongodb-and-mongoose-for-nodejs.html

 its different from how its used here. for example it doesn't use mongoose.set('strictQuery, false')
 I found: When strict option is set to true , 
 Mongoose will ensure that only the fields that are specified in your Schema will be saved in the database, 
 and all other fields will not be saved (if some other fields are sent)
 from: https://www.mongodb.com/community/forums/t/deprecationwarning-mongoose-the-strictquery/209637
 */
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch(error){
        console.log(error);
    }
}

module.exports = connectDB;