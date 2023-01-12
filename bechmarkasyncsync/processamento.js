const http = require('http')
const fs = require('fs')
const leituraAsync = require('./leitura_async')
const leituraSync = require('./leitura_sync')
const arquivo = './node.zip'
let stream = fs.createWriteStream(arquivo)
// let download = 'http://nodejs.org/dist/v18.13.0/node-v18.13.0-win-x64.zip'
// http.get(download, function (res) {
//   console.log('Fazendo o download do Node.js')
//   res.on('data', (data) => {stream.write(data)})
//   res.on('end', () => {
//     stream.end()
//     console.log('Download Finalizado')
//     leituraAsync(arquivo)
//     leituraSync(arquivo)
//   })
// })
    leituraSync(arquivo)
    leituraAsync(arquivo)
