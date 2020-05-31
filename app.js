const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// array of all the employees
const employeesArr = [];

// Gathering employee info with inquirer prompt
const promptEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is the employee(s) role?',
            choices: ['Intern', 'Engineer', 'Manager'],
            name: 'role'
        },
        {
            type: 'input',
            message: 'First name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Employee ID?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Email?',
            name: 'email'
        }
    ]).then(response => { 
        // capitalizing the first letter in the name
        response.name = response.name.charAt(0).toUpperCase() + response.name.substr(1);
        // Finding the roles
        if (response.role === 'Intern') {
            schoolPrompt(response);
        } else if (response.role === 'Engineer') {
            gitHubPrompt(response);
        } else if (response.role === 'Manager') {
            officePrompt(response);
        }
    })
}

// Prompt for when user selects Intern
const schoolPrompt = (intern) => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'School?',
            name: 'school'
        }
    ]).then(response => {
        // saving the school response
        intern.school = response.school;
        // checking for more employees
        adder(intern);
    })
}

// Prompt for Engineers
const gitHubPrompt = (engineer) => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'GitHub Username?',
            name: 'gitHubUser'
        }
    ]).then(response => {
        // saving the github response
        engineer.gitHubUser = response.gitHubUser;
        // checking for more employees
        adder(engineer);
    })
}

// Prompt for managers
const officePrompt = (manager) => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Office Number?',
            name: 'officeNum'
        }
    ]).then(response => {
        // saving the github response
        manager.gitHubUser = response.officeNum;
        // checking for more employees
        adder(manager);
    })
}

const adder = (employee) => {
    inquirer.prompt([
        // seeing if the user wants to add more employees
        {
            type: 'confirm',
            message: 'Would you like to add another employee?',
            name: 'addEmployee'
        }
    ]).then(response => {
        // pushing info to the lib folder (constructors)
        if (employee.role === 'Intern') {
            employeesArr.push(new Intern(employee.name, employee.id, employee.email, employee.school))
        } else if (employee.role === 'Engineer') {
            employeesArr.push(new Engineer(employee.name, employee.id, employee.email, employee.gitHubUser))
        } else if (employee.role === 'Manager') {
            employeesArr.push(new Manager(employee.name, employee.id, employee.email, employee.officeNum))
        }
        // running program again if the user wants to enter another employee
        if (response.addEmployee){
            promptEmployee();
        } else {
            let renderedHTML = render(employeesArr);
            fs.writeFile(outputPath, renderedHTML, 'utf8', err => {
                if(err) {
                    return err;
                } else {
                    console.log('Success!');
                    
                }
            })
        }
    })
}

// Calling the function to make the prompt pop up
promptEmployee();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
