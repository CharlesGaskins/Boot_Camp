USE sakila;

#3A
SELECT * FROM actor;
ALTER TABLE actor
ADD COLUMN middle_name VARCHAR (30) AFTER first_name;

#3B
ALTER TABLE actor
MODIFY COLUMN middle_name BLOB;

#3C
ALTER TABLE actor
DROP middle_name;


