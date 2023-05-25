// for (let x = 1; x <= 9; x++) {
//     for (let y = 1; y <= 9; y++) {
//         console.log(`Tabuada do ${x}: ${x}*${y}`);
//         console.log(x*y);
//     }
// }

// for (let x = 0; x <= 9; x++) {
//     let primeiroValor = parseInt(prompt('Digite o primeiro valor: '));
//     let segundoValor = parseInt(prompt('Digite o segundo valor: '));
//     alert(primeiroValor+segundoValor);
//     let resposta = prompt('Você gostaria de seguir com a execução do script?(s/n)')
//     if (resposta != 's') {
//         break;
//     }
// }

// let resposta = prompt('Deseja iniciar o script?');

// while(resposta != 'n') {
//     let primeiroValor = parseInt(prompt('Digite o primeiro valor: '));
//     let segundoValor = parseInt(prompt('Digite o segundo valor: '));
//     console.log(primeiroValor+segundoValor);
//     resposta = prompt('Você gostaria de seguir com a execução do script?(s/n)')
// }

// let x = 0;
// while (x < 10) {
//     console.log(x);
//     x++;
// }

// do {
//     console.log(x)
//     x+=2;
// } while (resposta != 'n');

let palavra = prompt('Digite uma palavra: ');

switch (palavra) {
    case 'JavaScript':
        alert('Muito legal');
        break;
    case 'HTML':
        alert('Muito legal para criar websites');
        break;
    case 'CSS':
        alert('Muito legal para estilizar websites');
        break;
    default:
        alert('Não encontrei');
}

// if (palavra == 'JavaScript') {
//     alert('Muito legal');
// } else if (palavra == 'HTML') {
//     alert('Muito legal para criar websites');
// } else if (palavra == 'CSS') {
//     alert('Muito legal para estilizar websites');
// }