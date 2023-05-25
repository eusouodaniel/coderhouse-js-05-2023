const usuarios = this.getLS('usuarios');
const emailLogado = this.getLS('emailLogado');
const verificaEmail = this.filterArray(usuarios, emailLogado);

if (verificaEmail === 0) {
  window.location = '/index.html'
}

const nome = this.getLS('nome');
const pessoaLogada = this.getElement('pessoaLogada');
pessoaLogada.innerText = nome;

function filterArray(usuarios, email) {
  return usuarios.filter((usuario) => usuario.email === email) 
}
  
function getLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getElement(id) {
  return document.getElementById(id);
}