const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

// Parameter types

// Query Params: request.query (filters, ordering, pagination, ...)
// Route Params: request.params (Identify a resource in the alteration or remotion)
// Body: request.body (Data to create or change a register)

/* routes.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({
        message: `get users`
    });
});

routes.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({
        message: `delete ${request.params.id}`
    });
}); */

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;
