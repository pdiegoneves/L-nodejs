var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  if (request.url == '/artigo') {
    console.log('artigo')
    fs.readFile(__dirname + '/artigos.html', 'utf8', function (err, html) {
      response.end(html)
    })
  } else if (request.url == '/contato') {
    console.log('contato')
    fs.readFile(__dirname + '/contato.html', 'utf8', function (err, html) {
      response.end(html)
    })
  } else {
    console.log('erro')
    fs.readFile(__dirname + '/erro.html', 'utf8', function (err, html) {
      response.end(html)
    })
  }
})

server.listen(3000, function () {
  console.log('Servidor Rodando')
})
