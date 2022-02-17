// ### forma padrao sem o consign ###
// const user = require('../api/user')

// module.exports = app => {
//     app.route('/users')
//        .post(user.save)
// }

module.exports = app => {

    app.post('/signin', app.api.auth.signin)
    app.post('/signup', app.api.user.save)
    app.post('/validateToken', app.api.auth.validateToken)

    // crud usuários
    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(app.api.user.save)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(app.api.user.getAllUsers)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.updateUserId)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.user.getById)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .delete(app.api.user.removeById)





    // crud prontuarios
    app.route('/prontuarios')
        .all(app.config.passport.authenticate())
        .post(app.api.form.saveForm)

    app.route('/prontuarios/buscas/:cpf')
        .all(app.config.passport.authenticate())
        .get(app.api.form.getByCpf)

    app.route('/prontuarios/buscas/:cpf')
        .all(app.config.passport.authenticate())
        .put(app.api.form.updataForm)


    app.route('/prontuarios/buscas/:cpf')
        .all(app.config.passport.authenticate())
        .delete(app.api.form.removeByCpf)


    // prontuarios all  test com req fetch
    // app.route('/prontuarios/all')
    //     .get(app.api.form.getAllProntuarios)




}