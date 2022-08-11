const btn = document.getElementById('button');
const puesto = document.getElementById("puesto")
const campoVehiculo = document.getElementById("campoVehiculo")
const discapacidad = document.getElementById("discapacidad")
const campoDis = document.getElementById("campoDis")
const experiencia = document.getElementById("experiencia")
const empresa = document.getElementById("empresa")
const estudios = document.getElementById("estudios")
const campoCarr = document.getElementById("campoCarr")


//event listeners
discapacidad.addEventListener("change", campoDiscapacidad)
puesto.addEventListener("change", campoPuesto)
experiencia.addEventListener("change", campoEmpresa)
estudios.addEventListener("change", campoEstudios)

function campoEstudios(){
    if(estudios.value == "carrera tecnica" || estudios.value == "licenciatura" || estudios.value == "licenciatura trunca"){
        campoCarr.classList.remove("d-none")
    }
}

function campoEmpresa(){
    if(experiencia.value == "si"){
        empresa.classList.remove("d-none")
    }
}

function campoPuesto(){
    if(puesto.value == "ejecutivo de ventas"){
        campoVehiculo.classList.remove("d-none")
    }
}

function campoDiscapacidad(){
    if(discapacidad.value == "si"){
        campoDis.classList.remove("d-none")
    }
}

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   if(!telefono.value || !nombre.value || !edad.value || !correo.value){
    alert("favor de llenar todos los campos")
   }
   else{
    btn.value = 'Sending...';

   const serviceID = 'service_022z3d5';
   const templateID = 'template_r27icbk';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire(
        'Buen trabajo',
        'Hemos recibido tu informacion',
        'Espera nuestra llamada'
      )
      telefono.value = ""
      edad.value = ""
      nombre.value = ""
      correo.value = ""
      discapacidad.value = ""
      discCon.value = ""
      nombreEmpresa.value = ""
      puestoSolicitado = ""
      funciones = ""
      ct.value = ""
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
   }
   
});

console.log("Yair Galicia fimtx www.github.com/galicia0992   www.linkedin.com/in/yair-galicia-7958a91b5/")
