const fs = require('fs');
const colors = require('colors/safe');

let listToDo = [];

const saveTask = (data) => {
    return new Promise((resolve, reject) => {

        let dataForFile = JSON.stringify(data);

        /* dependiendo de la ubicacion de ejecucion del comando nodemon cambiara la url */
        fs.writeFile(`db/data.json`, dataForFile, (err) => {
            if (err)
                return reject({ success: false, msg: `~> Error saving information in file!:\n~> ${err}` });

            resolve({ success: true, msg: `~> Task saved success` });
        });
    });
};

const createTask = (description, complete = false) => {
    return new Promise((resolve, reject) => {

        let dataFile = fs.readFileSync('db/data.json');

        if (dataFile != '')
            listToDo = JSON.parse(dataFile);

        listToDo.push({ description, complete });

        saveTask(listToDo)
            .then((result) => {
                return resolve(result);
            }).catch((err) => {
                return reject(err);
            });
    });
};

const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('db/data.json', (err, data) => {
            if (err)
                return reject({ success: false, msg: colors.red(`~> Error reading db. \n ${colors.yellow(err)}`) });

            resolve(data);
        });
    });
};

const listHomework = () => {
    return new Promise((resolve, reject) => {
        let listHomework = colors.yellow(`## list homework empty ##`);
        let dataFile = fs.readFileSync('db/data.json');

        dataFile = (dataFile != '') ? JSON.parse(dataFile) : [];

        dataFile.find((task, i) => {
            if (i == 0)
                listHomework = colors.yellow(`   ## list homework ##\n\n`);

            let text = `${colors.yellow(i + 1)} -. ${task.description} [${(task.complete) ? 'Do' : 'To Do'}]\n`;
            listHomework += (task.complete) ? colors.green(text) : colors.red(text);
        });

        resolve(listHomework);
    });
};

const updateHomework = (taskId, complete = false, destroy = false) => {
    return new Promise((resolve, reject) => {
        let dataFile = fs.readFileSync('db/data.json');
        if (dataFile == '')
            return reject({ success: false, msg: `Error reading db, json empty` });

        dataFile = JSON.parse(dataFile);
        dataFile.find((task, i) => {
            if ((taskId - 1) == i) {

                if (destroy)
                    dataFile.splice((taskId - 1), 1);
                else
                    task.complete = complete;
            }
        });

        saveTask(dataFile)
            .then((result) => {
                return resolve(result);
            }).catch((err) => {
                return reject(err);
            });

    });
};

const destroyTask = (taskId) => {
    return new Promise((resolve, reject) => {
        let dataFile = fs.readFileSync('db/data.json');
        if (dataFile == '')
            return reject({ success: false, msg: `not have task to delete, json empty` });

        dataFile = JSON.parse(dataFile);
        let listToDo = dataFile.filter((task, i) => {
            return (taskId - 1) != i;
        });

        saveTask(listToDo)
            .then((result) => {
                return resolve(result);
            }).catch((err) => {
                return reject(err);
            });

    });
};

module.exports = {
    createTask,
    listHomework,
    updateHomework,
    destroyTask,
};

