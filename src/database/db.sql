USE tamagochi;

CREATE TABLE users(
    username VARCHAR(50) NOT NULL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    gold BIGINT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS tamagochis(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    evolutionLevel TINYINT NOT NULL,
    image VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS userTamagochi(
    userEmail VARCHAR(50) NOT NULL,
    tamagochiId INT NOT NULL,    
    PRIMARY KEY (userEmail, tamagochiId),
    FOREIGN KEY (userEmail) REFERENCES users(username) 
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (tamagochiId) REFERENCES tamagochis(id) 
    ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO tamagochis (name, evolutionLevel, image) 
VALUES ('Spidey', 1, './src/assets/images/aranha-removebg-preview.png');