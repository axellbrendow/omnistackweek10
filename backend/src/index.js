const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

// Make express understand json format in all routes
app.use(cors());
app.use(express.json());
app.use(routes);

// Mongo DB Cluster
mongoose.connect('mongodb+srv://axell:Manage13@cluster0-owhuo.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

server.listen(3333);
