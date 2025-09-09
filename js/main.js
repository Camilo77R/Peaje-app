
import Vehiculo from "./Vehiculo.js";

const miVehiculo = new Vehiculo();


const $txtAutomovil = document.querySelector("#txt-automovil");
const $txtBus = document.querySelector("#txt-bus");
const $txtCamion = document.querySelector("#txt-camion");
const $txtTotal = document.querySelector("#txt-total");


const $btnAbrir = document.querySelector("#btn-abrir");
const $btnACerrar = document.querySelector("#btn-cerrar");

// imagenes
const $imgAutomovil = document.querySelector("#img-automovil");
const $imgBus = document.querySelector("#img-bus");
const $imgCamion = document.querySelector("#img-camion");


let estaAbrierto = false;

function actualizarInterfaz(e){
    e.preventDefault();
    console.log("Se abrio el peaje");
    $txtAutomovil.value = miVehiculo.automovil;
    $txtBus.value = miVehiculo.bus;
    $txtCamion.value = miVehiculo.camion;
    $txtTotal.value = miVehiculo.totalRecaudado();
    estaAbrierto = true;
    abrirElpeaje(estaAbrierto);

}

$btnAbrir.addEventListener("click" ,actualizarInterfaz);



function aumentarCuentaVehiculo(e){
     miVehiculo.agregarAutomovil();
    actualizarInterfaz(e);
}
function aumentarCuentaBus(e){
     miVehiculo.agregarBus();
    actualizarInterfaz(e);
}
function aumentarCuentacamion(e){
     miVehiculo.agregarCamion();
    actualizarInterfaz(e);
}


function abrirElpeaje(estaAbrierto){
    
    if(estaAbrierto){
        $imgAutomovil.addEventListener("click", aumentarCuentaVehiculo);
        $imgBus.addEventListener("click", aumentarCuentaBus);
        $imgCamion.addEventListener("click", aumentarCuentacamion);

    }else{
        console.log("El peaje no esta abierto!!");    
    }
    

}

function cerrarPeaje(e){
    e.preventDefault();
    estaAbrierto = false;
    // si se llamo esta fn es para cerrar el peaje por tanto pues llamo al fn de abrit y le paso el arg pero falso
    abrirElpeaje(estaAbrierto);
    // al yo darle en cerrar no deberia funcionar el click e las imagenes
    if(estaAbrierto !== true){
        alert("Peaje Cerrado!!");
        $imgAutomovil.removeEventListener("click", aumentarCuentaVehiculo);
        $imgBus.removeEventListener("click", aumentarCuentaBus);
        $imgCamion.removeEventListener("click", aumentarCuentacamion);
        borrarValores();
    }
}


$btnACerrar.addEventListener("click",cerrarPeaje);

 function borrarValores(){
     
   miVehiculo.resetearValores();
   $txtAutomovil.value = miVehiculo.automovil;
    $txtBus.value = miVehiculo.bus;
    $txtCamion.value = miVehiculo.camion;
    $txtTotal.value = miVehiculo.totalRecaudado();
    
 }



