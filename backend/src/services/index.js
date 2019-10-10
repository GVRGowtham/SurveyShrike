// eslint-disable-next-line no-unused-vars
const fields = require('./fields/fields.service.js');
const responses = require('./responses/responses.service.js');
const surveys = require('./surveys/surveys.service.js');
module.exports = function (app) {
    app.configure(fields);
    app.configure(responses);
    app.configure(surveys);
};
