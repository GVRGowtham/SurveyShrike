const createService = require('feathers-knex');
const createModel = require('../../models/postgres.model');
const hooks = require('./fields.hooks');

module.exports = function (app) {
    const Model = createModel(app);

    const options = {
        id: 'id',
        name: 'fields',
        Model
    };

    // Initialize our service with any options it requires
    app.use('/fields', createService(options));

    // Get our initialized service so that we can register hooks and filters
    const service = app.service('fields');

    service.hooks(hooks);
};