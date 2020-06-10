USE sakila;

#4a
SELECT last_name, COUNT(*) AS 'Count' FROM actor
GROUP BY last_name;

#4b
SELECT last_name, COUNT(*) AS 'Count' FROM actor
GROUP BY last_name
HAVING Count >= 2;

#4c
UPDATE actor
SET first_name='HARPO'
WHERE first_name='GROUCHO' AND last_name='WILLIAMS';

#4D
UPDATE actor
SET first_name='GROUCHO'
WHERE first_name='HARPO' AND last_name='WILLIAMS';

