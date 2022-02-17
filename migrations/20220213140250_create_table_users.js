
exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
            table.increments('id').primary()  //campo auto_increment  primary key
            table.string('username').notNull() // 'string' character varying(255) / 'name' não nulo
            table.string('email').unique().notNull()
            table.string('password', 1000).notNull()
            table.boolean('admin').defaultTo(false).notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
