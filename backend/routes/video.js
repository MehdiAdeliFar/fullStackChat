const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const videoSch = require('../models/videoSchema');
const verifyToken=require('./verifyToken');

router.get('', (req, res, next) => {
  mongoose.connect("mongodb://localhost:27017/videoDb", er => {
    if (er) throw er;
    var video = mongoose.model('video', videoSch);


    video.find({}, (err, data) => {
      if (err) throw err;

      res.send(data);
    })
  });
});
router.get('/adminList',verifyToken, (req, res, next) => {
  mongoose.connect("mongodb://localhost:27017/videoDb", er => {
    if (er) throw er;
    var video = mongoose.model('video', videoSch);
    video.find({}, (err, data) => {
      if (err) throw err;

      res.send(data);
    })
  });
});
router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  mongoose.connect("mongodb://localhost:27017/videoDb", er => {
    if (er) throw er;
    var video = mongoose.model('video', videoSch);
    var changeId = mongoose.Types.ObjectId(id);
    video.findOne({_id: changeId}, (err, data) => {
      if (err) throw err;
      res.send(data);
    })
  });


});
router.post('/:id',verifyToken, (req, res, next) => {
  var id = req.params.id;
  mongoose.connect("mongodb://localhost:27017/videoDb", er => {
    if (er) throw er;
    var video = mongoose.model('video', videoSch);
    var changeId = mongoose.Types.ObjectId(id);
    video.findOne({_id: changeId}, (err, data) => {
      if (err) throw err;
      data.title = req.body.title;
      data.runningTime = req.body.runningTime;
      data.genre = req.body.genre;
      data.rating = req.body.rating;
      data.director = req.body.director;
      data.status = req.body.status;
      data.imageUrl = req.body.imageUrl;
      data.reservedCustomer = req.body.reservedCustomer;
      data.save((er, data) => {
        if (er) throw er;
        res.send(data);
      });
    })
  });
});
router.post('/reserve/:id', (req, res, next) => {
  var id = req.params.id;
  mongoose.connect("mongodb://localhost:27017/videoDb", er => {
    if (er) throw er;
    var video = mongoose.model('video', videoSch);
    var changeId = mongoose.Types.ObjectId(id);
    video.findOne({_id: changeId}, (err, data) => {
      if (err) throw err;
      data.title = req.body.title;
      data.runningTime = req.body.runningTime;
      data.genre = req.body.genre;
      data.rating = req.body.rating;
      data.director = req.body.director;
      data.status = req.body.status;
      data.imageUrl = req.body.imageUrl;
      data.reservedCustomer = req.body.reservedCustomer;
      data.save((er, data) => {
        if (er) throw er;
        res.send(data);
      });
    })
  });
});
router.put('',verifyToken, (req, res, next) => {
  mongoose.connect("mongodb://localhost:27017/videoDb", er => {
    if (er) throw er;
    var video = mongoose.model('video', videoSch);
    var vid1 = video({
      title: req.body.title,
      runningTime: req.body.runningTime,
      genre: req.body.genre,
      rating: req.body.rating,
      director: req.body.director,
      status: req.body.status,
    });
    vid1.save((er, data) => {
        if (er) throw  er;
        res.send(data);
      }
    );

  });
});
router.delete('/:id',verifyToken, (req, res, next) => {
  var id = req.params.id;
  mongoose.connect("mongodb://localhost:27017/videoDb", er => {
    if (er) throw er;
    var video = mongoose.model('video', videoSch);
    var changeId = mongoose.Types.ObjectId(id);
    video.remove({_id: changeId}, (err, data) => {
      if (err) throw err;
      res.send(data);
    })
  });
});
module.exports = router;
