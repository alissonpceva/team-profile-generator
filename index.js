const fs = require('fs'); 
const inquirer = require('inquirer');
//node modules

// page html
const generateHTML = require ('./src/generatetemplate');
//class profiles
const engineer= require('./lib/engineer');// engineer
const intern = require('./lib/intern');// intern
const manager = require('./lib/manager');// manager
const teamArray = []; 

// Validation functions
const validateName = nameInput => {
    if (nameInput) {
        return true;
    } else {
        console.log("Please enter a name!");
        return false;
    }
};

const validateId = idInput => {
    if (isNaN(idInput)) {
        console.log("Please enter a valid ID!");
        return false;
    } else {
        return true;
    }
};

const validateEmail = email => {
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (valid) {
        return true;
    } else {
        console.log("Please enter a valid email address!");
        return false;
    }
};

const validateGithub = github => {
    if (github) {
        return true;
    } else {
        console.log("Please enter a GitHub username!");
        return false;
    }
};

const validateSchool = school => {
    if (school) {
        return true;
    } else {
        console.log("Please enter a school name!");
        return false;
    }
};

const validateOfficeNumber = officeNumberInput => {
    if (isNaN(officeNumberInput)) {
        console.log('Please enter a valid office number!');
        return false;
    } else {
        return true;
    }
};
// Prompts
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: validateName
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: validateId
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: validateEmail
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: validateOfficeNumber
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    });
};

const addEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?",
            validate: validateName
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: validateId
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: validateEmail
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: validateGithub
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: validateSchool
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }

            teamArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })
};






// generate html once completed or error