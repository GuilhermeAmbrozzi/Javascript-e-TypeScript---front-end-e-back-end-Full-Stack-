/*
    ***Aritméticos***

    Como na matemática o JavaScript segue os precedentes.

    * + Adição / Concatenação
    * - Subtração 
    * ** Potenciação
    *  % Resto da divisão
    *  * Multiplicação
    * / Divisão
    * ++ Incremento
    * -- Decremento
    * 
    * Posso também usar operador de -=, +=, *= 
    * isso seria pegar contador += 20; ele pegaria o valor do contador e somaria ao vinte.
*/

let num1 = 7;
let num2 = 2;
let num3 = 10;
let contador = 0;
contador++;
console.log((num1 + num2) * num3,'a');
contador++;
console.log(num1 + (num2 * num3), 'b');
contador++
console.log(num1 + num2 * num3, 'c');
contador++
console.log((num1 / num2) * num3, 'd');
contador++
console.log(num1 + (num2 % num3), 'e');
contador++
console.log(num1 + num2 * num3, 'f');
console.log(`O valor de contador é ${contador}`);
contador--;
contador--;
contador++
contador++
console.log(`Agora o valor do contador é ${contador}`)
contador++
contador++
contador--;
console.log(`Agora o valor do contador é ${contador}`)
contador--;
contador--;
console.log(`Agora o valor do contador é ${contador}`)

contador *= 2;
console.log(`Agora o valor do contador é ${contador}`)
contador /= 2;
console.log(`Agora o valor do contador é ${contador}`)
contador -= 2;
console.log(`Agora o valor do contador é ${contador}`)
contador *= 7;
console.log(`Agora o valor do contador é ${contador}`)
contador %= 4;
console.log(`Agora o valor do contador é ${contador}`)

