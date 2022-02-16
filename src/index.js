const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/db')

// colocando conexao com banco de dados dentro de APP
app.db = db

consign({ cwd: 'src'})
    .then('./config/middlewares.js')
    .then('./api/validation.js') // API de validações ( tem que ser importada antes das APIs)
    .then('./api')
    .then('./config/routes.js')
    .into(app) // injetar o fluxo API 

app.listen(3000, () => {
    console.log('Backend executando... port 3000')
})