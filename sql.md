1. Find the title of each film?

```sql
SELECT Title FROM movies;
```

2. Find the director of each film

```sql
SELECT Director FROM movies;
```

3. Find the title and director of each film

```sql
SELECT Title,Director FROM movies;
```

4. Find the title and year of each film

```sql
SELECT Title, Year FROM movies;
```

5. Find all the information about each film

```sql
SELECT * FROM movies;
```

![alt text](exercise1.png)

6. Find the movie with a row id of 6

```sql
SELECT *
FROM movies
WHERE Id=6;
```

7. Find the movies released in the years between 2000 and 2010

```sql
SELECT *
FROM movies
WHERE Year>=2000 AND YEAR<=2010;
```

8. Find the movies not released in the years between 2000 and 2010

```sql
SELECT *
FROM movies
WHERE Year NOT BETWEEN 2000 AND 2010;
```

9. Find the first 5 Pixar movies and their release year

```sql
SELECT *
FROM movies WHERE Year<=2003;
```

![alt text](exercise2.png)

10. Find all the Toy Story movies

```sql
SELECT * FROM movies
WHERE Title LIKE "%Toy Story%";
```

11. Find all the movies directed by John Lasseter

```sql
SELECT * FROM movies
WHERE Director ="John Lasseter";
```

12. Find all the movies (and director) not directed by John Lasseter

```sql
SELECT * FROM movies
WHERE Director !="John Lasseter";
```

13. Find all the WALL-\* movies

```sql
SELECT * FROM movies WHERE Title LIKE "WALL-%";
```

![alt text](exercise3.png)

14. List all directors of Pixar movies (alphabetically), without duplicates

```sql
SELECT DISTINCT Director
FROM movies
ORDER BY Director;
```

15. List the last four Pixar movies released (ordered from most recent to least)

```sql
SELECT * FROM Movies ORDER BY Year DESC LIMIT 4;
```

16. List the first five Pixar movies sorted alphabetically

```sql
SELECT * FROM Movies ORDER BY Title LIMIT 5;
```

17. List the next five Pixar movies sorted alphabetically

```sql
SELECT * FROM Movies ORDER BY Title  LIMIT 5 OFFSET 5;
```

![alt text](exercise4.png)

18. List all the Canadian cities and their populations

```sql
SELECT City,Population FROM north_american_cities
WHERE Country LIKE "Canada";
```

19. Order all the cities in the United States by their latitude from north to south

```sql
SELECT City FROM north_american_cities WHERE Country LIKE "United States" ORDER BY Latitude;
```

20. List all the cities west of Chicago, ordered from west to east

```sql
SELECT City
FROM North_american_cities
WHERE Longitude < (SELECT Longitude
                    FROM North_american_cities
                    WHERE City="Chicago")
ORDER BY Longitude;
```
