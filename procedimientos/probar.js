//Procedimiento para simulación de Control de Biblioteca
//Genero una plantilla para construir una OBRA en BIBLIOTECA
class obra{
    constructor(apellido, nombre, titulo, panel, subpanel, nivel, codigo){
        this._apellido  = apellido;
        this._nombre    = nombre;
        this._titulo    = titulo;
        this._panel     = panel;
        this._subpanel  = subpanel;
        this._nivel     = nivel;
        this._codigo    = codigo;
        // let numero = 0
        // this._numero = function(){
        //     numero = biblioteca.length + 1
        //     return numero
        // }
    //     let dni = 0
    // this._dni = function(){
    //     dni = prompt("Ingrese el DNI de:"+this._nombre)
    //     return dni
    // }
    }
}

//Defino elarray que va a contener a cada una de las Obras
let biblioteca = [];
let n = 0


//alert("Estoy en probar.js")
function generoControl(){

    //Inicializo la tabla
    //document.getElementById("tab").innerHTML="";

    //Transformo a numéricos los valores cargados en html
    let proceso=Number(document.getElementById("proceso").value);
    //alert("Valor de s:"+proceso)

    // let v=Number(document.getElementById("capital").value);
    // let i=Number(document.getElementById("interes").value);
    // let p=Number(document.getElementById("plazo").value);
    // let f=Number(document.getElementById("frecuencia").value);

    switch (proceso) {
        case 1:     //altas automática por Lote
            altaLote();
            break;
        case 2:     //alta por obra
            altaObra();
            break;
        case 3:     //baja de una obra
            bajaObra();
            break;
        case 4:     //modificación de una obra
            modiObra();
            break;
        case 5:     //Selecciono alguna/s obra/s
            seleObra();
            break;
        default:
            alert("Debe seleccionar un PROCESO");
            break;
    }   
}
function altaLote(){
    //Borro lo que tiene biblioteca
    //biblioteca = [];
    alert("Longitud en alta lote antes:"+biblioteca.length)
    biblioteca.push(new obra("Linch", "John", "Administración colonial española 1782-1810", "Der", "Der", "1°", "A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bauman", "Zygmunt", "Vida Líquida", "Der", "Izq", "2°", "A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Franklin", "H.Bruce", "Vietnam y las fantasías norteamericanas", "Izq", "Der", "3°", "A"+(biblioteca.length+1)));
    alert("Longitud en alta lote despues:"+biblioteca.length)

    //document.getElementById("tab").innerHTML="";
    cargoTabla()

    // const resultado = biblioteca.find( obra => obra._codigo === 'A2');
    // console.log(resultado)
    // alert(resultado._apellido+"-"+resultado._codigo)

    //const resultado = biblioteca.indexOf( obra => obra._codigo === 'A2');
    //console.log(resultado)

    //alert(resultado._apellido+"-"+resultado._codigo)
    //alert(resultado)
    // const index = biblioteca.findIndex(obra => obra._codigo === "A2");
    // alert(index)
    // biblioteca.splice(index,1)
    // //Inicializo la tabla
    // doc ument.getElementById("tab").innerHTML="";
    // cargoTabla()

    //const resultado = inventario.find( fruta => fruta.nombre === 'cerezas' );
//     const inventario = [
//         {nombre: 'manzanas', cantidad: 2},
//         {nombre: 'bananas', cantidad: 0},
//         {nombre: 'cerezas', cantidad: 5}
//     ];
    
//     const resultado = inventario.find( fruta => fruta.nombre === 'cerezas' );
//  console.log(resultado);
}
//*--------------------------------------------------------------------*
function altaObra(){
    alert("Estoy en ALTA de una Obra");
    const vapellido   = document.getElementById("apellido").value;
    const vnombre     = document.getElementById("nombre").value;
    const vtitulo     = document.getElementById("titulo").value;
    const vpanel      = document.getElementById("panel").value;
    const vsubpanel   = document.getElementById("subpanel").value;
    const vnivel      = document.getElementById("nivel").value;

    alert("En alta obra: "+vapellido+"-"+vnombre+"-"+vtitulo+"-"+vpanel+"-"+vsubpanel+"-"+vnivel)
    
    biblioteca.unshift(new obra(vapellido, vnombre, vtitulo, vpanel, vsubpanel, vnivel, "A"+(biblioteca.length+1)));

    alert("Después de Incorporar al la biblioteca y por entrar a cargotabla En alta obra: "+vapellido+"-"+vnombre+"-"+vtitulo+"-"+vpanel+"-"+vsubpanel+"-"+vnivel)


    cargoTabla()

    alert("después de cargar la tabla En alta obra: "+vapellido+"-"+vnombre+"-"+vtitulo+"-"+vpanel+"-"+vsubpanel+"-"+vnivel)

}
//*--------------------------------------------------------------------*
function bajaObra(){
    alert("Estoy en BAJA de una Obra");
    const mcodigo = prompt("Ingrese el código de IDENTIFICACIÓN de la obra a eliminar:")
    const index = biblioteca.findIndex(kobra => kobra._codigo === mcodigo);
    //alert(index+"<"+mcodigo+">")
    if (index < 0){
        alert("No Existe");
    } else {
        kobra = biblioteca[index]
        alert(kobra._apellido+", "+kobra._nombre+" "+kobra._titulo)

        const confirma = prompt(kobra._apellido+", "+kobra._nombre+" "+kobra._titulo+"¿Confirma la eliminación de esta obra? SI o NO:")
        
        if (confirma === "SI"){
            biblioteca.splice(index,1);
            //Inicializo la tabla
            //document.getElementById("tab").innerHTML="";
            cargoTabla()
            alert("Despues de cargar tabla en baja: "+biblioteca.length)
        }
    }
    // alert(index)
    // biblioteca.splice(index,1)
    // //Inicializo la tabla
    // doc ument.getElementById("tab").innerHTML="";
    // cargoTabla()
    // if (biblioteca.indexOf >= 0){
    //     alert("Existe!")
    // } else {
    //     alert("No Existe")
    // }
    
}
//*--------------------------------------------------------------------*
function modiObra(){
    alert("Estoy en MODIFICACIÓN de una Obra");
}
//*--------------------------------------------------------------------*
function seleObra(){
    alert("Estoy en SELECCIÓN de una o varias Obras");
}
//*--------------------------------------------------------------------*
//*--------------------------------------------------------------------*
function cargoTabla(){

    //alert("Cantidad de elementos de biblioteca en CARGO TABLA:"+biblioteca.length)
    //alert("Cantidad de elementos DE TAB en CARGO TABLA ANTES:"+tab.length)

    document.getElementById("tab").innerHTML="";



    //for (const pn = 0; pn < biblioteca.length; pn++){
    for (n = 0; n < biblioteca.length; n++){    
        const kobra = biblioteca[n]
        //Cargo la fila en la tabla
        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
            `<tr class="table-primary">
                <th scope="row">${kobra._codigo}</th>
                <td> ${kobra._apellido+", "+kobra._nombre} </td>
                <td> ${kobra._titulo} </td>
                <td> ${kobra._panel+"-"+kobra._subpanel+"-"+kobra._nivel} </td>
            </tr>`;
    } 
    //alert("Cantidad de elementos DE TAB en CARGO TABLA DESPUES:"+tab.length) 
}
//*--------------------------------------------------------------------*

/* Ejercicio Pre Entrega .- Banco CoderJaus*/
//Clase Cliente

// class Clientes {
//     constructor(nombre, apellido, dni, saldo) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.dni = dni;
//         this.saldo = saldo;
//     }
// }

// const clienteSamuel = new Clientes("Samuel", "Tocaimaza", 12345678, 1000);
// const clienteJuan = new Clientes("Juan", "Perez", 87654321, 2000);
// const clienteMaria = new Clientes("Maria", "Gomez", 12345678, 3000);
// const clientePedro = new Clientes("Pedro", "Gonzalez", 12345678, 4000);

// const arrayClientes = [];

// arrayClientes.push(clienteSamuel);
// arrayClientes.push(clienteJuan);
// arrayClientes.push(clienteMaria);
// arrayClientes.push(clientePedro);

// console.log(arrayClientes);

// //Función con el menú de opciones:

// function menu() {
//     alert("Bienvenido al Banco CoderJaus");
//     let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de cliente \n 2) Baja de cliente \n 3) Modificación de cliente \n 4) Consulta de cliente \n 5) Salir"));
//     return opcion;
// }

// //Función para dar de alta un cliente:

// function altaCliente() {
//     let nombre = prompt("Ingrese el nombre del cliente: ");
//     let apellido = prompt("Ingrese el apellido del cliente: ");
//     let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
//     let saldo = parseInt(prompt("Ingrese el saldo del cliente: "));
//     let cliente = new Clientes(nombre, apellido, dni, saldo);
//     arrayClientes.push(cliente);
//     console.log(arrayClientes);
// }

// //Función para dar de baja un cliente:

// function bajaCliente() {
//     let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
//     let cliente = arrayClientes.find(cliente => cliente.dni === dni);
//     let indice = arrayClientes.indexOf(cliente);
//     arrayClientes.splice(indice, 1);
//     console.log(arrayClientes);
// }

// //Función para modificar un cliente:

// function modificacionCliente() {
//     let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
//     let cliente = arrayClientes.find(cliente => cliente.dni === dni);
//     let indice = arrayClientes.indexOf(cliente);
//     let nombre = prompt("Ingrese el nombre del cliente: ");
//     let apellido = prompt("Ingrese el apellido del cliente: ");
//     let saldo = parseInt(prompt("Ingrese el saldo del cliente: "));
//     let clienteModificado = new Clientes(nombre, apellido, dni, saldo);
//     arrayClientes.splice(indice, 1, clienteModificado);
//     console.log(arrayClientes);
// }

// //Función para consultar un cliente:

// function consultaCliente() {
//     let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
//     let cliente = arrayClientes.find(cliente => cliente.dni === dni);
//     console.log(cliente);
// }


// //Función para salir del programa:

// function salir() {
//     alert("Gracias por utilizar el Banco CoderJaus");
// }

// //Ejecuto el el programa:

// let opcion = menu();
// switch (opcion) {
//     case 1:
//         altaCliente();
//         break;
//     case 2:
//         bajaCliente();
//         break;
//     case 3:
//         modificacionCliente();
//         break;
//     case 4:
//         consultaCliente();
//         break;
//     case 5:
//         salir();
//         break;
//     default:
//         alert("Opción incorrecta, rata!");
//         break;
// }





