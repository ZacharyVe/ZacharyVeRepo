## Question:

### What kind of join would you use to see all employee rows and only the matching managers? Please fill in the appropriate join after the embedded comment below.

```
  SELECT
    e.first_name || ' ' || e.last_name as "Employee",
    m.first_name || ' ' || m.last_name as "Emp Manager",
    d.department_name as "Department",
    dm.first_name || ' ' || dm.last_name as "Dept Manager"
  FROM employees m
    /* write code on this line, after this comment */
    employees e ON (m.employee_id = e.manager_id)
    LEFT JOIN departments d ON (e.department_id = d.department_id)
    LEFT JOIN employees dm ON (d.manager_id = dm.employee_id);
```

1. INNER JOIN
2. OUTER JOIN
3. RIGHT JOIN
4. LEFT JOIN
5. SELF JOIN

## Answer:
