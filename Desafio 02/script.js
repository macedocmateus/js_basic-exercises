// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

/* Exercicio 01*/

alert ("hello-world");

/* Exercicio 02*/

let numberOne = 12;
let numberTwo = 4;

alert(numberOne + numberTwo);

/* Exercicio 03*/

let verifyNumber = 3;

if (typeof(verifyNumber) == "number") {
  alert("ele é um numero");
} else {
  alert("não é um numero");
}

/* Exercicio 04*/

let verifyString = "café";

if (typeof(verifyString) == "string") {
  alert("ele é um string");
} else {
  alert("não é um string");
}

/* Exercicio 05*/

let verifyBoolean = false;

if (typeof(verifyBoolean) == "boolean") {
  alert("ele é um boolean");
} else {
  alert("não é um bolean");
}

/* Exercicio 06*/

alert(numberOne - numberTwo);

/* Exercicio 07*/

alert(numberOne * numberTwo);

/* Exercicio 08*/

alert(numberOne / numberTwo);

/* Exercicio 09 e 10 */

let isPar = Number (prompt());

if ( isPar % 2 == 0) {
  alert("É um numero par")
} else {
  alert("É um numero impar")
}

