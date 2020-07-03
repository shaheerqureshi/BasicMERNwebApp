var mongoose = require('mongoose');

var empSchema = mongoose.Schema({
    name:String,
    age:String,
    salary:String,
    designation:String
})

var employee = mongoose.model('Employee',empSchema);
module.exports = employee;

module.exports.get = function(callback,limit){
    employee.find(callback).limit(limit);
}
