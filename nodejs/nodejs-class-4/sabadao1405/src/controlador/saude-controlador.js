
const ping = (_, resp) => {
    resp.json({pong: true})
}

module.exports = (appExpress) => {
    const caminhoPadraoRota = '/api/saude'

    appExpress.get(`${caminhoPadraoRota}/ping`, ping)
}