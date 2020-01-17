const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Make express understand json format in all routes
app.use(cors());
app.use(express.json());
app.use(routes);

// Mongo DB Cluster
mongoose.connect('mongodb+srv://axell:Manage13@cluster0-owhuo.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(3333);
