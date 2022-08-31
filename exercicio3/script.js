//A partir da frase a seguir, faça o que se pede
//"Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
//Crie a const para a frase aqui
//Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"."
console.log(frase)
//Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const novaFrase = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja")
console.log(novaFrase)
//Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(`A nova frase inclui \"verde\"? ${novaFrase.includes("verde")}\nA nova frase inclui \"laranja\"? ${novaFrase.includes("laranja")}`)
//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
const finalFrase = "mas não deixe o gato sair"
console.log(novaFrase.replaceAll("mas não deixe o gato sair", finalFrase.toUpperCase()))



