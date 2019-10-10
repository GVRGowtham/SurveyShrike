const createService = require('feathers-knex');
const createModel = require('../../models/postgres.model');
const hooks = require('./responses.hooks');

module.exports = function (app) {
    const Model = createModel(app);

    const options = {
        id: 'id',
        name: 'responses',
        Model
    };

    // Initialize our service with any options it requires
    app.use('/responses', createService(options));

    // Get our initialized service so that we can register hooks and filters
    const service = app.service('responses');

    service.hooks(hooks);
};