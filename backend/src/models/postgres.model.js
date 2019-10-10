
const knex = require('knex');
const assert = require('assert');

module.exports = function (app) {

    console.log('[DEBUG] postgres.model:', 'retrieving binding');

    const Model = new knex({
        client: 'pg',
        connection: "postgres://postgres:postgres@localhost:5432/survey-shrike",
        searchPath: ['knex', 'public'],
    });

    return Model;
};