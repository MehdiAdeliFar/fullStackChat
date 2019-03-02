const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const verifyToken=require('./verifyToken');
const customerSch = require('../models/customerSchema');
router.get('',verifyToken, (req, res, next) => {
  mongoose.connect("mongodb://localhost:27017/videoDb", function (er) {
    if (er) throw er;

    var customer = mongoose.model('customer', customerSch);


    customer.countDocuments({}, (er, c) => {
      if (er) throw er;
      if (c <= 0) {
        var cs1 = customer({
          firstName: 'John',
          lastName: 'Wick',
          address: '59 pol st',
          city: 'New York',
          phoneNumber: '234-8797',
          status: true
        });
        cs1.save(er => {
            if (er) throw  er;
          }
        )      ;
        var cs2=customer({
          firstName: 'Anthony',
          lastName: 'Smith',
          address: '111 wood st',
          city: 'Chicago',
          phoneNumber: '234-8457',
          status: false
        });
        cs2.save(er=>{if (er) throw er;});
        var cs3=customer({
          firstName: 'Sara',
          lastName: 'Klark',
          address: '1 orlen st',
          city: 'Las Vegas',
          phoneNumber: '234-89732',
          status: true
        });
        cs3.save(er=>{if (er) throw er;});
      }
    });
    customer.find({}, (er, data) => {
      if (er) throw  er;
      res.send((data));
    });
  })
});
router.get('/get', (req, res, next) => {
  mongoose.connect("mongodb://localhost:27017/videoDb", function (er) {
    if (er) throw er;

    var customer = mongoose.model('customer', customerSch);



    customer.find({}, (er, data) => {
      if (er) throw  er;
      res.send((data));
    });
  })
});
module.exports = router;
