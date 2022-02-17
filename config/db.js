const config = require('../knexfile.js')
const knex = require('knex')(config)  //(config['production']) //(config.production)

// outro método de rodar as migrations
// antes de exportar posso rodar as migrations
// # ressalva  =observação
// esse método de rodar as ( migrations diretamente dentro do código da aplicação ) !!!não é boa prátrica!!!
// PRA UM SISTEMA PEQUENO NÃO TEM PROBLEMA, MAS QUANDO FOR UM SISTEMA GRANDE, NÃO É BOA PRÁTICA, essa chamada para executar as migrations não vou ter controle quando o sistema começar a crescer

knex.migrate.latest([config])

module.exports = knex