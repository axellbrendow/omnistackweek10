const axios = require('axios');
const Dev = require('../models/Dev');

// Functions of a Controller: index, show, store, update and destroy

module.exports = {
    async index(request, response)
    {
        const devs = await Dev.find();
    
        return response.json(devs);
    },
}
