![[Pasted image 20230620161824.png]]

```sql
SELECT company_id, sum(amount) as total_amount
FROM invoices
WHERE company_id > 5
GROUP BY company_id
HAVING sum(amount) > 44_000_000
ORDER BY total_amount
```

![[Pasted image 20230620145805.png]]



