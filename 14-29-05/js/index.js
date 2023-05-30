const btnBuscaEndereco = document.getElementById('btnBuscaEndereco');
const btnCriaPost = document.getElementById('btnCriaPost');
const btnBuscaDado = document.getElementById('btnBuscaDado');
btnBuscaEndereco.addEventListener('click', () => {
    const cep = document.getElementById('cep').value;
    if (cep) {
        fetch(`https://viacep.com.br/ws/${cep.replaceAll('-', '')}/json`)
            .then((res) => res.json())
            .then((data) => {
                document.getElementById('rua').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            });
    }
});

btnCriaPost.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Sobre a CoderHouse',
            body: 'CoderHouse e JS',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json;charset=UTF-8',
        }
    }).then((res) => res.json())
        .then((data) => {
            console.log(data)
        });
});

btnBuscaDado.addEventListener('click', () => {
    fetch('/js/data.json').then((res) => res.json())
        .then((data) => {
            console.log(data)
        });
});