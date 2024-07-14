const inquirer = require("inquirer");
const { Pool } = require('pg');
const { viewAllEmployees, addDepartment} = require('./addNdelete');

const pool = new Pool(
  {
    user: "postgres",
    password: "hey",
    host: "localhost",
    database: "business_db"
  },
  console.log(`Connected to BusinessName database`)
);

const interaction = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "menu",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Departments",
      ],
    },
  ]);
};

const init = () => {
  interaction().then((answers) => {
    if (answers.menu === "View All Employees") {
        viewAllEmployees();
        init();
    } else if (answers.menu === "Add Employee"){

        return init();
    } else if (answers.menu === "Update Employee Role"){

        return init();
    } else if (answers.menu === "View All Roles"){

        return init();
    } else if (answers.menu === "Add Role") {

        return init();
    } else if (answers.menu === "View All Departments") {

        return init();
    } else if (answers.menu === "Add Departments") {
      addDepartment();
      init();
    }
  });
};

init();
