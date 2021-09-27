require("dotenv/config")

module.exports = {
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB,
  host: process.env.HOST_DB,
  dialect: process.env.DIALECT_DB,
  port: process.env.PORT_DB,
}