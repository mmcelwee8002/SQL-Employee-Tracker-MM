const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'list',
            name: 'steps',
            message: 'What would you like to do?',
            choices: ['View ALL employees', 'Add employee', 'Update Employee Role', 'View all Roles', 'Add Role', 'View ALL Departments', 'Add Department', 'quit'],
        }
    ])
    .then(answers => console.log(answers));
        