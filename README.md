# implementando env

Auth (JWT/Access-token/Refresh-token)

arquivo .env ( guardará informações sensiveis )
- será o segredo para gerar chave JWT do (token)
- conexão com banco de dados

# what i studied
 - estruturar aplicação com express (dependencies)
 - arquivo middlewares. bodyParser e cors
 - consign: gerenciamento das dependencies

# banco de dados postgreSQL (R)
 - Login: psql -U posgres (terminal: manipulando via linha de comando)
 

 - SQL, Construtores de Consultas e ORMs
   o Knex.js:
     - modelar e interagir com seus dados.
     - escreva código JavaScript para manipular e consultar dados

     Knex init
      - cria arquivo p/conexão com banco de dados  ( postgreSQL or Mysql )

   - db.js conexão com 'knex'

   - knex migrate:make create_table_????

   - knex migrate:rollback  ( drop table )

# Funções de validação
   - validation.js

# API de usuário
   - /API

# API de auth
    proteger API a partir de autenticação JWT token
    
    implementar o arquivo  .env ( authSecret: segredo para gerar chave JWT 'token' )
    implementar // //      auth.js (auth user)
    implementar // //      passaport-jwt 
    - todos os serviços depende da autenticação
    - Users ter acesso aos serviços, precisa do token de autenticação

# middleware verificar se user é admin
    - /admin.js
    função simples verificar se user é admin, se for tem acesso aos serviços determinados

# mongoDB
  description:
  - extrair informações do banco relacional e insere no mongoDB

  - Mongoose é uma biblioteca de Modelagem de Dados de Objeto (ODM) para MongoDB e Node. js. Ele gerencia as relações entre dados, fornece validação de esquema e é usado para traduzir entre objetos em código e a representação desses objetos no MongoDB.

  implementação:
  - página inicial  Dashboard 

# validar cadastro de administrador
  - garantir que usuario seja cadastrado como admin apenas em cenários corretos

   fn validation:
        if(!req.originalUrl.startsWith('/users')) user.admin = false 
        if(!req.user || !req.user.admin) user.admin = false 