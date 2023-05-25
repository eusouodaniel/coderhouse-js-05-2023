class Produto {
  constructor(nome, descricao, preco) {
    this.nome = nome.toLowerCase();
    this.descricao = descricao.toUpperCase();
    this.preco = parseFloat(preco);
    this.jaVendeu = false;
  }
  calculaPreco() {
    this.preco = this.preco * 1.21;
  }
  vender() {
    this.jaVendeu = true;
  }
}

const produto = new Produto('Arroz', 'Arroz integral', 15.00);