const customerSchema=require('./customerSchema')

const mongoose = require('mongoose');
const videoSchema = mongoose.Schema({
  reservedCustomer: customerSchema,
  title: String,
  runningTime: Number,
  genre: String,
  rating: Number,
  director: String,
  status: Boolean,
  imageUrl: String,
});
module.exports=videoSchema;
