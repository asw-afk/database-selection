DELETE FROM DEPARTMENT; 
INSERT INTO department (name)
VALUES
('Sale'),
('Engineering'),
('Finance'),
('Legal');

DELETE FROM role;
INSERT INTO role (title, salary, department)
VALUES
('Sales Lead', 10, 1),
('Sales Person', 15, 1),
('Lead Engineer', 100000, 2),
('Software Engineer',50000, 2),
('Account Manager', 12000000, 3),
('Accountant', 77000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 3, 4);

DELETE FROM employee;
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Bethany', 'Esda', 1, null),
('Mckenzie', 'Fakename', 2, null),
('Nos', 'Feratu', 3, 3),
('Hugh', 'Mann', 4, 1),
('Guy', 'Dudesmann', 1, null),
('Not', 'Araccoon', 2, null);