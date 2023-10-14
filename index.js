const express=require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Models = require('./models.js');

//instatiations
const app = express();
const Users=Models.User;
mongoose.connect("", { useNewUrlParser: true, useUnifiedTopology: true });

//middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 5000;

// app.get('/', (req, res) => {        
//     res.sendFile('index.html', {root: __dirname});                                                         
// });

app.get('/', (req, res) => {        
    res.send("here")                                                       
});

//personal information
app.post('/personalinfo', (req, res) => {        
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));                                                         
});

//skills
app.post('/skills', (req, res) => {        
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));                                                         
});

//education
app.post('/education', (req, res) => {        
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));                                                         
});

//experiences
app.post('/experience', (req, res) => {        
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));                                                         
});

//create a new user
app.post('/users',async(req,res)=>{
    console.log(Users)
    await Users.findOne({ Username: req.body.Username })
    .then((user)=>{
        if(user){
            return res.status(400).send(req.body.Username + 'already exists');
        }else{
            Users.create({
                Username: req.body.Username,
                Password: req.body.Password,
                Email: req.body.Email
             })
             .then((user)=>{res.status(201).json(user) })
             .catch((error)=>res.status(500).send('Error: ' +error))
        }

    })
    .catch((error)=>{
        res.status(500).send('Error: ' +error);
    });
    
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 