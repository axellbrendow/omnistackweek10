const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// Functions of a Controller: index, show, store, update and destroy

module.exports = {
    async index(request, response)
    {
        const { techs, latitude, longitude } = request.query;

        const techsArray = parseStringAsArray(techs);

        // Search all devs in 10km distance and that use some technologies
        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },

            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [ longitude, latitude ],
                    },
                    $maxDistance: 10000, // 10km in meters
                }
            }
        });
    
        return response.json({ devs });
    },
}
