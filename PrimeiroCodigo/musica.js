
var http  = require('http');
var server = http.createServer(function(req,res){
    res.end("<html><body><h1>Violão</h1></body></html>");
});
server.listen(4000);
console.log("Servidor Funcionando");
