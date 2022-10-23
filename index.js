function validacion() {
    var nombre = document.getElementById("nombre").value;
    var nombre2 = document.getElementById("nombre"); //type assertion
    var apellido = document.getElementById("apellido").value;
    var apellido2 = document.getElementById("apellido");
    var telefono = document.getElementById("telefono").value;
    var telefono2 = document.getElementById("telefono");
    var email = document.getElementById("email").value;
    var email2 = document.getElementById("email");
    var comentarios = document.getElementById("comentarios").value;
    var comentarios2 = document.getElementById("comentarios");
    var checkboxs = document.getElementById("clasesVirtuales");
    var checkboxs2 = document.getElementById("clasesPresenciales");
    var checkboxs3 = document.getElementById("torneos");
    var mensaje = document.getElementById('mensaje');
    var mensaje2 = document.getElementById('mensaje2');
    var mensaje3 = document.getElementById('mensaje3');
    var mensaje4 = document.getElementById('mensaje4');
    var mensaje5 = document.getElementById('mensaje5');
    var mensaje6 = document.getElementById('mensaje6');
    var mensaje10 = document.getElementById('mensaje10');
    var check;
    if ((checkboxs === null || checkboxs === void 0 ? void 0 : checkboxs.checked) == true || (checkboxs2 === null || checkboxs2 === void 0 ? void 0 : checkboxs2.checked) == true || (checkboxs3 === null || checkboxs3 === void 0 ? void 0 : checkboxs3.checked) == true) {
        check = true;
        mensaje6.style.display = 'none';
    }
    else {
        mensaje6.innerHTML = "Elija al menos una opción";
        check = false;
    }
    if (comentarios == "" || comentarios.length < 30) {
        mensaje5.innerHTML = "Ingrese un mensaje de al menos 30 caracteres";
        comentarios2.style.background = '#EFDECD'; //animación//
        check = false;
    }
    else {
        mensaje5.style.display = 'none';
        comentarios2.style.background = 'none';
    }
    if (isNaN(parseInt(telefono))) {
        mensaje3.innerHTML = "Tu telefono debe tener numeros!";
        telefono2.style.background = '#EFDECD'; //animación//
        mensaje10.style.display = 'none';
        check = false;
    }
    else {
        mensaje3.style.display = 'none';
        telefono2.style.background = 'none';
    }
    if (telefono == null || telefono.length == 0) {
        mensaje10.innerHTML = "Completá tu teléfono!";
        check = false;
        telefono2.style.background = '#EFDECD'; //animación//
    }
    else if (!isNaN(parseInt(telefono))) {
        mensaje10.style.display = 'none';
        telefono2.style.background = 'none';
    }
    if (nombre == null || nombre.length == 0) {
        mensaje.innerHTML = "Completá tu nombre!";
        check = false;
        nombre2.style.background = '#EFDECD'; //animación//
    }
    else {
        mensaje.style.display = 'none';
        nombre2.style.background = 'none';
    }
    if (apellido == null || apellido.length == 0) {
        mensaje2.innerHTML = "Completá tu apellido!";
        apellido2.style.background = '#EFDECD'; //animación//
        check = false;
    }
    else {
        mensaje2.style.display = 'none';
        apellido2.style.background = 'none';
    }
    // {  document.getElementById("mensaje10").style.display = 'none';
    //telefono2.style.background = 'none';}
    if (email == null || email.length == 0) {
        mensaje4.innerHTML = "Completá tu email!";
        check = false;
        email2.style.background = '#EFDECD'; //animación//
    }
    if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(email))) {
        mensaje4.innerHTML = "Tu email no tiene el formato correcto";
        check = false;
        email2.style.background = '#EFDECD'; //animación//
    }
    else {
        mensaje4.style.display = 'none';
        email2.style.background = 'none';
    }
    if (check == false) {
        return false;
    }
    else {
        alert("Gracias por enviar tu formulario!");
        return true;
    }
}
