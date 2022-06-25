# PEVN backend notes

This project is the backend part for a PEVN (PostgreSQl, Express JS, Vue JS and Node JS) application.

**Dependencies used:**
- Express JS: Used for the server routing and middleware handling.
- ProsteSQL: Open source SQL type database.
- Sequelize: Famous javascript ORM for SQL databases.
- Joi: Validation module based on schemas.
- @hapi/boom: HTTP error handler.


## Installation:

- In order to install the project make sure to clone the github repository on your host computer with the following command:
    ```
    https://github.com/luisruiz3012/pevn-backend-notes.git
    ```

- After that, make sure to cd on the project folder and run npm install or yarn add in order to install the dependencies.


**Requirements:**
- You must have git, nodejs and npm installed on your computer
- (Optional) You should have docker and docker-compose installed on your host machine in order tu use the docker part of the project in order to use the PostgreSQL database or you can use PostgreSQL if you already have it on your local machine.


## After installation:

- After installing the project dependencies, you should update the docker-compose and create a .env file based on the .env.example file included on this project, in order to do that open the project folder on your text editor of choice and open the docker-compose.yml file.

- Once you open the docker-compose.yml file, you must fill the POSTGRES_DB, POSTGRES_USER and POSTGRES_PASSWORD fields with your database name, your postgres username and postgress password (You don't need to have PostgreSQL in order to use it, you can simply add whatever you want on this fields as your logging credentials for PostgreSQL).

- After that, you must open your .env file and fill the fields that are on the .env.example file. You can copy and paste the .env.example fields and paste them on your .env file


## Running the project

Once you clone and configure the project, you can simply run the following command on your terminal/command line:
```
npm run dev
```
