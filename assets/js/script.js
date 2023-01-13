function encriptar(){
    passSistema = "13062013"
    msgError = "Error en la contraseña, vuelve a intentar"
    var mensaje = document.getElementById("msg").value;
    var password = document.getElementById("pass").value;
    if(passSistema == password){
      document.getElementById("error").innerHTML="";
    var encryted =btoa(mensaje);
      document.getElementById("demo1").innerHTML= encryted;
      
      
    }else{
  
      //alert("error");
      document.getElementById("error").innerHTML= msgError;
      
    }
  }
  function desencriptar(){
   var mensajeCodigo= document.getElementById("msgCodigo").value;
    var decrypted = atob(mensajeCodigo)
    document.getElementById("demo2").innerHTML = decrypted;
    
  }
  function inicio(){
    passSistema = "13062013"
    msgError = "Error en la contraseña, vuelve a intentar "
    var mensaje = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if(passSistema == password){
      console.log(password)
       alert("Puedes encriptar tu mensaje");
       document.getElementById("button").href="encriptar.html";
    }else{
      console.log(password)
      alert(msgError);
      document.getElementById("button").href="#"
    } 
  } 
  document.getElementById("button").addEventListener("click", guardarNombre)

function guardarNombre(){
  let nombreUsuario= document.getElementById("user").value;
  localStorage.setItem("name", nombreUsuario);
}
  function mostrarNombre() {
      document.getElementById("saludo").innerHTML += localStorage.getItem("name") + "!";
    }
    mostrarNombre()
    function copiarAlPortapapeles(demo1) {
      var aux = document.createElement("input");
      aux.setAttribute("value", document.getElementById("demo1").innerHTML);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
    }