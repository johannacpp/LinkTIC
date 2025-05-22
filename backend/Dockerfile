# Imagen base con Java 21
FROM openjdk:21-jdk-slim

WORKDIR /middleware

COPY target/*.jar backend.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "backend.jar"]