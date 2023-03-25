$(document).ready(function() {
    cargarUsuarios();
  $('#usuarios').DataTable();

  actualizarEmailDelUsusario();
});

function actualizarEmailDelUsusario(){

    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}

//CARGAR USUARIOS
async function cargarUsuarios(){
    const request = await fetch('api/usuarios', {
        method: 'GET',
        headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json',
                         'Authorization': localStorage.token
                     }
    });

    const usuarios = await request.json();
    let listadoHtml = "";

    for(let usuario of usuarios){

        let botonEliminar = '<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';

        //Si el tlf es nulo
        let telefonoTexto = usuario.telefono == null ? '-' : usuario.telefono

        let usuarioHtml = '<tr><td>'+ usuario.id +'</td><td>'+ usuario.nombre +' '
        + usuario.apellido +'</td><td>'+ usuario.email +'</td><td>'
        + telefonoTexto +'</td><td>'+ botonEliminar +'</td></tr>';

        listadoHtml += usuarioHtml;
    }

    document.querySelector("#usuarios tbody").outerHTML = listadoHtml;
}

// ELIMINAR USUARIO
async function eliminarUsuario(id){

    if(!confirm("¿Desea eliminar este usuario?")){
        return;
    }

    const request = await fetch('api/usuarios/' + id, {
        method: 'DELETE',
        headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json',
                         'Authorization': localStorage.token
                     }
    });

    location.reload()
}