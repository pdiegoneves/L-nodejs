const fs = require('fs')
const leituraAsync = function (arquivo) {
    console.log("Fazendo leitura assíncrona")
    const inicio = new Date().getTime()
    fs.readFile(arquivo, (err) => { console.log(err) })
    const fim = new Date().getTime()
    console.log("Bloqueio assíncrono: " + (fim - inicio) + "ms")
}

module.exports = leituraAsync