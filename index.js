const manager = require('./Manager.js')
const intern = require('./Intern.js')
const enginner = require('./Enginner.js')
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs');

const OUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUT_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];

//need to push the id for each person 
const idArray = [];


function prompt() {
    //if not manager create one
    function createEmployee () {
        inquirer
            .prompt([{
                    type: "list",
                    message: "What type of employee would you like to add to your team?",
                    name: 'EmployeePrompt',
                    choices: [ "Manager", "Enginner", "Intern", "No more team members are needed."]
                  }])
                }

    //build team 
     function createManager() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What is the Managers name?",
                    name: 'ManagersName',
                },
                {
                    type: "list",
                    message: "What is the manager's employee ID number?",
                    name: 'ManagersId',
                },
                {
                    type: "list",
                    message: "What is the Manager's email address?",
                    name: 'ManagersEmail',
                },
                {
                    type: "list",
                    message: "What is the anager's office number?",
                    name: 'ManagersOfficeNumber',
                },
                ])}


     function createEngineer() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What is the Engineer's name?",
                    name: 'EngineersName',
                },
                {
                    type: "list",
                    message: "What is the Engineer's employee ID number?",
                    name: 'EngineerId',
                },
                {
                    type: "list",
                    message: "What is the Engineer's email address?",
                    name: 'EngineerEmail',
                },
                {
                    type: "list",
                    message: "What is the engineer's GitHub username?",
                    name: 'EngineerGithub',
                },
                ])}


     function createIntern() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What is the intern's name?",
                    name: 'internsName',
                },
                {
                    type: "list",
                    message: "What is the intern's employee ID number?",
                    name: 'internsId',
                },
                {
                    type: "list",
                    message: "What is the intern's email address?",
                    name: 'internsEmail',
                },
                {
                    type: "list",
                    message: "What school does the intern attend?",
                    name: 'internsSchool',
                },
                ])}
}

function buildTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
}

prompt()