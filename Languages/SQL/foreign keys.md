```sql
CREATE TABLE IF NOT EXISTS makes (
	id SERIAL PRIMARY KEY,
	name VARCHAR
);

CREATE TABLE IF NOT EXISTS models (
	id SERIAL PRIMARY KEY,
	make_id INTEGER,
	name VARCHAR,
	year INTEGER,
	CONSTRAINT fk_models_to_maker FOREIGN KEY(make_id) REFERENCES makes(id)
);
  
CREATE TABLE sales (
	id SERIAL PRIMARY KEY,
	model_id INTEGER,
	purchase_price_in_cents INTEGER NOT NULL,
	purchase_date DATE NOT NULL,
	sale_price_in_cents INTEGER,
	sale_date DATE,
	CONSTRAINT fk_sales_to_model FOREIGN KEY(model_id) REFERENCES models(id)
);
```

1. **In the `models` table**: The `CONSTRAINT` named `fk_models_to_maker` is defined, which establishes `make_id` as a foreign key that references the `id` column in the `makes` table.
    
    What this means is that for every record you insert into the `models` table, the `make_id` value must correspond to an `id` that already exists in the `makes` table. If you try to insert a record into `models` with a `make_id` that doesn't exist in `makes`, the database will return an error.
    
2. **In the `sales` table**: Similarly, the `CONSTRAINT` named `fk_sales_to_model` is defined. This establishes `model_id` as a foreign key that references the `id` column in the `models` table.
    
    So for every record in `sales`, the `model_id` must correspond to an existing `id` in `models`. Again, if you try to insert a record into `sales` with a `model_id` that doesn't exist in `models`, the database will return an error.