module.exports = app => {

	const { existsOrError, notExistsOrError } = app.api.validation

	const saveForm = async (req, res) => {

		const form = { ...req.body }

		// if (req.params.cpf) { //se o cpf estiver setado
		// 	form.cpf = req.params.cpf
		// }

		try {
			existsOrError(form.namefull, 'Nome completo  não informado')
			existsOrError(form.nameMae, 'Nome da Mãe não informado')
			existsOrError(form.sus, 'Número do SUS não informado')
			existsOrError(form.cpf, 'CPF não informado')
			existsOrError(form.dataNacimento, 'Data de nascimento não informado')
			existsOrError(form.sexo, 'Sexo não informado')
			existsOrError(form.rg, 'RG não informado')
			existsOrError(form.uf, 'UF não informado')
			existsOrError(form.dataEmissao, 'Data de emissão não informado')
			existsOrError(form.endereco, 'Endereço não informado')
			existsOrError(form.bairro, 'Bairro não informado')
			existsOrError(form.cidade, 'Cidade não informado')
			existsOrError(form.cep, 'CEP não informado')
			existsOrError(form.fone, 'Fone não informado')
			existsOrError(form.obs, 'Observação não informado')


			const formCPF = await app.db('prontuarios')
				.where({ cpf: form.cpf}).first()
				notExistsOrError(formCPF, 'Usuário já cadastrado')
				
				const formRG = await app.db('prontuarios')
					.where({ rg: form.rg }).first()
			notExistsOrError(formRG, 'Usuário já cadastrado')

		} catch (msg) {
			return res.status(400).send(msg) // error lado do client
		}


	//Description:  insert do usuário

		app.db('prontuarios')
			.insert(form)
			.then(_ => res.status(204).send())
			.catch(err => res.status(500).send(err))

	}

	//Description: consultar formulário por CPF

	const getByCpf = (req, res) => {
		app.db('prontuarios')
			.where({ cpf: req.params.cpf })
			.select('namefull', 'nameMae', 'sus', 'cpf', 'dataNacimento', 'sexo', 'rg', 'uf', 'dataEmissao', 'endereco', 'bairro', 'cidade', 'cep', 'fone', 'obs')
			.then(data => res.json(data))
			.catch(err => res.status(500).send(err))
	}

	//Description: editar formulário

	const updataForm = (req, res) => {
		const form = { ...req.body }
		app.db('prontuarios') // updataForm
			.update(form)
			.where({ cpf: req.params.cpf })
			.then(_ => res.status(204).send())
			.catch(err => res.status(500).send(err))
	}


	//Description: remover formulário 

	const removeByCpf = (req, res) => {
		app.db('prontuarios')
			.where({ cpf: req.params.cpf })
			.del()
			.then(data => res.json(data))
			.catch(err => res.status(500).send(err))
	}


	//Description:  obter all prontuários

	// const getAllProntuarios = (req, res) => {
	// 	app.db('prontuarios')
	// 		.select('namefull', 'nameMae', 'sus', 'cpf', 'dataNacimento', 'sexo', 'rg', 'uf', 'dataEmissao', 'endereco', 'bairro', 'cidade', 'cep', 'fone', 'obs').first()
	// 		.then(prontuarios => res.json(prontuarios))
	// 		.catch(err => res.status(500).send(err))
	// }





	return { saveForm, updataForm, getByCpf, removeByCpf }

} // chave do module.exports



