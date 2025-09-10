export  function verificarAutenticacao(req, res, next) {
  const { tipoUsuario } = req.body;

  if (tipoUsuario === "adm") {
    return next(); 
  }

  return res.status(401).json({
    mensagem: "Funcao nao permitida para esse usuario"
  });
}
