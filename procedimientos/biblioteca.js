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
    }
}
//Defino elarray que va a contener a cada una de las Obras
let biblioteca = [];

function generoControl(){
    //Transformo a numéricos los valores cargados en html
    let proceso=Number(document.getElementById("proceso").value);
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
        case 6:     //Ordenar segun ...,
            ordenObra();
            break;
        default:
            alert("Debe seleccionar un PROCESO");
            break;
    }   
}
function altaLote(){
    // borro todo lo que cargué
    //biblioteca = [];
    biblioteca.push(new obra("Linch", "John", "Administración colonial española 1782-1810", "Der", "Der", "1°", "A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bauman", "Zygmunt", "Vida Líquida", "Der", "Izq", "2°", "A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Franklin", "H.Bruce", "Vietnam y las fantasías norteamericanas", "Izq", "Der", "3°", "A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Hernandez", "José", "Marín Fierro", "Izq", "Der", "4°", "A"+(biblioteca.length+1)));
    cargoTabla()
}
//*--------------------------------------------------------------------*
function altaObra(){
    const vapellido   = document.getElementById("apellido").value;
    const vnombre     = document.getElementById("nombre").value;
    const vtitulo     = document.getElementById("titulo").value;
    const vpanel      = document.getElementById("panel").value;
    const vsubpanel   = document.getElementById("subpanel").value;
    const vnivel      = document.getElementById("nivel").value;
    biblioteca.unshift(new obra(vapellido, vnombre, vtitulo, vpanel, vsubpanel, vnivel, "A"+(biblioteca.length+1)));
    cargoTabla()
}
//*--------------------------------------------------------------------*
function bajaObra(){
    alert("Estoy en BAJA de una Obra");
    const mcodigo = prompt("Ingrese el código de IDENTIFICACIÓN de la obra a eliminar:")
    const index = biblioteca.findIndex(kobra => kobra._codigo === mcodigo);

    if (index < 0){
        alert("Atención! el código de Obra:<" +mcodigo+ +"> No Existe!");
    } else {
        kobra = biblioteca[index]
        alert(kobra._apellido+", "+kobra._nombre+" "+kobra._titulo)
        const confirma = prompt(kobra._apellido+", "+kobra._nombre+" "+kobra._titulo+"¿Confirma la eliminación de esta obra? SI o NO:")      
        if (confirma === "SI"){
            biblioteca.splice(index,1);
            cargoTabla()
        }
    }
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
function cargoTabla(){
    document.getElementById("tab").innerHTML="";
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
}
//*Fin de biblioteca.js------------------------------------------------*