CREATE DATABASE IF NOT EXISTS users;

USE users;

CREATE TABLE if NOT EXISTS users(
`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`username` varchar(100) NOT NULL,
`email` varchar(100) NOT NULL,
`password_1` varchar(100) NOT NULL,
`password_2` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

create table if NOT EXISTS github(
id INT NOT NULL KEY auto_increment,
pseudo VARCHAR(70) NOT NULL,
message VARCHAR(255));

insert into github (pseudo, message) values ('Thomas', 'Ceci est un test pour le site github');

create table if NOT EXISTS wikipedia(
id INT NOT NULL KEY auto_increment,
pseudo VARCHAR(70) NOT NULL,
message VARCHAR(255));

insert into wikipedia (pseudo, message)
values
('Harry', 'Il est pas bien ce site'),
('Chris', 'Je sais pas quoi dire mais c est pour tester'),
('Martin', 'Allez un dernier pour la route histoire d avoit assez d exemple !');

create table sites(
id INT NOT NULL KEY auto_increment,
name VARCHAR(70) NOT NULL);

insert into sites (name) values ('Wikipedia');