CREATE TABLE templates(
  id int PRIMARY KEY AUTO_INCREMENT,
  title varchar(1000) NOT NULL,
  position int NOT NULL,
  user int NOT NULL
);

INSERT INTO templates(title, position, user) VALUES ('Test 1', 1, 1);
INSERT INTO templates(title, position, user) VALUES ('Test 2', 2, 1);
INSERT INTO templates(title, position, user) VALUES ('Test 3', 3, 1);
INSERT INTO templates(title, position, user) VALUES ('Test 4', 4, 1);

SELECT * FROM templates;


CREATE TABLE users(
  id int PRIMARY KEY AUTO_INCREMENT,
  username varchar(15) UNIQUE NOT NULL,
  password varchar(1000) NOT NULL
);


INSERT INTO users(username, password) VALUES ('janise', 'janise');
