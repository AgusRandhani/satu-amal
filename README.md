## Satu Amal Rest API Build with Node.js, Express.js, Sequelize, Sucrase, Swagger, Docker and PostgresSQL

`Satu Amal RESTful API`

![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![NODE](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![EXPRESS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)![GITHUB](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![YARN](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![POSTGRES](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![VSCODE](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Components

- NodeJs
- Insomnia
- Container Docker Postgres
- Postbird
- Swagger

## Dependecies

- Express
- Sequelize
- Nodemon
- Sucrase
- Eslint
- Prettier
- dotEnv
- Cors

## Usage

1. Clone the application

```sh
$ cd satu-amal
$ yarn install
```

Project setup it is necessary to rename `.env.example` for `.env` and make the necessary adjustments to connect your database

2. Create docker container PostgresSQL

```sh
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

3. After configuring and creating the database,execute migrations

```sh
$ yarn sequelize db:migrate
```

4. Seed all necessary data

```sh
$ yarn sequelize db:seed:all
```

5.Use the command below to start the project:

```bash
$ yarn dev
```

6.Run the project and access the documentation at:
http://localhost:3333/api/docs/#
https://ancient-fjord-49278.herokuapp.com/api/docs/#/

#Deployment step
set deployment branch , commit change
yarn build
git push origin master
git push heroku master
