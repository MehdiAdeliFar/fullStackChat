const incommingForm = require('formidable').IncomingForm;
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('', (req, res) => {
  var form = new incommingForm();
  // form.on('file', (field, file) => {
  //   var newPath='./files/'+file.name;
  //   var oldpath = file.path;
  //   fs.rename(oldpath, newPath, function (err) {
  //     if (err) throw err;
  //
  //     // res.setHeader('Content-Type', 'application/json');
  //     // res.send({msg:'File uploaded and moved!',name: newPath});
  //   });
  // });
  // form.on('end', () => {
  //   res.json();
  // });
  // form.parse(req);
  form.parse(req, function (err, fields, files) {
    var oldpath = files.file0.path;
    const randomInt = getRandomInt(900000000);
    var newpath = './src/assets/' + randomInt;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write('assets/' + randomInt);
      res.end();
    });
  });
});
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
module.exports = router;
