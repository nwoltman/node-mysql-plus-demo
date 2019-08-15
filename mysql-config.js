'use strict';

module.exports = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.MYSQL_TEST_DB || 'test',
  plusOptions: {
    debug: false,
  },
};
