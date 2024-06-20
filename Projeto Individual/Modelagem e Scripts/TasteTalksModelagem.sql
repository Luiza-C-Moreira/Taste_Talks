-- Scripts Taste Talks
create database Taste_Talks;
use Taste_Talks;

Create table usuario(
id int primary key auto_increment,
nome varchar(85),
email varchar(45),
apelido varchar(45),
cpf char(11) unique,
senha varchar(45)
);

Create table restaurante(
idRestaurante int primary key auto_increment,
tipoCulinaria varchar(85),
cep char(8),
logradouro varchar(45),
cnpj char(14) unique
);

Create table postagens (
fkUsuario int,
fkRestaurante int,
idPostagens int primary key auto_increment,
post varchar(2000),
avaliacoes decimal(2,1),
constraint fkUserPost foreign key (fkUsuario) references Usuario(id),
constraint fkRestPost foreign key (fkRestaurante) references Restaurante(idRestaurante)
);

Create table avaliacoes (
idAvaliacoes int primary key auto_increment,
MetricaSemanal varchar(45),
fkUsuario int,
fkRestaurante int,
fkPostagem int,
constraint fkUserAval foreign key (fkUsuario) references Usuario(id),
constraint fkRestAval foreign key (fkRestaurante) references Restaurante(idRestaurante),
constraint fkPostAval foreign key (fkPostagem) references Postagens(idPostagens)
);


SELECT * FROM usuario;


