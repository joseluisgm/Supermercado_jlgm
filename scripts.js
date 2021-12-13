
// poner el código para la solución aquí

let cuenta = 0;
let cola = 0;
let libre = true;
let inicio = new Date();
let cajasArray = [
  new caja(libre, cola, inicio),
  new caja(libre, cola, inicio),
  new caja(libre, cola, inicio),
  new caja(libre, cola, inicio),
];

function caja(libre, cola) {
  this.inicio = inicio;
  this.cola = cola;
  this.libre = libre;
}

function cliente(nombre) {
  let nombreClientes = [
    "pepe",
    "manolo",
    "paco",
    "jose",
    "AAAAAA",
    "uwu",
    "no",
    "yo",
    "que",
    "owo",
    "hib",
    "uhr",
    "pujf",
    "ahrg",
    "lol",
    "josen´t",
  ];
  this.nombre = nombreClientes[Math.random() * nombreClientes - 1];
}

function click_cliente(id) {
  if (cajasArray[id].libre) {
    document.getElementById(`${id}${id}${id}`).classList.add("cajaAbierta-img");
    document.getElementById(id).classList.add("cajaAbierta");
    
    cajasArray[id].libre = false;
    cajasArray[id].cola += 1;
    document.getElementById(`${id}${id}`).innerText =
      cajasArray[id].cola;
  } else {
    if (cajasArray[id].cola < 5) {
      cajasArray[id].cola += 1;
      document.getElementById(`${id}${id}`).innerText =
        cajasArray[id].cola;
    }
    if (cajasArray[id].cola == 5) {
      let fin = new Date();
      tiempoTranscurrido = (fin - cajasArray[id].inicio) / 1000;
      alert(
        "5 personas en cola, NO PUEDO MAS ME VOY A AL ALMACEN A LLORAR UN RATO  // " +
          tiempoTranscurrido
      );
      document.getElementById(id).classList.remove("cajaAbierta");
      document.getElementById(`${id}${id}${id}`).classList.remove("cajaAberta-img");
      document.getElementById(id).classList.add("cajaOcupada");
      document.getElementById(`${id}${id}${id}`).classList.add("cajaOcupada-img");
    }
  }
}
document.getElementById("0").oncontextmenu = function (event) {
  event.preventDefault();
  click_quitar_cliente("0");
};
document.getElementById("1").oncontextmenu = function (event) {
  event.preventDefault();
  click_quitar_cliente("1");
};
document.getElementById("2").oncontextmenu = function (event) {
  event.preventDefault();
  click_quitar_cliente("2");
};
document.getElementById("3").oncontextmenu = function (event) {
  event.preventDefault();
  click_quitar_cliente("3");
};

function click_quitar_cliente(id) {
  console.log(cajasArray[id].cola);

  if (cajasArray[id].cola > 0) {
    if (cajasArray[id].cola == 5) {
      document.getElementById(id).classList.remove("cajaOcupada");
      document.getElementById(`${id}${id}${id}`).classList.remove("cajaOcupada-img");
      document.getElementById(id).classList.add("cajaAbierta");
      document.getElementById(`${id}${id}${id}`).classList.add("cajaAbierta-img");
    }
    cajasArray[id].cola -= 1;
    document.getElementById(`${id}${id}`).innerText =
      cajasArray[id].cola;
  }
}
function consolaJefe(event) {
  event.preventDefault();
  let aux1 = document.getElementById("comando").value;
  let aux2 = document.createElement("p");
  aux2.innerText = aux1;
  document.getElementById("comandos").appendChild(aux2);
  console.log(aux1.charAt(7));
  let aux = aux1.charAt(6);
  let auxID = parseInt(aux1.charAt(4)) - 1;
  let auxN = parseInt(aux1.charAt(7));

  console.log(auxID);
  if ("+" == aux) {
    for (let index = 0; index < auxN; index++) {
      click_cliente(auxID);
    }
  } else {
    for (let index = 0; index < auxN; index++) {
      click_quitar_cliente(auxID);
    }
  }
}

function guardarPrograma() {
  localStorage.setItem("cajas", JSON.stringify(cajasArray));
}
function cargarProgama() {
  if(localStorage.getItem("diaNoche")==null){
    localStorage.setItem("diaNoche", "true");
    document.getElementById("fondoTodo").classList.add("fondoDeTodo");
  }
  if(localStorage.getItem("diaNoche")=="true"){
    localStorage.setItem("diaNoche", "false");
  document.getElementById("fondoTodo").classList.add("fondoDeTodo2");
  }else{
    localStorage.setItem("diaNoche", "true");
    document.getElementById("fondoTodo").classList.add("fondoDeTodo");
  }
  cajasArray = JSON.parse(localStorage.getItem("cajas"));
  console.log(cajasArray);

  for (let id = 0; id < cajasArray.length; id++) {
    if (!cajasArray[id].libre) {
      if(cajasArray[id].cola==5){
        document.getElementById(id).classList.add("cajaOcupada");
      }else{
        document.getElementById(id).classList.add("cajaAbierta");
      }         
      document.getElementById(`${id}${id}`).innerText =cajasArray[id].cola;
      if(cajasArray[id].cola==5){
        document.getElementById(`${id}${id}${id}`).classList.add("cajaOcupada-img");
      }else{
        document.getElementById(`${id}${id}${id}`).classList.add("cajaAbierta-img");
      }
     
    
    
    }
  }
}
function diaNoche(){
  if(localStorage.getItem("diaNoche")==null){
   
    localStorage.setItem("diaNoche", "true");
    document.getElementById("fondoTodo").classList.add("fondoDeTodo");
  }
  if(localStorage.getItem("diaNoche")=="true"){
   
    localStorage.setItem("diaNoche", "false");
    document.getElementById("fondoTodo").classList.remove("fondoDeTodo");
  document.getElementById("fondoTodo").classList.add("fondoDeTodo2");
  }else{
    
    localStorage.setItem("diaNoche", "true");
    document.getElementById("fondoTodo").classList.remove("fondoDeTodo2");
    document.getElementById("fondoTodo").classList.add("fondoDeTodo");
  }
  

}

