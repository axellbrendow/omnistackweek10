const express = require('express');
const mongose = require('mongoose');
const routes = require('./routes');

const app = express();

// Make express understand json format in all routes
app.use(express.json());
app.use(routes);

// Mongo DB Cluster
mongose.connect('mongodb+srv://axell:Manage13@cluster0-owhuo.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(3333);
