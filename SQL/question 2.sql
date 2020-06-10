
#2A
USE sakila;
DESCRIBE actor;
SELECT * FROM actor
WHERE first_name = "Joe";

#2B
SELECT first_name, last_name FROM actor
WHERE last_name LIKE '%GEN%';

#2C
SELECT last_name, first_name FROM actor
WHERE last_name LIKE '%LI%';

#2D
SELECT country, country_id from country
WHERE country IN ('Afghanistan', 'Bangladesh', 'China');



