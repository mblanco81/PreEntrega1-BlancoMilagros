let nombreCliente = "";
let emailCliente = "";
let opcionTurnoSeleccionado = "";
let opcionReparacionSeleccionada = "";

//CONTANTES SERVICIOS/REPARACION

const td = "TREN DELANTERO";
const cctba = "CAMBIO DE CORREA, TENSORES Y BOMBA DE AGUA";
const cb = "CAMBIO DE BUJIAS";
const rba = "REPARACION BURRO DE ARRANQUE";
const cayf = "CAMBIO DE ACEITE Y FILTROS";
const ayb = "ALINEACION Y BALANCEO";
const cn = "CAMBIO DE NEUMATICOS";

//CONSTANTES DIAS
const lunes = "LUNES";
const martes = "MARTES";
const miercoles = "MIERCOLES";
const jueves = "JUEVES";
const viernes = "VIERNES";
const sabado = "SABADO";

//COSNTANTES HORA
const doceymedia = "12:30";
const ochoymedia = "08:30";

function IngresoDatosCliente() {
    nombreCliente = prompt("Ingrese su nombre")
    while (nombreCliente == "")  {
        nombreCliente = prompt("Debe ingresar su nombre")
    }
    emailCliente = prompt("Ingrese su correo")
    while (emailCliente == ""){
        emailCliente = prompt("Debe ingresar su correo")
    }
}

function ValidarSeleccionReparacion() {
    switch (opcionReparacionSeleccionada) {
        case "1":
            opcionReparacionSeleccionada = td;
            break;
        case "2":
            opcionReparacionSeleccionada = cctba;
            break;
        case "3":
            opcionReparacionSeleccionada = cb;
            break;
        case "4":
            opcionReparacionSeleccionada = rba;
            break;    
        case "5":
            opcionReparacionSeleccionada = cayf;
            break;    
        case "4":
            opcionReparacionSeleccionada = ayb;
            break;    
        case "5":
            opcionReparacionSeleccionada = cn;
            break;    
        default:
            console.log("Opción incorrecta. Seleccione una opción correcta")    
            break;
    }    
}

function ValidarSeleccionTurno() {
    switch (opcionTurnoSeleccionado) {
        case "LU1":
            opcionTurnoSeleccionado = lunes + " " + ochoymedia
            break;
        case "LU2":
            opcionTurnoSeleccionado = lunes + " " + doceymedia
            break;
        case "MA1":
            opcionTurnoSeleccionado = martes + " " + ochoymedia
            break;
        case "MA2":
            opcionTurnoSeleccionado = martes + " " + doceymedia
            break;    
        case "MI1":
            opcionTurnoSeleccionado = miercoles + " " + ochoymedia
            break;    
        case "MI2":
            opcionTurnoSeleccionado = miercoles + " " + doceymedia
            break;
        case "JU1":
            opcionTurnoSeleccionado = jueves + " " + ochoymedia
            break;
        case "JU2":
            opcionTurnoSeleccionado = jueves + " " + doceymedia
            break;    
        case "VI1":
            opcionTurnoSeleccionado = viernes + " " + ochoymedia
            break; 
        case "VI2":
            opcionTurnoSeleccionado = viernes + " " + doceymedia
            break;    
        case "SA":
            opcionTurnoSeleccionado = sabado + " " + ochoymedia
            break; 
        default:
            console.log("Opción incorrecta. Seleccione una opción correcta")    
            break;
    }    
}

IngresoDatosCliente()

opcionReparacionSeleccionada= prompt(`
SELECCIONE EL TIPO DE SERVICIO/REPARACION:

1: TREN DELANTERO
2: CAMBIO DE CORREA, TENSORES Y BOMBA DE AGUA
3: CAMBIO DE BUJIAS
4: REPARACION BURRO DE ARRANQUE
5: CAMBIO DE ACEITE Y FILTROS
6: ALINEACION Y BALANCEO
7: CAMBIO DE NEUMATICOS
`)

while (opcionReparacionSeleccionada > 7) {
    ValidarSeleccionReparacion()    
    opcionReparacionSeleccionada = prompt(`
    SELECCIONE UN TIPO DE SERVICIO/REPARACION VALIDO:

    1: TREN DELANTERO
    2: CAMBIO DE CORREA, TENSORES Y BOMBA DE AGUA
    3: CAMBIO DE BUJIAS
    4: REPARACION BURRO DE ARRANQUE
    5: CAMBIO DE ACEITE Y FILTROS
    6: ALINEACION Y BALANCEO
    7: CAMBIO DE NEUMATICOS
    `)
}

ValidarSeleccionReparacion()

opcionTurnoSeleccionado = prompt(`
SELECCIONE UN TURNO:

LU1: LUNES 08:30
LU2: LUNES 12:30
MA1: MARTES 08:30
MA2: MARTES 12:30
MI1: MIERCOLES 08:30
MI2: MIERCOLES 12:30
JU1: JUEVES 08:30
JU2: JUEVES 12:30
VI1: VIERNES 08:30
VI2: VIERNES 12:30
SA: 08:30
`)

while ((opcionTurnoSeleccionado != "LU1") && (opcionTurnoSeleccionado != "LU2") && (opcionTurnoSeleccionado != "MA1") && (opcionTurnoSeleccionado != "MA2") && (opcionTurnoSeleccionado != "MI1") && (opcionTurnoSeleccionado != "MI2") && (opcionTurnoSeleccionado != "JU1") && (opcionTurnoSeleccionado != "JU2") && (opcionTurnoSeleccionado != "VI1") && (opcionTurnoSeleccionado != "VI2") && (opcionTurnoSeleccionado != "SA")) {
    ValidarSeleccionTurno()    
    opcionTurnoSeleccionado = prompt(`
    SELECCIONE UN TURNO CORRECTO:

    LU1: LUNES 08:308
    LU2: LUNES 12:30
    MA1: MARTES 08:30
    MA2: MARTES 12:30
    MI1: MIERCOLES 08:30
    MI2: MIERCOLES 12:30
    JU1: JUEVES 08:30
    JU2: JUEVES 12:30
    VI1: VIERNES 08:30
    VI2: VIERNES 12:30
    SA: 08:30
    `)
}

ValidarSeleccionTurno()

alert(`Sr./Sra. ${nombreCliente} reservó turno 
    para el  (${opcionTurnoSeleccionado}). Tipo de servicio
    reparacion (${opcionReparacionSeleccionada})
    `)
    