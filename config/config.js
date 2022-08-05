module.exports = {
  /* development: {
    username: "root",
    password: null,
    database: "otomoto",
    host: "127.0.0.1",
    dialect: "mysql",
  }, */
  development: {
    dialect: "sqlite",
    storage: "../database/db.sqlite",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
