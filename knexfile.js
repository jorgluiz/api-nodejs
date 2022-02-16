// Update with your config settings.

// Update with your config settings.
// const {db} = require('./.env')

module.exports = {
    client: 'pg',
    connection: {
      database: 'prontuario',
      user: 'postgres',
      password: '1234567'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/migrations`
    }
}
