const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("email")
const password = document.getElementById("password")
const confirmar_password = document.getElementById("confirmar_password")
const telefono = document.getElementById("telefono")
const FechadeNacimiento = document.getElementById("FechadeNacimiento")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const input = document.getElementById("input")

form.addEventListener("submit", e=>{
    e.preventDefault() 
    let warnings = ""
    let entrar = false
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    

    if(nombre.value.length <3){
        alert =("El Nombre es demasido corto")
        entrar = true

    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br><br>`
        entrar = true
    }

    if(password.value.length < 8){
        alert("La contraseña es demasiado corta")
        entrar = true
        }

    if(entrar)
     parrafo.innerHTML = warnings

     window.location = "Pagina.html"
})

