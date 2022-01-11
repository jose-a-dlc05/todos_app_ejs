const path = require('path');
// Load express module
const express = require('express');
const router = require('./routes/todos');

// Load templating engine module
const cors = require('cors');
const app = express(); // invoking/running express

// configure application to utilize the ejs engine

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/todos', router);
// set the view to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
