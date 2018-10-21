/*para usar solicitações via http
 como get e post, é preciso
 importar estar biblioteca*/
var http  = require('http');

/*usamos a variavel http que recebe os metodos
da biblioteca acima e usamos o metodo create
server que criara um servidor, para o servidor funcionar
temos que criar uma resposta por isso utilizamos o res.end*/
var server = http.createServer(function(req,res){
    res.end("<html><body><h1>Violão</h1></body></html>");
});

/**Até aqui temos um servidor quase perfeito,
 só está faltando usarmos o metodo listen,
  pois com este método seremos capazes de "ouvir" por uma porta, isso faz que sejamos especificos onde queremos ver a página funcionando*/
server.listen(4000);
/*Assim como toda linguagem javascript,
 podemos utilizar console.log para
 "imprimir" algo que queremos na tela no caso prompt de comando*/
console.log("Servidor Funcionando");
