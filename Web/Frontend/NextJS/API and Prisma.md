1. Create a postgres db

```bash
❯ brew services start postgresql@15
❯ psql postgres
psql (14.12 (Homebrew), server 15.7 (Homebrew))
WARNING: psql major version 14, server major version 15.
         Some psql features might not work.
Type "help" for help.

postgres=# CREATE database workshopdb;
CREATE DATABASE
postgres=# \q
```



