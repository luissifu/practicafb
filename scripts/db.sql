create database practicafb;

use practicafb;

create table User (
  id int AUTO_INCREMENT,
  name varchar(100),
  primary key (id)
);

create table Post (
  id int AUTO_INCREMENT,
  post varchar(500),
  user_id int,
  liked int default 0,
  created_at datetime,
  primary key (id),
  foreign key (user_id) references User(id)
);

insert into User (name)
  values ("Luis Sifuentes");
