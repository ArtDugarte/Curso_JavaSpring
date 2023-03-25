$(document).ready(function() {
    //on ready
});

//REGISTRAR USUARIOS
async function registrarUsuarios(){

    let datos = {};

    //Extraemos los datos que colocaron en los campos de la página
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

    //Para ver si colocó la misma contraseña
    let repetirPassword = document.getElementById('txtRepetirPassword').value;

    if (repetirPassword != datos.password){
        alert("Las contraseñas no coinciden")
        return;
    }

    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    //Mensaje de registro de usuario

    alert("¡La cuenta fue creada con  éxito!");
    window.location.href = "login.html"
}

