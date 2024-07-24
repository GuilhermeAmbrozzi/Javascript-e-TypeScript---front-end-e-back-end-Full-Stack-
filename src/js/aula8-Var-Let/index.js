/*
  Aqui ele falou por que não devemos mais utilizar a palavra reservada VAR,
  pois com ela eu posso redeclarar uma variável isso é considerado um erro,
  por que você pode acabar redeclarando uma variável importante no seu código
  gerando um erro dentro do seu programa. Por isso foi introduzido a palavra reservada
  LET para substituir o var na formatação dos códigos.  
*/

var nome = 'Guilherme';
var nome = 'Raquel';

let idade = 18;
// let idade = 23;
/*
Esse é o erro que é gerado:

let idade = 23
    ^

SyntaxError: Identifier 'idade' has already been declared */