import express from 'express'; //express is a web framework for node.js
let cors = require('cors'); // provides a way for server and browser to communicate (node.js package)
let app = express(); // creates an express application 

app.use(cors()); // app capable of pulling restricted resources from any requests