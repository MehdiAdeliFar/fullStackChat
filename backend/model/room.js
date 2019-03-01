const mongoose=require('mongoose');
const room_schema=mongoose.Schema({
   name:{type:String,required:true},
  date:Date,
   messages:[{
       username:String,
       date:Date,
       text:String,
       type:String
   }],
    members:[{
       username:String,
        sessionId:String
    }]
});
module.exports=mongoose.model('room',room_schema);
