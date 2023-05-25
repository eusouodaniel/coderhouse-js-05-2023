// let formulario = document.getElementById('formulario');

// formulario.children[0].addEventListener('input', () => {
//     console.log(formulario.children[0].value)
// });

// formulario.children[1].addEventListener('input', () => {
//     console.log(formulario.children[1].value)
// })

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const nome = formulario.children[0].value;
//     const sobrenome = formulario.children[1].value;
//     if (nome && sobrenome) {
//         alert(nome);
//         alert(sobrenome);
//     } else {
//         alert('Um ou mais campos não foram preenchidos')
//     }
// })
// function clicou() {
//     alert('clicou no botão')
// }

// botao.onclick = () => { alert('clicou no botão') }
let botoes = document.querySelectorAll('button');
let input = document.getElementById('nome');
for (const botao of botoes) {
    botao.addEventListener('click', () => {
        alert(`Evento click: ${botao.textContent}`)
    })
}
let span = document.getElementById('span');
input.addEventListener('input', (e) => {
    span.innerText = input.value;
})