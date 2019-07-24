---
title: Useful Commands for PostgreSQL and MySQL Database
featured_img: /assets/img/postgresql-vs-mysql-features.jpg
tags: tech
toc: true
---

![postgresql and mysql](/assets/img/postgresql-vs-mysql-features.jpg)

A consolidated list of useful commands for PostgreSQL and MySQL from my own findings.

<!--more-->

## Prereqs
[Homebrew](https://brew.sh/)

## PostgreSQL

### Installation
`brew install postgresql`

### Connect through CLI:
```
PGPASSWORD=XXX psql -h HOST -p PORT -d DATABASE -u USERNAME
```

### Show tables
```
\d
```

### Describe tables
```
\d TABLENAME
```

### Show biggest tables and their sizes
```sql
SELECT nspname || '.' || relname AS "relation",
  pg_size_pretty(pg_total_relation_size(C.oid)) AS "total_size"
FROM pg_class C
LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
WHERE nspname NOT IN ('pg_catalog', 'information_schema')
  AND C.relkind <> 'i'
  AND nspname !~ '^pg_toast'
ORDER BY pg_total_relation_size(C.oid) DESC
LIMIT 20;
```

### Export to CSV with header
```
\copy TABLENAME TO FILENAME.csv' DELIMITER ',' CSV HEADER;
```

<hr>

## MySQL

### Installation
`brew install mysql`

### Connect through CLI:
```
mysql -h HOST -P PORT -D DATABASE -u USERNAME -pPASSWORD 
```

### Show tables
```
SHOW tables;
```

### Describe tables
```
DESCRIBE TABLENAME
```

### Show biggest tables and their sizes
```sql
SELECT 
  table_schema as `Database`, 
  table_name AS `Table`, 
  round(((data_length + index_length) / 1024 / 1024), 2) `Size in MB` 
FROM information_schema.TABLES 
ORDER BY (data_length + index_length) DESC
LIMIT 20;
```

### Export to CSV with header
```sql
SELECT *
FROM TABLENAME
INTO OUTFILE 'FILENAME.csv'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';
```