implementações:

Auth (JWT/Access-token/Refresh-token)

arquivo .env 
será o segredo para gerar chave JWT (token)

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