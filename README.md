# Proyecto Productos

Este proyecto consta de 2 partes del backend (API REST) que gestiona productos, construida con **Spring Boot** y **Docker**. El frontend es una apliación web que interactua con el API y la cual esta desarrollada en **React**.

## Requisitos previos

- Tener Java 21 instalado y configurado para interartura con el codigo
- Tener Apache Maven instalado y configurado para construir el empaquetado
- Tener Docker instalado en la máquina
- Tener Nodejs instalado y configurado

## Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio

Primero, clona el repositorio o agregalo como un origen remoto
```bash
git init
git clone https://github.com/johannacpp/LinkTIC.git
git checkout main
```
o
```bash
git init
git remote add origin https://github.com/johannacpp/LinkTIC.git
git fetch
git checkout main
```

Luego debe ubicarse en la rama principal (Main)

### 2. Generar el empaquetado de la API (Backend)
Desde consola ingrese a la carpeta del backend y ejectue el comando para limpir y generar el .jar
```bash
cd backend/
mvn clean install package
```
### 3. Contenerización del API (Backend)
Ejectue el siguiente comando:
```bash
docker-compose up
```

### 4. Validar funcionalidad (Backend)
Desde el postman o un navegador puede validar el funcionamiento del API REST
GET http://localhost:8080/products

### 5. Activar Aplicación Web (Frontend)
En otra consola de comandos, ubicarse en la carpeta del frontend e inciar el servicio de la siguiente manera:
```bash
cd frontend/
npm start
```

### 6. Validar funcionalidad (Frontend)
Desde el navegador puede validar el funcionamiento del frontend en la URL
(http://localhost:3000/)

### 7. Diagramas C4
Para revisar los diagramas diseñados debera ingresar a la siguiente URL https://app.diagrams.net/ y tomar el archivo ubicado en la carpeta diagrams

archivo: diagramsC4.drawio

### 8. Documentación Swaguer
Desde postmas se puede importar el archivo documentado en swagguer o desde la pagina https://editor.swagger.io/

archivo: documentation.json

### 9. Pruebas Unitarias (Frontend)

En este archivo se encuentran varias imagenes de la funcionalidad de la aplicación web

archivo: Pruebas Unitarias.docx