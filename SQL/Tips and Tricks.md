1. Use can use **NOT IN** if you have a set of things it shouldn't be.
```sql
SELECT name, country FROM travelers WHERE country NOT IN ('Canada', 'Mexico', 'USA')
```

2. You can use the `NOT` keyword if its a boolean.
```sql
SELECT * FROM students WHERE NOT tuition;
```

3. You can add a `CHECK` constraint
```sql
CREATE TABLE employees ( 
	id SERIAL PRIMARY KEY, 
	first_name VARCHAR (50), 
	last_name VARCHAR (50), 
	birth_date DATE CHECK (birth_date > '1900-01-01'), 
	joined_date DATE CHECK (joined_date > birth_date), 
	salary numeric CHECK(salary > 0) 
);
```

4. This makes sure that all `models` are deleted that reference that `make`
```sql
CREATE TABLE makes (
	id SERIAL PRIMARY KEY,
	name VARCHAR
)

CREATE TABLE models (
	id SERIAL PRIMARY KEY,
	make_id INTEGER REFERENCES makes(id) ON DELETE CASCADE
	name VARCHAR,
	year INTEGER
)
```

5. Many-to-Many relationship, this is the only way to do it.
![[Pasted image 20230622163203.png]]


