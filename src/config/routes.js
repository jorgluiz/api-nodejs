// ### forma padrao sem o consign ###
// const user = require('../api/user')

// module.exports = app => {
//     app.route('/users')
//        .post(user.save)
// }

module.exports = app => {

    // crud usuários
    app.route('/users')
        .post(app.api.user.save)

    app.route('/users')
        .get(app.api.user.getAllUsers)

    app.route('/users/:id')
        .put(app.api.user.updateUserId)

    app.route('/users/:id')
        .get(app.api.user.getById)

    app.route('/users/:id')
        .delete(app.api.user.removeById)


        


    // crud prontuarios
    app.route('/prontuarios')
        .post(app.api.form.saveForm)

    app.route('/prontuarios/buscas/:cpf')
        .get(app.api.form.getByCpf)

    app.route('/prontuarios/buscas/:cpf')
        .put(app.api.form.updataForm)


    app.route('/prontuarios/buscas/:cpf')
        .delete(app.api.form.removeByCpf)


    // prontuarios all  test com req fetch
    // app.route('/prontuarios/all')
    //     .get(app.api.form.getAllProntuarios)




}