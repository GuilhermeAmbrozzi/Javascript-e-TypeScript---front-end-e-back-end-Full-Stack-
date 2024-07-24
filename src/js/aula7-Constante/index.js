/*
Não podemos criar constantes com palavras reservadas
Constantes precisam ter nomes significativos
Não pode começar o nome de uma constante com um número
Não podem conter espaços ou traços
Não podemos usar caracteres especiais nos nomes das constantes.
Não podemos modificar o valor de uma constante.
NÃO UTILIZE VAR, UTILIZE CONST.
*/
//posso declarar o valor de uma constante para uma outra constante, isso se aplica também as variáveis.
const primeiroNumero = 5;
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

console.log(resultado);
console.log(resultadoDuplicado);

//Para descobrir o tipo de dados colocamos o typeof.

console.log(typeof primeiroNumero);
