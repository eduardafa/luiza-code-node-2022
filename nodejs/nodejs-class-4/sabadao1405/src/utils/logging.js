class Logging {
    constructor(origem) {
        this.origem = origem
    }
    informar(msg) {
    }
    avisar(msg) {
    }
    informarErro(msg, erro) {
    }
}

class ConsoleLogging extends Logging {
    informar(msg) {
        console.info(new Date(), this.origem, '[INFO]', msg)
    }
    avisar(msg) {
        console.warn(new Date(), this.origem, '[WARN]', msg)
    }
    informarErro(msg, erro) {
        console.error(new Date(), this.origem, '[ERROR]', msg, erro)
    }

}

class GCPLogging extends Logging {

}

class Fachada {
    static iniciar(nomeLog) {
        return new ConsoleLogging(nomeLog)
    }
}

module.exports = Fachada