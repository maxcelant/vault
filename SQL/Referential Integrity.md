Referential integrity is a concept in relational database design that ensures the relationships between tables remain consistent. It is one of the fundamental features of foreign key constraints, which are used to define these relationships.

Referential integrity works by enforcing a set of rules on the data relationships that are created due to the foreign key. Here are the main rules:

1. **No Orphan Records**: A foreign key value cannot exist if there is no corresponding primary key value in the linked table. This means you can't have a record in the 'child' table that is pointing to a non-existent record in the 'parent' table.
    
    For example, if you have an `orders` table with a `customer_id` field (which is a foreign key to the `customers` table), you can't have an order that is linked to a non-existent customer.
    
2. **No Dangling References**: If a record in the parent table is deleted, one of two things must happen:
    
    - The related records in the child table are also deleted. This is known as "cascading delete".
    - The operation is not allowed to proceed. This is the default behavior in most DBMS systems.
    
    So, using the same `orders` and `customers` example, if you delete a customer from the `customers` table, you either need to delete all of their orders from the `orders` table as well, or you won't be allowed to delete the customer.
    
3. **No Changes to Referenced Primary Key**: If a primary key value that is being referenced by a foreign key is updated, again one of two things must happen:
    
    - The change is cascaded to all foreign keys that reference it.
    - The operation is not allowed to proceed.
    
    So, if you change a `customer_id` in the `customers` table, you either need to change that `customer_id` for all of their orders in the `orders` table, or you won't be allowed to change the `customer_id`.
    

These rules of referential integrity ensure that the links between tables in the database always make sense and helps to prevent errors that could be caused by inconsistent data.