const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2019 - idade;

console.log(nome, sobreNome, 'tem ',idade , 'anos, pesa', peso,'kg.');
console.log('tem ', altura, 'de altura e seu IMC é de ', imc.toFixed(2));
console.log(nome, sobreNome, 'nasceu em ',anoNascimento,'\n');

//Para unir variáveis e constantes com strings mais usado hoje é essa forma.

console.log(`${nome} ${sobreNome} tem ${idade}  anos pesa ${peso}kg.`);
console.log(`tem ${altura} de ${altura} e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} ${sobreNome} nasceu em ${anoNascimento}`);