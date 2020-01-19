const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessageToCloseDevs } = require('../websocket');

// Functions of a Controller: index, show, store, update and destroy

module.exports = {
    async index(request, response)
    {
        const devs = await Dev.find();
    
        return response.json(devs);
    },

    async store(request, response)
    {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });
    
        if (!dev)
        {
            const githubResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const { name = login, avatar_url, bio } = githubResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [ longitude, latitude ],
            };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

            // Filters connections that are 10km or less from this dev and
            // that searched for technologies that this dev work
            const closeDevs = findConnections(
                { latitude, longitude },
                techsArray
            );

            sendMessageToCloseDevs(closeDevs, 'new-dev', dev);
        }
    
        return response.json(dev);
    },
}
