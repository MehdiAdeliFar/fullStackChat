const express = require("express");
const StudentModel = require('../models/student');

const router = express.Router();


router.get('', (req, res, next) => {

  console.log('GET: Student lists');

  // Add Mongoose searchQuery to find all return list of students and return

});

router.get('/:_id', (req, res, next) => {

  console.log('GET: Student by _id:' + req.params.id);

  // Implement Mongoose searchQuery to find Student by Id return list of students and return

})

router.put('/:_id', (req, res, next) => {

  console.log('UPDATE: Student by _id: ' + req.params.id);

  // Implement Mongoose update Student by ID

})
router.post('/:_id', (req, res, next) => {

  console.log('UPDATE: Student by _id: ' + req.params.id);

  // Implement Mongoose update Student by ID

})

router.delete('/:_id', (req, res, next) => {

  console.log('UPDATE: Student by _id: ' + req.params.id);

  // Implement Mongoose delete one Student by ID

});

module.exports = router;
