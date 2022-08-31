//Observe a string abaixo.

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString)
//A partir dela, execute os passos abaixo:
//Remova o excesso de espaços no final da string;
const minhaStringSemEspaco = minhaString.trim()
console.log(minhaStringSemEspaco)
//exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(`A quantidade de caracteres da string antes era: ${minhaString.length}\nE depois da remoção dos espaços ficou com ${minhaStringSemEspaco.length} caracteres`)
//Substitua os traços `________` por “sticioso”
console.log(minhaStringSemEspaco.replaceAll("________", "sticioso"))
