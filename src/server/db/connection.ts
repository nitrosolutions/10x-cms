const knex = require("knex");
const config = require("./knexfile");

const environment = process.env.NODE_ENV || "development";
const connectionConfig = config[environment];

// @ts-ignore block-scoped variable 'db'.
const db = knex(connectionConfig);

module.exports = db;
