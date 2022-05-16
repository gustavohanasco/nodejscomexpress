//const {Person}= require("./Person");
const dotenv = require('dotenv');

const connectToDatabase=require('./modules/src/database/connect');

dotenv.config();

connectToDatabase();
//require('./modules/path.js');
//require('./modules/fs.js');
//require('./modules/http.js');
require('express');
//const person= new Person('felipe');

