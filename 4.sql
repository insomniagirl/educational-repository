#CREATE TABLE posts ( id INT, discount INT, description VARCHAR(128),author VARCHAR(128), photoLink VARCHAR(128), createdAt DATE, likes VARCHAR(128),  hashtags VARCHAR(128));
Use frana;
#SELECT*FROM posts where createdAt=2021-03-01;
SELECT fkuser, COUNT(*) FROM posts
GROUP BY fkuser HAVING COUNT(*) >= 2;