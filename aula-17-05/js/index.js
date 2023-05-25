// let numero = Number(prompt('Digite um número: '));
//primeira forma
// numero = numero + 5;
// numero = numero - 3;

// segunda forma
// console.log(numero+=5);
// console.log(numero-=3);

// terceira forma
// console.log(numero++);
// console.log(numero--);

//primeira forma
// if (numero > 10) {
//     alert('Número inválido');
// } else {
//     alert('Número válido');
// }

//segunda forma
// numero > 10 ? alert('Número inválido') : alert('Número válido');

//terceira forma
// numero > 10 && alert('Número inválido')

//quarta forma
// numero > 10 || alert('Número válido');

//quinta forma
// console.log(null ?? 'Número inválido')

// const usuario = {
//     nome: 'Daniel',
//     local: 'CoderHouse',
//     endereco: {
//         rua: 'a'
//     }
// };

// let { nome: name, local: localization } = usuario;

// console.log(name);
// console.log(localization);

// window.addEventListener('click', ({ x, y }) => {
//     alert(x)
//     alert(y)
// })

// function pegarUsuario({ nome, local, endereco: { rua } }) {
//     console.log(nome)
//     console.log(local)
//     console.log(rua)
// }

// pegarUsuario(usuario)

// let numeros = [0,5,10,15,20,25,30];
// const usuarios = [{
//     nome: 'Daniel',
//     local: 'CoderHouse',
//     endereco: {
//         rua: 'a'
//     }
// }];


// let [ usuario ] = usuarios;

// let { nome } = usuario;

// console.log(nome)

// let numeros = [10,20,30,40,50,60];
// let numeros2 = [70,80,90];
// let mergeArray = [...numeros, ...numeros2];

// let obj = {
//     nome: 'coder',
// }

// let obj2 = {
//     ...obj,
//     curso: 'js'
// }

// console.log(...obj2)

function somar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log(somar(10,25,33,47,150,360))