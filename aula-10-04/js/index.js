let primeiroValor = Number(prompt('Digite o primeiro número: '));
let operador = prompt('Digite o operador(+,-,*,/): ')
let segundoValor = Number(prompt('Digite o segundo número: '));

let verificaoNumerica = primeiroValor && segundoValor;

if (verificaoNumerica && operador == '+') {
  alert(primeiroValor+segundoValor);
} else if (verificaoNumerica && operador == '-') {
  alert(primeiroValor-segundoValor);
} else if (verificaoNumerica && operador == '*') {
  alert(primeiroValor*segundoValor);
} else if (verificaoNumerica && operador == '/') {
  alert(primeiroValor/segundoValor);
} else {
  alert('O operador '+operador+' não é suportado ou você não digitou os valores solicitados.')
}

if (primeiroValor !== segundoValor) {
  alert('Os valores digitados foram diferentes')
} 
