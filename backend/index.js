const express = require('express');

const app = express();

// Tipos de parâmetros

// Query Params: request.query
// Route Params: request.params
// Body: 

app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({
        message: 'Hello World'
    });
});

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({
        message: 'Hello World'
    });
});

app.listen(3333);
