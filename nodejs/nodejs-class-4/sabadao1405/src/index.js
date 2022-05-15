const servidorHttp = require('./http/servidor-http')
const app = servidorHttp.iniciarServidorHttp()
servidorHttp.executarServidorHttp(app)