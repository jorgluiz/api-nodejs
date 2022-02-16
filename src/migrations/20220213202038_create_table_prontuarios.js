
exports.up = function(knex) {
    return knex.schema.createTable('prontuarios', table => {
        table.string('namefull').notNullable() // 'string' tem um tamanho padrao de caracteres(255) / 'name' não nulo
        table.string('nameMae').notNullable()
        table.string('sus').notNullable()
        table.string('cpf').primary().notNullable()
        table.string('dataNacimento').notNullable()
        table.string('sexo').notNullable()
        table.string('rg').notNullable().unique()
        table.string('uf').notNullable()
        table.string('dataEmissao').notNullable()
        table.string('endereco').notNullable()
        table.string('bairro').notNullable()
        table.string('cidade').notNullable()
        table.string('cep').notNullable()
        table.string('fone').notNullable()
        table.string('obs', 10000).notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('prontuarios')
};
