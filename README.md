# `mysql-plus` Demo

Demo usage of the [`mysql-plus`](https://github.com/nwoltman/node-mysql-plus) package for Node.js.

## Setup

```sh
git clone https://github.com/nwoltman/node-mysql-plus-demo.git

npm install
# or
yarn install

# If you don't have nodemon installed
npm install -g nodemon
# or
yarn global add nodemon
```

To run the demos, you'll need to configure how `mysql-plus` will connect to a MySQL database.<br>
To do so, you can either set the following environment variables:

```sh
MYSQL_HOST     # default: 'localhost'
MYSQL_USER     # default: 'root'
MYSQL_PASSWORD # default assumes no password
MYSQL_TEST_DB  # default: 'test'
```

Or you can also just change the values in the `mysql-config.js` file.

## Demos

### Schema Migration

Demonstrates how `mysql-plus` can be used to define and instantly migrate database schemas.

To start, run:

```sh
nodemon schema-migration.demo.js
```

Then try changing the `user` table schema defined in `schema-migration.demo.js`,
save the file, and check the console to see the new schema reflected in MySQL
(prints the result of a `SHOW CREATE TABLE` query). See the
[schema documentation](https://github.com/nwoltman/node-mysql-plus#defining-table-schemas)
for info on how to define schemas with `mysql-plus`.

Set the `debug` option to `true` in `mysql-config.js` to see the statements `mysql-plus`
applies to perform the migration.

The default [migration strategy](https://github.com/nwoltman/node-mysql-plus#migration-strategies)
in development mode is [`alter`](https://github.com/nwoltman/node-mysql-plus#alter). The other
strategies are `drop` and `safe`.
