const express=require('express');
const bodyParser = require('body-parser');

//instatiations
const app = express();

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

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 