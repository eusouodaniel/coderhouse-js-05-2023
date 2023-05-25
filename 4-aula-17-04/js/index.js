// function solicitarNome() {
//     return prompt("Digite o seu nome: ");
// }

// function exibirNome(resultado) {
//     if (resultado) {
//         alert(resultado);
//     } else {
//         alert('Nome vazio e/ou incompleto');
//     }
// }

// let nome = solicitarNome();
// exibirNome(nome);


// let outroNome = solicitarNome();
// exibirNome(outroNome);

// function somar(primeiroNumero, segundoNumero) {
//     return Number(primeiroNumero) + Number(segundoNumero);
// }

// let resultado = somar(3,5);
// console.log(resultado);


// function mostraResultado() {
//     const resultado = 2 + 2;
//     console.log(resultado)
// }
// mostraResultado();
// console.log(resultado)

// let resultado = 0;

// const somar = function (a, b) { resultado = a + b }
// somar(2,3)
// alert(resultado)

// function somar(a,b) {
//     return a + b;
// }

// const somar = function (a, b) { return a + b }

const VALOR_DO_IMPOSTO = 0.21;

const somar = (precoSemImposto,imposto) => precoSemImposto + imposto;
const subtrair = (precoComImposto,desconto) => precoComImposto - desconto;

const icms = precoSemImposto => precoSemImposto * VALOR_DO_IMPOSTO;

let precoProduto = 1000;
let desconto = 100;

let precoFinal = subtrair(somar(precoProduto, icms(precoProduto)), desconto);
console.log(precoFinal)