
function logear()
{

    let correo = document.getElementById("correo").value;
    let contra = document.getElementById("clave").value;

    if(correo == "Luis@gmail.com" && contra == "1234"){
        window.location="bienvenida.html";
    }

    else{
        alert("datos incorrectos...");
    }

}