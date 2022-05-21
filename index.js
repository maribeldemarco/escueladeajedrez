function validacion()
        {    

            let nombre = document.getElementById("nombre").value;
            let nombre2 = document.getElementById ("nombre");
            let  apellido = document.getElementById("apellido").value;
            let apellido2 = document.getElementById ("apellido");
            let telefono = document.getElementById ("telefono").value;
            let telefono2 = document.getElementById ("telefono");
            let email = document.getElementById ("email").value;
            let email2 =document.getElementById ("email");
            let comentarios = document.getElementById ("comentarios").value;
            let comentarios2 = document.getElementById ("comentarios");
            let checkboxs = document.getElementById("clasesVirtuales");
            let checkboxs2 = document.getElementById("clasesPresenciales");
            let checkboxs3 = document.getElementById("torneos");
            let mensaje = document.getElementById('mensaje');
            let mensaje2 = document.getElementById('mensaje2');
            let mensaje3 = document.getElementById ('mensaje3');
            let mensaje4 = document.getElementById ('mensaje4');
            let mensaje5 = document.getElementById ('mensaje5');
            let mensaje6 = document.getElementById ('mensaje6');
      

if (checkboxs.checked ==true || checkboxs2.checked==true || checkboxs3.checked==true)
{
            check=true;
}

else {
            mensaje6.innerHTML = "Elija al menos una opción";
            check=false;
}



if (comentarios.value == "" || comentarios.length < 30 )
            {
                mensaje5.innerHTML = "Ingrese un mensaje de al menos 30 caracteres";
                comentarios2.style.background = '#EFDECD'; //animación//
                check=false;
}
                     

            if ( isNaN (telefono) )

            {
               
                mensaje3.innerHTML = "Tu telefono debe tener numeros!";
                telefono2.style.background = '#EFDECD'; //animación//
                check=false;
               
            }  



            if( nombre == null || nombre.length == 0)
            {
               
                mensaje.innerHTML = "Completá tu nombre!";
                check=false;
                nombre2.style.background = '#EFDECD'; //animación//
             
            }

         
if( apellido == null || apellido.length == 0)
            {
               
                mensaje2.innerHTML = "Completá tu apellido!";
                apellido2.style.background = '#EFDECD'; //animación//
                check=false;
            }          
           
             

            if ( telefono== null || telefono.length== 0 )

            {
               
                mensaje3.innerHTML = "Completá tu teléfono!";
                check=false;
                telefono2.style.background = '#EFDECD'; //animación//
            }  


            if ( email== null || email.length== 0 )

            {
               
                mensaje4.innerHTML = "Completá tu email!";
                check=false;
                email2.style.background = '#EFDECD'; //animación//
            }  



            if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(email)))


            {
               
                mensaje4.innerHTML = "Tu email no tiene el formato correcto";
                check=false;
                email2.style.background = '#EFDECD'; //animación//
            }  


           
            if (check==false) {
                return false;
                
          }
           

            else {
                alert("Gracias por enviar tu formulario!");
                return true;

               
            }
        }
        
