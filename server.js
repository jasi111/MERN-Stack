
const express = require('express');
const mongoose = require ('mongoose')
const app = express();
const bodyParser =require('body-parser'); // for body parser
const User = require ('./models/User');

const db ="mongodb+srv://testuser:twsimongodb123@cluster0-g6lvn.mongodb.net/test?retryWrites=true&w=majority"
app.use(bodyParser.urlencoded({extended: false })); // for body parser

mongoose
.connect (db,{useNewUrlParser: true})
.then(() => console.log ("Db Connected"))
.catch (err => console.log(err));




/* GET home page. */
app.get('/', (req,res) => res.json({
	msg: "Hello! Amigo"
}));

app.post('/users', (req, res) => {

    const newUser = new User (({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }))

newUser // posting data 
.save()
.then (user => res.json(user))
.catch(err => console.log(err))

});

// get data
app.get('/users', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err))
})


const port = process.env.PORT || 5000; // localhost:5000

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));