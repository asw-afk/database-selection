const inquirer = require("inquirer");
const require = fs('fs');

const interaction = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "menu",
            choices: ["View All Employees", "Add Employee", "Update Employee Role",
                "View All Roles", "Add Role", "View All Departments", "Add Departments"
            ]
        }
    ])



}