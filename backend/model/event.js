const mongoose=require('mongoose');
const event_schema=mongoose.Schema({
    eventLog: Date,
    username: String,
    logType: String
});
modules.exports=mongoose.model('event',event_schema);