const create = {
    description: {
        demand: true,
        alias: 'd',
        description: 'name of homework',
        type: 'string'
    },
    complete: {
        alias: 'c',
        description: 'mark as completed',
        default: false,
        type: 'boolean'
    }
};

const update = {
    task: {
        demand: true,
        alias: 't',
        description: 'id of task',
        type: 'number'
    },
    complete: {
        alias: 'c',
        description: 'mark as completed',
        default: false,
        type: 'boolean'
    },
    destroy: {
        alias: 'd',
        description: 'delete a task',
        default: false,
        type: 'boolean'
    }
};

const destroy = {
    task: {
        alias: 't',
        demand: true,
        type: 'number',
        description: 'delete a task'
    }
};

const { argv } = require('yargs')
    .command('list', 'homework list')
    .command('create', 'create homework to do', create).version(false)
    .command('update', 'update homework to do', update).version(false)
    .command('destroy', 'destroy homework', destroy).version(false)
    .help();

module.exports = {
    argv,
}