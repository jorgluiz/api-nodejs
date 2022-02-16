const { authSecret } = require('../../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    // email  e  senha
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('Informe usário e senha correto')
        }

        // obter usário pelo email
        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if (!user) return res.status(400).send('Usário não encontrado')

        // validação da senha
        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return res.status(401).send('email ou senha inválidos')

        const now = Math.floor(Date.now() / 1000)

        // geração payload =carga útil
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,   // issued at.  data de criação
            exp: now + (60 * 60 * 24 * 3)  //  data de expiração
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToke = async (req, res) => {
        const userData = req.body || null
        try{
            if(userData){
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        }catch(e){
            // problema com o token
        }
        res.send(false)
    } 

    return { signin, validateToke }
}