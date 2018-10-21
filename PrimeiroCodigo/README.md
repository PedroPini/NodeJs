# Primeiro Código Node JS

Primeiro Codigo Node Js tem como objetivo ensinar a utilizar o node js, começando com um breve código que nos possibilita criar um servidor,
estabelecer uma conexão através de uma porta e criar uma resposta para que seja visualizada atraves do navegador.

## Getting Started

Como varias outras linguagens precisamos de uma plataforma para executa-las, um exemplo é a linguagem java que para ser executada precisamos de uma plataforma JVM(uma maquina virtual). Já no caso do javascript ele sempre é executado nos navegadores, o node js foi pensado pra ser essa plataforma para o javascript, com o node o javascript pode ser executado fora dos navegadores, com isso temos o poder de construir serviços back-end com javascript.
### Fatos importantes
Node.js não é uma linguagem de programação
Node.js não é um framework Javascript
Node é uma plataforma que envia seu código para ser compilado pela máquina virtual V8. Essa VM é a mesma que o Google utiliza para executar Javascript no browser Chrome

### Prerequisites

Você precisa ter um conhecimento prévio de javascript.


##Explicação do código
para usar solicitações via http
 como get e post, é preciso
 importar estar biblioteca

```
var http  = require('http');
```

usamos a variavel http que recebe os metodos
da biblioteca acima e usamos o metodo create
server que criara um servidor, para o servidor funcionar
temos que criar uma resposta por isso utilizamos o res.end

```
var server = http.createServer(function(req,res){
    res.end("<html><body><h1>Violão</h1></body></html>");
});
```

Até aqui temos um servidor quase perfeito,
 só está faltando usarmos o metodo listen,
  pois com este método seremos capazes de "ouvir" por uma porta, isso faz que sejamos especificos onde queremos ver a página funcionando
  ```
server.listen(4000);
```
Assim como toda linguagem javascript,
 podemos utilizar console.log para
 "imprimir" algo que queremos na tela no caso prompt de comando
 ```
console.log("Servidor Funcionando");
```



## Built With

* [NodeJs](https://nodejs.org/en/) - Plataforma usada
* [GITHUB](https://github.com/) - Versionador
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds




## Authors

* **Pedro Pini** - *Tudo* - [:)](github.com/PedroPini)
