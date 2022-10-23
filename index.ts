function validacion()
        {    
            let nombre = (document.getElementById("nombre") as  HTMLInputElement).value ;
            let nombre2 = document.getElementById ("nombre") as  HTMLInputElement ; //type assertion
            let  apellido = (document.getElementById("apellido") as HTMLInputElement).value;
            let apellido2  = document.getElementById ("apellido") as  HTMLInputElement ;
            let telefono   = (document.getElementById("telefono") as  HTMLInputElement).value;
            let telefono2  = document.getElementById ("telefono") as  HTMLInputElement ;
            let email = (document.getElementById("email") as  HTMLInputElement).value;
            let email2 =document.getElementById ("email") as  HTMLInputElement ;
            let comentarios=(document.getElementById("comentarios") as  HTMLInputElement).value;
            let comentarios2 = document.getElementById ("comentarios") as  HTMLTextAreaElement;
            let checkboxs  = document.getElementById("clasesVirtuales") as HTMLInputElement | null; 
            let checkboxs2  = document.getElementById("clasesPresenciales") as HTMLInputElement | null; 
            let checkboxs3 = document.getElementById("torneos") as HTMLInputElement | null; 
            let mensaje = document.getElementById('mensaje') as HTMLLabelElement ;
            let mensaje2  = document.getElementById('mensaje2') as HTMLLabelElement; 
            let mensaje3 = document.getElementById ('mensaje3') as HTMLLabelElement; 
            let mensaje4 = document.getElementById ('mensaje4') as HTMLLabelElement; 
            let mensaje5 = document.getElementById ('mensaje5') as HTMLLabelElement ; 
            let mensaje6= document.getElementById ('mensaje6') as  HTMLLabelElement  ; 
            let mensaje10 = document.getElementById ('mensaje10') as HTMLLabelElement; 
            let check: boolean;
if (checkboxs?.checked ==true || checkboxs2?.checked==true || checkboxs3?.checked==true)
{
            check=true;

            mensaje6.style.display = 'none';

}

else {
            mensaje6.innerHTML = "Elija al menos una opción";
            check=false;
}





if (comentarios == "" || comentarios.length < 30 )
            {
                mensaje5.innerHTML = "Ingrese un mensaje de al menos 30 caracteres";
                comentarios2.style.background = '#EFDECD'; //animación//
                check=false;
}
                     
else {  mensaje5.style.display = 'none';
comentarios2.style.background = 'none';}



            if ( isNaN (parseInt(telefono) ))

            {
               
                mensaje3.innerHTML = "Tu telefono debe tener numeros!";
                telefono2.style.background = '#EFDECD'; //animación//
               
               mensaje10.style.display = 'none';
                check=false;
            }  

            else {  mensaje3.style.display = 'none';
            telefono2.style.background = 'none';
            }
            

            if ( telefono== null || telefono.length== 0 )

            {
               
                mensaje10.innerHTML = "Completá tu teléfono!";
                check=false;
                telefono2.style.background = '#EFDECD'; //animación//
           
            
            }  

    
        
            else if (! isNaN (parseInt(telefono))) {  
                mensaje10.style.display = 'none';
                telefono2.style.background = 'none';
                
              
        }
      

        
         


            if( nombre == null || nombre.length == 0)
            {
               
                mensaje.innerHTML = "Completá tu nombre!";
                check=false;
                nombre2.style.background = '#EFDECD'; //animación//
             
            }

            else {  mensaje.style.display = 'none';
            nombre2.style.background = 'none';}


         
if( apellido == null || apellido.length == 0)
            {
               
                mensaje2.innerHTML = "Completá tu apellido!";
                apellido2.style.background = '#EFDECD'; //animación//
                check=false;
            }          
           
            else {  mensaje2.style.display = 'none';
            apellido2.style.background = 'none';}





           

            
           // {  document.getElementById("mensaje10").style.display = 'none';
            //telefono2.style.background = 'none';}

         








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
else {  mensaje4.style.display = 'none';
email2.style.background = 'none';}






           
            if (check==false) {
                return false;
                
          }
           

            else {
                alert("Gracias por enviar tu formulario!");
                return true;
               

               
            }
        }
        

