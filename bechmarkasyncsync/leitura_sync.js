const fs = require('fs')
const leituraSync = function (arquivo) {
    console.log("Fazendo leitura assíncrona")
    const inicio = new Date().getTime()
    fs.readFileSync(arquivo)
    const fim = new Date().getTime()
    console.log("Bloqueio síncrono: " + (fim - inicio) + "ms")
}

module.exports = leituraSync