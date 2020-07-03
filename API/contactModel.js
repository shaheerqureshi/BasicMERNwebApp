var mongoose = require('mongoose');

//setting up schema
var ContactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:String,
    phone:String,

    created_date:{
        type:Date,
        default:Date.now
    }
});

var contact = mongoose.model('contacts',ContactSchema);
module.exports = contact;

module.exports.get = function(callback,limit){
    contact.find(callback).limit(limit);
}
