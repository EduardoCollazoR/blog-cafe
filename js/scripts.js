// query selector
const heading = document.querySelector(".header__texto h2"); //retorno 0 o 1 elemento
// heading.textContent = "nuevo heading";

//query selector all

const enlaces = document.querySelectorAll(".navegacion a");
// console.log(enlaces[0]);

// enlaces[0].textContent = "nuevo";

// Generar nuevo enlace
// etiquetas en mayus
const nuevoEnlace = document.createElement("A");

//agregar el href
nuevoEnlace.href = "nuevo-enlace.html";
//agregar el texto
nuevoEnlace.textContent = "nuevo enlace";
//agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");
// console.log(nuevoEnlace);

//agregarlo al documento
// const nav = document.querySelector(".navegacion");
// nav.appendChild(nuevoEnlace);

//eventos
// console.log(1);

// window.addEventListener("load", function () {
// load espera a que el JS y los archivos dependen del HTML esten listos
//   console.log(2);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   console.log(4); // solo espera por el HTML pero no espera CCS o imagenes
// });

// console.log(5);

// function Imprimir{
//     console.log(2);
// }

// window.onscroll = function () {
//   console.log("scrolling..");
// };

// seleccionar elemnetos y asociarles un evento
// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function (e) {
//   console.log(e);
//   e.preventDefault();
//  validar formulario preventDefault
//   console.log("enviar");
// });

//eventos de inputs y textarea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const formulario = document.querySelector(".formulario");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

// nombre.addEventListener("input", leerTexto);
// email.addEventListener("input", leerTexto);
// mensaje.addEventListener("input", leerTexto);

//El evento  de submit
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  //validar formulario
  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", "error");
    return; // corta la ejecucion del codigo
  }

  //crear la alerta de enviar formulario
  mostrarAlerta("Mensaje enviado correctamente");
  LimpiarFormulario();
});

function leerTexto(e) {
  //   console.log(e.target.value);
  datos[e.target.id] = e.target.value;
  //   console.log(datos);
}

//Mostrar alerta compacta
function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }
  formulario.appendChild(alerta);
  // desaparecer despues de 5 segundos

  setTimeout(() => {
    alerta.remove();
  }, 5000);
}

function LimpiarFormulario() {
  nombre.value = "";
  email.value = "";
  mensaje.value = "";
}
