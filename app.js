const inquirer = require('inquirer');
const fs = require('fs');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
        