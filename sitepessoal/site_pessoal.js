var http = require('http')
var fs = require('fs')
var server = http.createServer(function (request, response) {
  // A constante __dirname retorna o diretório raiz da aplicação.
  fs.readFile(__dirname + '/index.html', 'utf8' ,function (err, html) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(html)
    response.end()
  })
})
server.listen(3000, function () {
  console.log('Executando Site Pessoal')
})
