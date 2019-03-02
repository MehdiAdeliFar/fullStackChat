const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const adminSchema = new Schema({

  login: String,
  password: String
  })
;
module.exports=adminSchema;
