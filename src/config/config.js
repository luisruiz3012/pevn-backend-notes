require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST || "localhost",
  dbPort: process.env.DB_PORT || "5432",
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
}

module.exports = config;
