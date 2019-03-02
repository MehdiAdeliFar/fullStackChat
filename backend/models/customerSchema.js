const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const customerSchema = new Schema({

  firstName: String,
  lastName: String,
  address: String,
  city: String,
  phoneNumber: String,
  status: Boolean
})
;
module.exports=customerSchema;
