const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const AylienTextAPI = require('aylien_textapi');
//set aylien api credentials
const textapi = new AylienTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Server 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/all', getData)

function getData(req, res) {
    res.send(projectData)
    console.log(projectData);
}

// App endpoint
projectData = {};

app.post('/aylienapi', function (req, res) {
    console.log(req.body);

    try {
        const urlText = req.body;
        textapi.sentiment({
            text: urlText,
            mode: 'document'
        },
            function (error, response) {
                if (!error) {
                    projectData.text = response.text;
                    projectData.polarity = response.polarity;
                    projectData.subjectivity = response.subjectivity;
                    res.send(projectData);
                    console.log(response);
                    console.log("worked")
                }
            })
    } catch (error) {
        console.log("error", error)
    }
});