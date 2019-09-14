const path = require('path');

const rootDir = require('../utils/path');

exports.File404 = (req,res,next) => {
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    //res.status(404).send('<h1>Page---Not---Found</h1>');
    //console.log(rootDir);
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
}