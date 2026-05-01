const multer = require('multer');

const storage = multer.diskStorage({
    // here in destination it stores the file
    //  we have to  return the callback function in this 1st parameter is null,
    //  and second parameter give destination wher we want to upload the file
    destination: function (req, res, callback) {
        return callback(null, './uploads');
    },
    // here we have to define file's name 
    // every file should be unique in name otherwise it will override so use date function to generate new file name every time
    filename: function (req, file, callback) {
        return callback(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

module.exports = upload;
