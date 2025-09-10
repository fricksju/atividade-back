let listaDosUsuarios = []
let idUsuario = 1

export const listarUsuarios = (req, res) => {   
    res.json(listaDosUsuarios)
}

export const criarUsuario = (req, res) => {
    const { nome, email } = req.body
    const novoUsuario = { id: idUsuario++, nome, email }
    listaDosUsuarios.push(novoUsuario)
    res.status(201).json(novoUsuario)
}