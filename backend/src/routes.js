const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

// Parameter types

// Query Params: request.query (filters, ordering, pagination, ...)
// Route Params: request.params (Identify a resource in the alteration or remotion)
// Body: request.body (Data to create or change a register)

routes.get('/users', (request, response) => {
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
});

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;

    const githubResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = githubResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    });

    return response.json(dev);
});

module.exports = routes;
