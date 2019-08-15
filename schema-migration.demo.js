'use strict';

const config = require('./mysql-config');
const mysql = require('mysql-plus');

const pool = mysql.createPool(config);

const {ColTypes} = mysql;

pool.defineTable('user', {
  columns: {
    id: ColTypes.bigint().unsigned().notNull().primaryKey().autoIncrement(),
    name: ColTypes.varchar(255),
  },
});

(async () => {
  try {
    await pool.pquery('CREATE DATABASE IF NOT EXISTS ??', [config.database]);
    await pool.sync();
    const rows = await pool.pquery('SHOW CREATE TABLE `user`');
    console.log('Schema:\n' + rows[0]['Create Table']);
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
})();
