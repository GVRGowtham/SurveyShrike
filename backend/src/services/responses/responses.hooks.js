const { pluck } = require('feathers-hooks-common');

let fieldFilter = pluck(
    'response',
    'submitted_by',
    'submitted_at'
);
module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [fieldFilter],
        update: [fieldFilter],
        patch: [fieldFilter],
        remove: []
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};