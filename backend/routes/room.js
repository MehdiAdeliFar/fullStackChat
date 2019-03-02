const express = require('express');
const mongoose = require('mongoose');
const config = require('../config');
const router = express.Router();
const verifyToken = require('../authenticate/key-check');
const adminCheck = require('../authenticate/admin-check');
const roomModel = require('../model/room');
router.delete('/:id', verifyToken, adminCheck, (erq, res, next) => {
  let id = req.params.id;
  mongoose.connect(config.dbAddress, er => {
    if (er) throw er;
    let changedId = mongoose.Types.ObjectId(id);
    roomModel.remove({_id: changedId}, (err, data) => {
      if (err) throw err;
      res.send(data);
    })
  })
});
router.get('/adminList', verifyToken, adminCheck, (req, res, next) => {
  mongoose.connect(config.dbAddress, er => {
    if (er) throw er;
    roomModel.find({}, (err, data) => {
      if (err) throw err;
      res.send(data);
    })
  });
});

module.exports = router;
