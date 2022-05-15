const validar = (esquema) => (req, res, next) => {
    const registro = req.body
    const resultado = esquema.validate(registro)
    if (!resultado.error) {
        return next()
    }
    // TODO Ver como o JOI informa os campos faltantes
    res.status(422).json({
        mensagem: 'Há campos inválidos'
    })
}

module.exports = {
    validar
}