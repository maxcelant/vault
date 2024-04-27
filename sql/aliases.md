- `''` - string data (value in a cell)
- `""` - column names
- Column aliases without double quotes are **case-insensitive**

**Example 1**
```sql
SELECT id as "ID", invoice_number as "Invoice Number"
FROM invoices
ORDER BY invoice_number DESC;
```

---

**Example 2**

```sql
SELECT company_id, sum(amount_due) as total_amount
FROM invoices
GROUP BY company_id
ORDER BY total_amount DESC;
```

These are effectively the same thing.

```sql
SELECT company_id, sum(amount_due) as "Total Amount"
FROM invoices
GROUP BY company_id
ORDER BY "Total Amount" DESC;
```

---

**Example 3**
