const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
     //  operador destructor
     const {existsOrError, notExistsOrError, equalsOrError } = app.api.validation // funções do arquivo validation.js

    // função criptografar senha   |   criptografar: reproduzir (mensagem) em código não conhecido, tornando-a, desse modo, intencionalmente ininteligível para os que não têm acesso às suas convenções.
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }

        if(req.params.id) { //se o id estiver setado
            user.id = req.params.id
        }
        try{
            existsOrError(user.username, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha nao informada')
            existsOrError(user.confirmPassword, 'Confirmação de senha indálida')
            equalsOrError(user.password, user.confirmPassword, 'Senha não conferem')

            const userFromDB = await app.db('users')
              .where({ email: user.email }).first()
              if(!user.id){
                  notExistsOrError(userFromDB, 'Usuário já cadastrado')
              }
              
        }catch(msg){
            return res.status(400).send(msg) // error lado do client
        }

        user.password = encryptPassword(req.body.password) // criptografando senha do usuário
        delete user.confirmPassword // deletar confirmação da senha, pq não vai ser inserida no bando de dados

        if(user.id){
            app.db('users') // update do usuário
               .update(user)
               .where({ id: user.id })
               .then(_ => res.status(204).send())
               .catch(err => res.status(500).send(err))
        }else{
            app.db('users')
               .insert(user) // insert do usuário
               .then(_ => res.status(204).send())
               .catch(err => res.status(500).send(err))
        }


    }

    const get = (req, res) => { // get para consultar todos os usuários
        app.db('users')
            .select('id', 'username', 'email', 'admin')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }


    const getById = (req, res) => { // get para consultar usuários específicos
        app.db('users')
            .where({ id: req.params.id })
            .select('id', 'username', 'email', 'admin')
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById }

} // chave do module.exports