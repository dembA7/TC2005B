-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

-- Creación de tablas y volcado de datos

USE colors;

CREATE TABLE users (
    id INT(11) NOT NULL,
    nombre VARCHAR(400),
    username VARCHAR(70) NOT NULL,
    password varchar(400) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp()
);

INSERT INTO `users` (`id`, `nombre`, `username`, `password`) VALUES
(1, 'Arturo', 'demba', '$2a$12$Azt57FSz5PbxslERM7qm6uljrMIUTJUZW9MFcE1XVun.V4/PDd9rK'),
(2, 'Cristiano', 'cris', '$2a$12$js.p.PFZPOTvyq7jeoPzoOqabfixhroVba451wLV6Pa/COy3rXN.S');


CREATE TABLE `roles` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `descripcion` varchar(400) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
)

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'admin', NULL),
(2, 'user', NULL);

CREATE TABLE `privilegios` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
)

INSERT INTO `privilegios` (`id`, `nombre`) VALUES
(1, 'verAdmin');

CREATE TABLE `rolPrivilegio` (
  `idRol` int(11) NOT NULL,
  `idPrivilegio` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
)

INSERT INTO `rolPrivilegio` (`idRol`, `idPrivilegio`) VALUES
(1, 1),

CREATE TABLE `usuarioRol` (
  `idUsuario` int(11) NOT NULL,
  `idRol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
)

INSERT INTO `usuarioRol` (`idUsuario`, `idRol`) VALUES
(1, 1),
(2, 2);


-- Indexes

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

ALTER TABLE `usuarioRol`
  ADD PRIMARY KEY (`idUsuario`,`idRol`),
  ADD KEY `idRol` (`idRol`);

ALTER TABLE `rolPrivilegio`
  ADD PRIMARY KEY (`idRol`,`idPrivilegio`),
  ADD KEY `idPrivilegio` (`idPrivilegio`);

-- Constraints

ALTER TABLE `rolPrivilegio`
  ADD CONSTRAINT `rol_privilegio_ibfk_1` FOREIGN KEY (`idRol`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `rol_privilegio_ibfk_2` FOREIGN KEY (`idPrivilegio`) REFERENCES `privilegios` (`id`);

ALTER TABLE `usuarioRol`
  ADD CONSTRAINT `usuario_rol_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `usuario_rol_ibfk_2` FOREIGN KEY (`idRol`) REFERENCES `roles` (`id`);
COMMIT;

