-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

USE colors;

CREATE TABLE users (
    id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(400),
    username VARCHAR(70) NOT NULL,
    password varchar(400) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp()
);