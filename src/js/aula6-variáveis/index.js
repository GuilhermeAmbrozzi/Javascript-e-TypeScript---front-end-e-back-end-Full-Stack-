/*
O Js é camelCase se atente a isso.

Não podemos criar variáveis com palavras reservadas
Variáveis precisam ter nomes significativos
Não pode começar o nome de uma variável com um número
Não podem conter espaços ou traços
Não podemos usar caracteres especiais nos nomes de variáveis.
NÃO UTILIZE VAR, UTILIZE LET NA DECLARAÇÃO DE VARIÁVEIS QUE PODEM VARIAR OS VALORES.
*/

let nome = "Guilherme";

console.log(nome, " nasceu em 1984.");
console.log("Em 2000",nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012.");
console.log("O filho de", nome, "se chama Eduardo.\n");

// Posso alterar o valor dessa variável dendo um novo valor a uma variável já definida.
nome = 'João'
console.log(nome, " nasceu em 1984.");
console.log("Em 2000",nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012.");
console.log("O filho de", nome, "se chama Eduardo.");

// Entenda você pode mudar o valor da variável, só que eu não posso declarar novamente a mesma variável.
//  ao executar o código o motor do Js vai retornar um erro.
/*
let nome = "Raquel";
    ^

SyntaxError: Identifier 'nome' has already been declared
*/
