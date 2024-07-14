const { prompt } = require("inquirer");
const { Pool } = require('pg');

const pool = new Pool(
    {
      user: "postgres",
      password: "hey",
      host: "localhost",
      database: "business_db"
    },
    console.log(`Connected to BusinessName database`)
  );
  

function viewTable(queue) {
    pool.query(queue).then(({ rows }) => {
        console.table(rows);
    })
    .catch((err) => {
        console.error("Error in Viewing Table", err);
        pool.end();
    });
}

function viewAllEmployees() {
    viewTable(`
        SELECT e1.id, e1.first_name, e1.last_name, role.title AS title, role.salary, department.name AS department, CONCAT(e2.first_name, '', e2.last_name) AS  manager
        FROM employee e1
        JOIN role ON e1.role_id = role.id
        JOIN department ON role.department = department.id
        LEFT JOIN employee e2 ON e1.manager_id = e2.id
        `)
}

function addDepartment() {
    prompt([
        {
            type: "input",
            name: "input",
            message: "Enter the name of the new department:",
        },
    ]).then(({ input }) => {
        pool.query("INSERT INTO department (name) VALUES ($1)", [input])
        .then((data) => {
            console.log(`Added new department '${input}'`);
            pool.end();
        })
        .catch((err) => {
            console.error("Error when adding department", err);
         pool.end();
        })
    })
}

module.exports = {viewAllEmployees, addDepartment}