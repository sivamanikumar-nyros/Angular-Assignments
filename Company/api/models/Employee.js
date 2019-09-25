const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Employee = new Schema({
  EmployeeName: {
    type: String
  },
  EmployeeDesignation: {
    type: String
  },
  EmployeeAddress: {
    type: String
  }
},{
    collection: 'Employee'
});

module.exports = mongoose.model('Employee', Employee);