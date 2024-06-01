```sql
UPDATE products 
SET price_in_cents = 799
WHERE id = (SELECT id FROM products WHERE name = 'Milk');
```