const btnDelete = document.getElementById("btnDelete");

const DateTime = luxon.DateTime;

const dt = DateTime.local(2022, 1, 25, 12, 10)
console.log(dt)

btnDelete.addEventListener('click', (e) => {
  Swal.fire({
    title: 'Você deseja deletar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Item deletado',
        icon: 'success',
        showConfirmButtonText: false,
        position: 'top-end',
        timer: 2000,
      })
    } else {
      Swal.fire({
        title: 'Item não deletado',
        icon: 'error',
        showConfirmButtonText: false,
        timer: 2000,
      })
    }
  })
});