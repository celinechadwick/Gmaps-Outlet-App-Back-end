DROP DATABASE IF EXISTS gmaps_db;

\connect gmaps_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users
(id BIGSERIAL PRIMARY KEY,
username VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255));

DROP TABLE IF EXISTS markers;
CREATE TABLE markers
(id BIGSERIAL PRIMARY KEY,
name VARCHAR(60) NOT NULL,
address VARCHAR(255) NOT NULL,
lat VARCHAR(255) NOT NULL,
lng VARCHAR(255) NOT NULL,
description TEXT,
upvote INT,
downvote INT);

DROP TABLE IF EXISTS users_markers;
CREATE TABLE users_markers
(id BIGSERIAL PRIMARY KEY,
 FOREIGN KEY (userid) REFERENCES users(id),
 FOREIGN KEY(markerid) REFERENCES markers(id));

INSERT INTO users
(username, email, password)
VALUES
('celinechadwick', 'cvc1230@gmail.com','password');

INSERT INTO users
(username, email, password)
VALUES
('parkjimin', 'parkjimin@gmail.com', 'serendipity');

INSERT INTO users
(username, email, password)
VALUES
('kimtaehyung', 'v@gmail.com', 'vante');

INSERT INTO markers
(name, address, lat, lng, description, upvote, downvote)
VALUES
('HEIR APPAREL','Crowea Pl, Frenchs Forest NSW 2086', -33.737885, 151.235260, 'Outlet is in here',0,0)
