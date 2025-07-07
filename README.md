# Projeto Java com Spring Boot

Este repositório contém um projeto base para aplicações desenvolvidas com Java e Spring Boot.

## Pré-requisitos

Antes de começar, garanta que você tenha os seguintes pré-requisitos instalados em seu ambiente de desenvolvimento:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/) (versão 17 ou superior)
- [Apache Maven](https://maven.apache.org/download.cgi) ou o Maven Wrapper (`mvnw`) incluso no projeto.

## Como Começar

Siga os passos abaixo para clonar, construir e executar a aplicação localmente.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
    cd SEU_REPOSITORIO
    ```

2.  **Construa o projeto:**
    Este comando irá baixar as dependências (definidas no `pom.xml`) e compilar o código-fonte.
    ```bash
    ./mvnw clean install
    ```
    *Se você não estiver usando o Maven Wrapper, utilize `mvn clean install`.*

3.  **Execute a aplicação:**
    Após a construção bem-sucedida, inicie a aplicação com o seguinte comando:
    ```bash
    ./mvnw spring-boot:run
    ```
    *Ou, alternativamente, `mvn spring-boot:run`.*

A aplicação estará disponível em `http://localhost:8080`.
