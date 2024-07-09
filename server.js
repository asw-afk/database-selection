const express = require("express");

const { Pool } = require("pg");

const PORT = process.env.PORT || 3000;
const app = express();

//EXPRESS middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool({
  //Enter PostgresSQL username
  user: '',
  //Enter PostgresSQL password
  password: '',
  host: 'localhost',
  database: 'business_db',
},
console.log('Connected to the business_db database!')
)

pool.connect();

pool.query(`DELETED FROM employee`)
