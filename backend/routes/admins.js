const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const config=require('../config');
const adminSchema = require('../models/adminSchema');
router.post('/login', (req, res, next) => {
  mongoose.connect("mongodb://localhost:27017/videoDb", function (er) {
    if (er) throw er;

    var admin = mongoose.model('admin', adminSchema);

    admin.countDocuments({}, (er, c) => {
      if (er) throw er;
      if (c <= 0) {
        var cs1 = admin({
          login: 'admin',
          password: bcrypt.hashSync('123456', 8)
        });
        cs1.save(er => {
            if (er) throw  er;
          }
        );
        var cs2 = admin({
          login: 'admin123',
          password: bcrypt.hashSync('654321', 8)
        });
        cs2.save(er => {
          if (er) throw er;
        });

      }
    });
    var enteredLogin = req.body.login;
    var enteredPassword = req.body.password;
    admin.findOne({login: enteredLogin}, (err, ad) => {
      if (err) {
        res.send({auth: false, token: null,msg:'admin not found'});
        return;
      }
      if (!ad) {
        res.send({auth: false, token: null,msg:'wrong login or password'});
        return;
      }
      var passwordIsValid = bcrypt.compareSync(enteredPassword, ad.password);
      if (!passwordIsValid) {
        res.send({auth: false, token: null,msg:'wrong login or password'});
        return;
      }
      var token = jwt.sign({id: ad._id}, config.secret, {expiresIn: 86400});
      res.send({auth: true, token: token,msg:undefined});
    })
  })
});

module.exports = router;
