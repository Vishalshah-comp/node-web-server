const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const controller = require('./controllers/404');
const routes = require('./route/routes');
const hbs = require('hbs');
const rootDir = require('./utils/path');
const path = require('path');
const port = process.env.port || 3000;
const app = express();
//const rootDir = require('./utils/path');

// MongoDB Connection Middleware
mongoose.connect('mongodb://localhost:27017/shoppinglist',{
    useNewUrlParser: true
})
.then(() => {
    console.log("Connected to mongoDB database");
})
.catch((err) => {
    console.log(err);
});
// mongoose.connection.on('connected', () => {
//     console.log('Connected to mongoDB database');
// });
// mongoose.connection.on('error', (err) => {
//     console.log(err);
// });
hbs.registerPartials(path.join(rootDir,'views','partials'));
app.set('view engine','hbs');
app.use(cors());

//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// API Call to http://localhost:3000/api
app.use('/api', routes);


app.get('/', (req, res) => {
    //console.log(req.body);
    //console.log(__dirname);
    // 
    res.render("home.hbs", {
        title:"Home Page",
        message:"Welcome to my website...",
        year: new Date().getFullYear()
    });
});

app.get('/about', (req, res, next) => {
    res.render('about.hbs',{
        pageTitle: "About Page",
        year: new Date().getFullYear()
    });
});

app.use(controller.File404);

app.listen(port, () => {
    console.log(`Server on port ${port} has been started....`);
});

