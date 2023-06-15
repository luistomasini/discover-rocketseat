# Exemplo de JOIN, GROUP BY e COUNT juntos

```sql
SELECT departamentos.descricao, COUNT(funcionarios.id_departamento) 
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept
```