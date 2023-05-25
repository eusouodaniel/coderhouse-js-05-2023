const numeros = [50,60,70,80,60];
const palavras = ['Coder', 'House', 'js', 'html', 'css'];
const condicoes = [true,false,false,true,true,false];
const mistos = [true, 'house', 80, 'css', false];

const produtos = [{
    id: 1,
    nome: 'Calça',
    preco: 20.00,
    temEstoque: true,
    descricao: 'Calça legal'    
}, {
    id: 2,
    nome: 'Camisa',
    preco: 15.00,
    temEstoque: false,
    descricao: 'Camisa legal'    
}, {
    id: 3,
    nome: 'Sapato',
    preco: 40.00,
    temEstoque: true,
    descricao: 'Sapato bacana'    
}];

produtos.forEach((produto) => {
    if (produto.preco >= 20) {
        console.log(`${produto.nome} | ${produto.preco}`)
    } else {
        console.log(`Produto ${produto.nome} não custa mais que 20 | ${produto.preco}`)
    }
})

for (let index = 0; index < produtos.length; index++) {
    if (produtos[index].preco >= 20) {
        console.log(`${produtos[index].nome} | ${produtos[index].preco}`)
    } else {
        console.log(`Produto ${produtos[index].nome} não custa mais que 20 | ${produtos[index].preco}`)
    }
    alert(produtos[index].nome)
}

for (const produto of produtos) {
    // if (produto.preco >= 20) {
    //     console.log(`${produto.nome} | ${produto.preco}`)
    // } else {
    //     console.log(`Produto ${produto.nome} não custa mais que 20 | ${produto.preco}`)
    // }
}