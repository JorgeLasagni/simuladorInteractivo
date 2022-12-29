//Procedimiento para simulación de Control de Biblioteca
//Genero una plantilla para construir una OBRA en BIBLIOTECA
class obra{
    constructor(apellido, nombre, titulo, panel, subpanel, nivel, id){
        this.apellido  = apellido;
        this.nombre    = nombre;
        this.titulo    = titulo;
        this.panel     = panel;
        this.subpanel  = subpanel;
        this.nivel     = nivel;
        this.id        = id;
    }
}
class kobra{
    constructor(kapellido, knombre, ktitulo, kpanel, ksubpanel, knivel, kid){
        this.kapellido  = kapellido;
        this.knombre    = knombre;
        this.ktitulo    = ktitulo;
        this.kpanel     = kpanel;
        this.ksubpanel  = ksubpanel;
        this.knivel     = knivel;
        this.kid        = kid;
    }
}
const objObra = {
    apellido  : "",
    nombre    : "",
    titulo    : "",
    panel     : "",
    subpanel  : "",
    nivel     : "",
    id        : ""
}
//Defino elarray que va a contener a cada una de las Obras
let biblioteca              = [];
let bibliotecaFiltrada      = [];
let tablaGral               = [];
let bibliotecaLevantada     = [];
//Defino un código de identificación para cada obra ...
//  lo inicializo  y almaceno en cero. Cuando lo necesite, lo recupero, lo incremento y lo vuelvo a guardar.
//  es en la función código y se guarda el último nro utilizado
let ctrlCodigo = 0
if(localStorage.getItem("cargaLote")) {
    //alert("voy a borrar con localStore")
    localStorage.removeItem("cargaLote")
    //alert("Borré con localStore")
}
if(localStorage.getItem("ctrlContadorId")) {
    //alert("voy a borrar con localStore")
    localStorage.removeItem("ctrlContadorId")
    //alert("Borré con localStore")
}
// const listadoObras = "../informacion/biblioteca.json";
// alert(7)
// fetch(listadoObras)
//     .then(respuesta => respuesta.json())
//     .then(biblioteca => {
//         alert(8)
//         mostrarObras(biblioteca)
//         alert("1 largo de biblioteca: "+biblioteca.length)
//         })
//     .catch(error => muestroErrorCarga());
// alert(9)
// alert("2 largo de biblioteca: "+biblioteca.length)
// guardoLote();
// alert(10)
// alert("Guardé lote")

//Variable para control de edición -cuándo tiene que dar un alta, modificar (o eliminar)
let editando    = false;

// Campos del formulario
const formulario    = document.querySelector('#formulario');
const apellidoInput = document.querySelector('#apellido');
const nombreInput   = document.querySelector('#nombre');
const tituloInput   = document.querySelector('#titulo');
const panelInput    = document.querySelector('#panel');
const subpanelInput = document.querySelector('#subpanel');
const nivelInput    = document.querySelector('#nivel');
const btnAgregar    = document.querySelector('btnAgregar');

formulario.addEventListener('submit', validarFormulario)

const listadoObras = "../informacion/biblioteca.json";

fetch(listadoObras)
    .then(respuesta => respuesta.json())
    .then(bibliotecaLevantada => {
        //alert(10)
        guardoLote(bibliotecaLevantada);
        mostrarObras(bibliotecaLevantada)
        //alert("1 largo de biblioteca: "+biblioteca.length)
        biblioteca = bibliotecaLevantada
        ctrlCodigo = Math.max(...biblioteca.map(x=>parseInt(x.id)))
        localStorage.setItem("ctrlContadorId", ctrlCodigo);
        })
    .catch(error => muestroErrorCarga());
//alert("2 largo de biblioteca: "+biblioteca.length)
//guardoLote();

//alert("Guardé lote")

//---------------------------------------------------------------------*
function guardoLote(tablaGral){
    //alert("Estoy en Guardo el lote con LocalStorage")
    //alert("11111 largo de biblioteca: "+tablaGral.length)

    const tablaGralJSON = JSON.stringify(tablaGral);
    localStorage.setItem("cargaLote", tablaGralJSON);
}
//---------------------------------------------------------------------*
function recuperoLote(){
    //alert("estoy en recupero lote con LocalStorage")
    const bibliotecaRecuperada = localStorage.getItem("cargaLote");
    //biblioteca = JSON.parse(bibliotecaRecuperada)
    return JSON.parse(bibliotecaRecuperada)
}
//---------------------------------------------------------------------*
function codigo() {
    if(localStorage.getItem("ctrlContadorId")) {
        const strCtrlCodigo = localStorage.getItem("ctrlContadorId");
        ctrlCodigo = parseInt(strCtrlCodigo); //paso a numerico
    } else {
    ctrlCodigo = 0
    }
    ctrlCodigo++
    localStorage.setItem("ctrlContadorId", ctrlCodigo);
    return (ctrlCodigo)
}
//---------------------------------------------------------------------*
function validarFormulario(e){
    e.preventDefault(); //para que no se ejecute automáticamente
     mensajeError = ""
    if(validoCampos() === false) {
        //Swal.fire(mensajeError)
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: mensajeError,
        })
        return;
    }
    if(editando) {
        editarObra()
        editando = false
    } else {
        biblioteca.unshift(new obra(apellidoInput.value, nombreInput.value, tituloInput.value, panelInput.value, subpanelInput.value, nivelInput.value, codigo()));
        guardoLote(biblioteca)
        mostrarObras(biblioteca);
        formulario.reset();
    }
}
//---------------------------------------------------------------------*
function validoCampos() {
    if (apellidoInput.value === "" || nombreInput.value === "" || tituloInput.value === "") {
        mensajeError = "Debe completar los campos Apellido - Nombre - Título"
        return false
    }
    if (panelInput.value !== "IZQ" && panelInput.value !== "DER") {
        mensajeError = "Panel debe ser IZQ o DER"
        return false
    }
    if (subpanelInput.value !== "IZQ" && subpanelInput.value !== "DER") {
        mensajeError = "SubPanel debe ser IZQ o DER"
        return false
    }
    if (nivelInput.value < 1 || nivelInput.value > 6) {
        mensajeError = "Nivel debe ser 1, 2, 3, 4, 5 o 6"
        return false
    }
}
//---------------------------------------------------------------------*
function editarObra() {
    const index = biblioteca.findIndex(obra => obra.id === objObra.id);
    biblioteca.splice(index,1);
    biblioteca.unshift(new obra(apellidoInput.value, nombreInput.value, tituloInput.value, panelInput.value, subpanelInput.value, nivelInput.value, objObra.id));
    
    guardoLote(biblioteca)
    mostrarObras(biblioteca);
    formulario.reset();
    document.getElementById("fApellido").value  = '';
    document.getElementById("fTitulo").value    = '';
    formulario.querySelector('button[type="submit"]').textContent = 'Agregar'
    editando = false;
}
//---------------------------------------------------------------------*
function mostrarObras(tablaGral){
    document.getElementById("tab").innerHTML="";
    tablaGral.forEach(obra => {
        const {apellido, nombre, titulo, panel, subpanel, nivel, id} = obra;
        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
        `<tr class="table-primary table-responsive">
                <th> ${id} </th>
                <td> ${apellido+", "+nombre} </td>
                <td> ${titulo} </td>
                <td> ${panel}</td>
                <td> ${subpanel} </td>
                <td> ${nivel} </td>
                <td> <button  class= "btn btn-editar   btn-success colorBoton" onclick="cargarObra(${id})"   >Editar</button>      </td>
                <td> <button  class= "btn btn-eliminar btn-danger"             onclick="eliminarObra(${id})" >Eliminar</button>    </td>
            </tr>`;
    })
}
//---------------------------------------------------------------------*
function cargarObra(kid) {
    const index = biblioteca.findIndex(obra => obra.id === kid);
    const obra = biblioteca[index];
    const {apellido, nombre, titulo, panel, subpanel, nivel, id} = obra;
    apellidoInput.value = apellido;
    nombreInput.value   = nombre;
    tituloInput.value   = titulo;
    panelInput.value    = panel;
    subpanelInput.value = subpanel;
    nivelInput.value    = nivel;
    objObra.id          = id;
    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    editando = true;
    document.getElementById("apellido").focus();
}
//---------------------------------------------------------------------*
function eliminarObra(id) {
    const index = biblioteca.findIndex(obra => obra.id === id);
    const obra = biblioteca[index];
    const {apellido, nombre, titulo, panel, subpanel, nivel, kid} = obra;
    //biblioteca.splice(index,1);
    //guardoLote()
    //mostrarObras(biblioteca);
    Swal.fire({
        title: 'Está seguro de eliminar la siguiente OBRA?',
        text: "(" + id +") " + apellido + ", " + nombre + " - " + titulo,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Eliminarla!'
    }).then((result) => {
        if (result.isConfirmed) {
            biblioteca.splice(index,1);
        Swal.fire(
            "(" + id +") "+ apellido + ", " + nombre + " - " + titulo,
            'Eliminada!',
            'La Obra seleccionada ha sido eliminada.',
            'success'
        )
        document.getElementById("fApellido").value  = '';
        document.getElementById("fTitulo").value    = '';    
        guardoLote(biblioteca);
        mostrarObras(biblioteca);
        }
    })
}
//*--------------------------------------------------------------------*
function muestroErrorCarga () {
    Swal.fire({
        icon: 'error',
        title: 'Error Desconocido ...',
        text: "No se pudo leer el archivo de Biblioteca JSON",
    })
}

//*--------------------------------------------------------------------*
function ordenObra(ordenamiento,campo){  
    if (ordenamiento === "dmaM") {
        salMas    =  1
        salMenos  = -1
    }else {
        salMas    = -1
        salMenos  =  1
    }
    biblioteca.sort(function (a ,b)  {
        if (campo === "codigo") {
            if (a.id > b.id) {
                return salMas;
            }
            if (a.id < b.id) {
                return salMenos;
            }
            // a = b
            return 0;
        } else {
            if (campo === "autor") {
                if (a.apellido+a.nombre > b.apellido+b.nombre) {
                    return salMas;
                }
                if (a.apellido+a.nombre < b.apellido+b.nombre) {
                    return salMenos;
                }
                // a = b
                    return 0;
            } else {
                if (campo === "titulo"){
                    if (a.titulo > b.titulo) {
                        return salMas
                    }
                    if (a.titulo < b.titulo) {
                        return salMenos;
                    }
                        // a = b
                        return 0; 
                } else {
                    if (campo === "panel") {
                        if (a.panel > b.panel) {
                            return salMas
                        }
                        if (a.panel < b.panel) {
                            return salMenos;
                        }
                        // a = b
                        return 0;
                    } else {
                        if (campo === "subpanel") {
                            if (a.subpanel > b.subpanel) {
                                return salMas
                            }
                            if (a.subpanel < b.subpanel) {
                                return salMenos;
                            }
                            // a = b
                            return 0;
                    } else {
                        if (campo === "nivel") {
                            if (a.nivel > b.nivel) {
                                return salMas
                            }
                            if (a.nivel < b.nivel) {
                                return salMenos;
                            }
                            // a = b
                            return 0;
                            }
                        }
                    }
                }
            }
        }
    });
    guardoLote(biblioteca);
    mostrarObras(biblioteca);
}
//*--------------------------------------------------------------------*
function seleObra(campo){
    bibliotecaFiltrada = [];
    console.log(biblioteca);
    switch(campo){
        case "autor":
            const apellidoFiltro = document.getElementById("fApellido").value;
            bibliotecaFiltrada = biblioteca.filter(obra => (obra.apellido+obra.nombre).includes(apellidoFiltro) === true);
            break
        case "titulo":
            const tituloFiltro = document.getElementById("fTitulo").value;
            bibliotecaFiltrada = biblioteca.filter(obra => obra.titulo.includes(tituloFiltro) === true);
            break
        case "panel":
            const panelFiltro = document.getElementById("fPanel").value;
            bibliotecaFiltrada = biblioteca.filter(obra => obra.panel.includes(panelFiltro) === true);
            break
        case "subpanel":
            const subPanelFiltro = document.getElementById("fSubPanel").value;
            bibliotecaFiltrada = biblioteca.filter(obra => obra.subpanel.includes(subPanelFiltro) === true);
            break   
            case "nivel":
                const nivelFiltro = document.getElementById("fNivel").value;
                bibliotecaFiltrada = biblioteca.filter(obra => obra.nivel.includes(nivelFiltro) === true);
                break      
    }
    mostrarObras(bibliotecaFiltrada);  
}
// function cargaObrasAnterior() {
//     if(localStorage.getItem("cargaLote")) {
//         biblioteca = recuperoLote()
//     } 
//     if (biblioteca.length === 0) {
//         altaLote()
//         guardoLote(biblioteca)
//     }
//     mostrarObras(biblioteca);
// }
//---------------------------------------------------------------------*
function eliminarFiltros(){

    //document.getElementById("fApellido").placeholder    = "Ingrese letras para filtrar";
    //document.getElementById("fTitulo").placeholder      = "Ingrese letras para filtrar";
   // document.querySelector('.kk').defaultValue
    //document.getElementById("fApellido").placeholder.defaultValue    = "Ingrese letras para filtrar...";

    //document.querySelector('.filtroApellido').value = '';
    //document.querySelector('.filtroTitulo').value = '';

    document.getElementById("fApellido").value  = '';
    document.getElementById("fTitulo").value  = '';

    biblioteca = recuperoLote();
    mostrarObras(biblioteca);
}
//*Fin biblioteca.js***************************************************