const mongoose = require('mongoose');
const eventModel = require('./model/event');
const config = require('./config');
module.exports = {
  saveEvent: (eventType, username, description) => {
    mongoose.connect(config.dbAddress, (er) => {
      if (er) throw er;
      let eve = eventModel({
        date: new Date(),
        username: username,
        logType: eventType,
        description: description
      });
      eve.save((err, data) => {
        if (err) throw err;
      })
    })
  },
  userSokcets:[]
}
;
