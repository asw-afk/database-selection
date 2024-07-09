DROP DATABASE IF EXISTS business_db_db;
CREATE DATABASE business_db;

\c business_db;

CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    employee_name VARCHAR(30) NOT NULL,
    title INTEGER,
    departments,
    salary NUMBER, 
    manager  
    FOREIGN KEY (title_name) REFERENCES roles(title_name)

);


CREATE TABLE departments(
    
)

CREATE TABLE roles (
title_id INTEGER,
title_name VARCHAR(30) 

)