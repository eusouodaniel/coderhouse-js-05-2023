let formCadastro = this.getElement('formCadastro');
let formLogin = this.getElement('formLogin');

formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();

  const usuarios = this.getLS('usuarios');
  const nome = formCadastro.children[0].value;
  const email = formCadastro.children[1].value;
  const verificaEmail = this.filterArray(usuarios, email);

  if (verificaEmail.length == 0) {
    usuarios.push({
      nome,
      email,
    });
  } else {
    this.showMessage('Email já cadastrado!', 'error');
    return;
  }
  
  this.setLS('usuarios', JSON.stringify(usuarios));
  this.showMessage('Cadastro efetuado com sucesso!', 'success');
  formCadastro.reset();
})

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  const usuarios = this.getLS('usuarios');
  const email = formLogin.children[0].value;
  const verificaEmail = this.filterArray(usuarios, email);

  if (verificaEmail.length > 0) {
    Toastify({
      text: "Estamos te redirecionando...",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
    this.setLS('emailLogado', email);
    setTimeout(() => {
      window.location = '/area-logada.html';
    }, 1500);
  } else {
    this.showMessage('Erro no login, tente novamente!');
  }
});


function filterArray(usuarios, email) {
  return usuarios.filter((usuario) => usuario.email === email) 
}

function getLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLS(key,value) {
  return JSON.stringify(localStorage.setItem(key,value));
}

function showMessage(message, iconType) {
  return Swal.fire({
    position: 'top-end',
    icon: iconType,
    title: message,
    showConfirmButton: false,
    timer: 1500
  });
}

function getElement(id) {
  return document.getElementById(id);
}