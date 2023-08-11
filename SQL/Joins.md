##### Mental Model
1. Performs a cartesian join (every row with every row)
2. Filters out data based on the criteria based on the ON clause
3. Returns the filtered data

##### Examples
1. 
```sql
SELECT *
FROM invoices
INNER JOIN companies ON companies.id = invoices.company_id;
```

2. 
```sql
SELECT invoices.*,
  companies.name as company_name
FROM invoices 
  INNER JOIN companies 
  ON companies.id = invoices.company_id 
LIMIT 4;
```

3. Aggregates still work as before:
```sql
SELECT companies.id AS company_id,
    name,
    COUNT(invoices.*) AS purchase_count
FROM companies
  INNER JOIN invoices
  ON companies.id = invoices.company_id
GROUP BY companies.id, name
ORDER BY purchase_count DESC;
```

4. Double Joins also work
```sql
SELECT students.last_name AS student_last_name,
	students.first_name AS student,
	subjects.name AS subject_name,
	grades.grade,
	grades.date
FROM grades
	INNER JOIN students
	ON grades.student_id = students.id
INNER JOIN subjects
	ON grades.subject_id = subjects.id
ORDER BY subject_name, last_name, first_name
```

```
 student_last_name |  student   | subject_name | grade |    date    
-------------------+------------+--------------+-------+------------
 Auer              | Luther     | English      |    83 | 2022-02-21
 Auer              | Luther     | English      |    92 | 2022-02-07
 Auer              | Luther     | English      |    76 | 2022-02-14
 Auer              | Luther     | English      |    80 | 2022-01-31
 Auer              | Luther     | English      |    83 | 2022-01-24
```

5. Joining and performing an average for each subject
```sql
SELECT subjects.name AS subject_name,
	AVG(grades.grade) AS average_grade
FROM grades
INNER JOIN subjects
	ON grades.subject_id = subjects.id
GROUP BY subject_name
ORDER BY subject_name ASC, average_grade DESC;
```

```
 subject_name |    average_grade    
--------------+---------------------
 English      | 80.3673469387755102
 Gym          | 79.1369863013698630
 History      | 79.7236842105263158
 Math         | 79.0264900662251656
 Science      | 78.9448275862068966
(5 rows)
```

6. Gets the highest averaged students for each class
```sql
SELECT students.last_name AS student_last_name,
	students.first_name AS student_first_name,
	subjects.name AS subject_name,
	AVG(grades.grade) AS average_grade
FROM grades
INNER JOIN students
	ON grades.student_id = students.id
INNER JOIN subjects
	ON grades.subject_id = subjects.id
GROUP BY subject_name, student_last_name, student_first_name
ORDER BY subject_name, average_grade DESC, student_last_name
LIMIT 15;
```

```
 student_last_name | student_first_name | subject_name |    average_grade    
-------------------+--------------------+--------------+---------------------
 Borer             | Rhea               | English      | 87.3333333333333333
 Sawayn            | Dewitt             | English      | 87.0000000000000000
 Schowalter        | Maximo             | English      | 83.8750000000000000
 Auer              | Luther             | English      | 83.4285714285714286
 Cremin            | Lorie              | English      | 82.5555555555555556
 Cassin            | Vince              | English      | 81.8888888888888889
 Christiansen      | Fred               | English      | 81.5000000000000000
```

**Normalization** - Make a change in one spot and it is reflected everywhere.

What SQL does is merge the two tables together and then only keeps the rows that have a match (like if company.id == invoices.company_id)

##### Inner Join Example
```sql
SELECT companies.id as id,
	   invoices.name
FROM invoices
JOIN companies.id = invoices.company_id
```
```python
companies = [
	{"id": 1, "name":"Apple"},
	{"id": 2, "name":"Microsoft"},
	{"id": 3, "name":"Google"}
]

invoices = [
	{"id": 1, "company_id": 1, "name":"Bob"},
	{"id": 2, "company_id": 1, "name":"Mark"},
	{"id": 3, "company_id": 2, "name":"Max"},
	{"id": 4, "company_id": 3, "name":"Luke"}
]

inner_join_table = []

for company in companies:
	for invoice in invoices:
		if company["id"] == invoices["company_id"]:
			row = {"id": company["id"], "name": invoice["name"]}
			inner_join_table.append(row)
```

##### Left Joins
Does filter like a normal inner join, but it also takes any company that isn't represented and adds it as well. Used for finding things that are not represented, in this case IBM.

![[Pasted image 20230621145242.png]]

##### Left Join Example
```sql
SELECT companies.id as id,
	   invoices.name
FROM invoices
LEFT JOIN companies.id = invoices.company_id
```

```python
companies = [
	{"id": 1, "name":"Apple"},
	{"id": 2, "name":"Microsoft"},
	{"id": 3, "name":"Google"}
]

invoices = [
	{"id": 1, "company_id": 1, "name":"Bob"},
	{"id": 2, "company_id": 1, "name":"Mark"},
	{"id": 3, "company_id": 2, "name":"Max"},
	{"id": 4, "company_id": 3, "name":"Luke"}
]

left_join_table = []

for company in companies:
	for invoice in invoices:
		if company["id"] == invoices["company_id"]:
			row = {"id": company["id"], "name": invoice["name"]}
			left_join_table.append(row)

company_ids = set(invoice["company_id"] for invoice in invoices)
for company in companies:
	if company["id"] not in company_ids:
		row = {"id": company["id"], "name": None}
		left_join_table.append(row)
```