const { argv } = require('./config/yargs');
const colors = require('colors/safe');
const { createTask, listHomework, updateHomework, destroyTask } = require('./to-do/to-do');


// console.log(colors.magenta(argv));

let command = argv._[0];

switch (command) {
    case 'list':
        listHomework()
            .then((listHomework) => {
                console.log(listHomework);
            }).catch((err) => {
                console.log(colors.red(err.msg));
            });
        break;

    case 'create':
        createTask(argv.description, argv.complete)
            .then((result) => {
                listHomework()
                    .then((listHomework) => {
                        console.log(listHomework);
                    }).catch((err) => {
                        console.log(colors.red(err.msg));
                    });
            }).catch((err) => {
                console.log(colors.red(err));
            });
        break;

    case 'update':
        updateHomework(argv.task, argv.complete, argv.destroy)
            .then((result) => {
                listHomework()
                    .then((listHomework) => {
                        console.log(listHomework);
                    }).catch((err) => {
                        console.log(colors.red(err.msg));
                    });
            }).catch((err) => {
                console.log(colors.red(err));
            });
        break;

    case 'destroy':
        destroyTask(argv.task)
            .then((result) => {
                listHomework()
                    .then((listHomework) => {
                        console.log(listHomework);
                    }).catch((err) => {
                        console.log(colors.red(err.msg));
                    });
            }).catch((err) => {

            });
        break;

    default:
        console.log(colors.red(`~> command [${command}] not fund!`));
}