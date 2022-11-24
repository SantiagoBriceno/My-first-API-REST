CREATE DATABASE IF NOT EXISTS companydb;

USE companydb

CREATE TABLE empleado(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO empleado VALUES
    (1, 'Joe', 1000),
    (2, 'Kevin', 2000),
    (3, 'Max', 3200),
    (4, 'Bob', 1300);