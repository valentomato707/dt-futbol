function listarUsuarios() {
  fetch('https://66279b8eb625bf088c08fd8e.mockapi.io/api/usuarios')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('¡Oh, no! Parece que ha sucedido un error.')
      }
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
}

listarUsuarios();
