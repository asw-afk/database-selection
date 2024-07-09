const inquirer = require("inquirer");
//const require = fs('fs');

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
      
        return init();
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

        return init();
    }
  });
};

init();
