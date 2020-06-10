USE sakila;
SELECT first_name, last_name 
FROM actor;

SELECT CONCAT(first_name,  ' ', last_name) AS ' Actor Name'
FROM actor;