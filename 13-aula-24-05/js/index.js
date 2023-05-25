const users = [
  { id: 1, name: 'Warlen', surname: 'Monteiro' },
  { id: 2, name: 'Camilla', surname: 'Coelho' },
  { id: 3, name: 'Cleomar', surname: 'Filho' },
  { id: 4, name: 'Caroline', surname: 'Cassiano' },
  { id: 5, name: 'Luiz', surname: 'Ricardo' },
  { id: 6, name: 'Adrysson', surname: 'Santos' },
  { id: 7, name: 'Daniel', surname: 'Rodrigues' },
];

const searchUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users[4].id <= 5 ? resolve(users) : reject('internal server error')
    }, 4000)
  })
};

function mountUsers(users) {
  console.log(JSON.parse(users))
}

searchUsers().then((res) => {
  mountUsers(res)
}).catch((e) => {
  console.error(`Erro na resolução ${e}`)
}).finally(() => {
  alert('promessa finalizada');
})