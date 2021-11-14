require('dotenv').config()
module.exports =
{
  "development": {
    "username": process.env.dbUser,
    "password": process.env.dbPassword,
    "database": process.env.dbName,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.dbUser,
    "password": process.env.dbPassword,
    "database": process.env.dbName,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.dbUser,
    "password": process.env.dbPassword,
    "database": process.env.dbName,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
