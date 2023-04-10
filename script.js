const users = ["Ana", "Fernando", "Rafael", "Clara", "Maria"];

let indexOf = users.indexOf("Rafael");  // Informar em qual posição se encontra o elemento. OBS.: Se aparecer " -1 " no terminal, significa que o valor NÃO EXISTE.
let join = users.join(", ");  // Juntar os elementos de um ARRAY

users.push("Roger", "Léo");  // Adicionar elementos ao ARRAY 
users.pop();  // Retirar o último elemento do ARRAY
users.shift();  // Retirar o primeiro elemento do ARRAY
users.unshift("Gabriel");  // Adicionar elementos no início do ARRAY
users.sort();  // Organizar os elementos dentro do meu ARRAY em ordem alfabética


console.log(join);