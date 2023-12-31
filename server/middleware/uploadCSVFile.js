// This middleware usefule to upload and transfer the image and pdf file to server. Only condition is fieldname is 'file1' . This fieldname is used in multer upload function and also defined at the time of uploading data from frontend to backend. use upload.array

// If used upload.field then it can used to upload multiple files With field name can be mentioned in the position.
// const logger = require('../services/Logger')

const util = require('util');
const multer = require('multer');
const fs = require('fs');
const parse = require('csv-parse');
const {header} = require('express-validator');
var path = require('path');
const Papa = require('papaparse');

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // callback(null, path.join(`${__dirname}/../../upload`));
    callback(null, 'public');
  },
  filename: (req, file, callback) => {
    console.log('Mutter', file);
    const match = [
      'text/csv',
      'image/png',
      'image/jpeg',
      ,
      'image/jpg',
      'image/webp',
      'application/pdf',
    ];
    if (match.indexOf(file.mimetype) === -1) {
      var message = `${file.originalname} is invalid. Only accept png/jpeg or pdf files.`;
      return callback(message, null);
    }
    console.log('Inside Mutter', file, req.params);
    var filename = `/data/QuizData-${req.params.Subject}.csv`;
    const FileFieldname = file.fieldname;
    // req.uploadedFilLocation = { [FileFieldname]: filename }
    req.body[FileFieldname] = filename;
    console.log('Added Body ', file);
    callback(null, filename);
  },
});
const multipleUpload = async (req, res, next) => {
  try {
    console.log('In file upload 1');

    var uploadFiles = multer({storage: storage}).fields([
      {name: 'FileName', maxCount: 2},
      {name: 'preview', maxCount: 2},
    ]);

    var uploadFilesMiddleware = util.promisify(uploadFiles);
    await uploadFilesMiddleware(req, res);
    if (req.files.length <= 0) {
      return res.send({Result: 'You must select at least 1 file'});
    }

    const Content = fs.readFileSync(req.files.FileName[0].path, 'utf8');
    const jsonData = Papa.parse(Content, {header: true}).data;
    console.log('JSong ', jsonData);
    // Code below is to read csv file data to arry of rows
    // Papa.parse(Content, {
    //   header: false,
    //   skipEmptyLines: false,
    //   complete: function (results) {
    //     const rowsArray = [];
    //     const valuesArray = [];
    //     results.data.map((d) => {
    //       rowsArray.push(Object.keys(d));
    //       valuesArray.push(Object.values(d));
    //     });
    //   },
    // });

    // This below code is for converting csv file to json file but it was creating problem when extra commas in the text
    // const data = fs.readFileSync(req.files.FileName[0].path).toString().split("\n");
    // headers = data.shift().split(",");
    // var jsonData = [];
    // data.forEach(function (d) {
    //   tmp = {};
    //   tmp.options = [];
    //   row = d.split(",");
    //   for (var i = 0; i < headers.length; i++) {
    //     headers[i].length <= 2 ? tmp.options.push(row[i]) : (tmp[headers[i]] = row[i]);
    //   }
    //   jsonData.push(tmp);
    // });

    var outPath = path.join(`${req.files.FileName[0].path.slice(0, -3)}json`);
    // Convert object to string, write json to file
    fs.writeFileSync(outPath, JSON.stringify(jsonData), 'utf8', function (err) {
      console.log(err);
    });
    console.log('Before Next', req.files);
    await next();
  } catch (error) {
    console.log(error);
    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.send('Too many files to upload.');
    }
    return res.send(`Error when trying upload many files: ${error}`);
  }
};
module.exports = {
  multipleUpload: multipleUpload,
};
