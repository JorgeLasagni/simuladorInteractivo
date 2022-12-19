// //Procedimiento para simulación de PRESTAMOS Sistema Alemán o Francés
//Versión Segunda PreEntrega
class cuota{
    constructor(numero, capital, cuotaCapital, cuotaInteres, cuotaTotal, capitalVivo){
        this._numero        = numero;
        this._capital       = capital;
        this._cuotaCapital  = cuotaCapital;
        this._cuotaInteres  = cuotaInteres;
        this._cuotaTotal    = cuotaTotal;
        this._capitalVivo   = capitalVivo;
    }
}
//Defino elarray que va a contener a cada una de las Obras
let planPago = [];

const butn = document.getElementById("btn")
butn.addEventListener("click", generoCuotas)
//---------------------------------------------------------------------*
function generoCuotas(){
    planPago = [];
    //Inicializo la tabla
    document.getElementById("tab").innerHTML="";

    //Transformo a numéricos los valores cargados en html
    let s=Number(document.getElementById("sistema").value);
    let v=Number(document.getElementById("capital").value);
    let i=Number(document.getElementById("interes").value);
    let p=Number(document.getElementById("plazo").value);
    let f=Number(document.getElementById("frecuencia").value);
    //-----------------------------------------------------------------*
    //Validación de la carga...
    //funcion "valido" para control de la carga
    //s:sistema v:capital i:interés p:plazo f:frecuencia
    mensaje = valido(s,v,i,p,f)
    if (mensaje != ""){
        return  Swal.fire(mensaje);
    }
    //-----------------------------------------------------------------*
    //Sumarizadores para mostrar los Totales
    let cct = 0.00;     //cc Total cuota capital
    let cit = 0.00;     //ci Total cuota interés
    let ctt = 0.00;     //ct Total cuota total 
    //-----------------------------------------------------------------*
    //Valores intermedios necesarios para los cálculos
    let cpa   = 12 / f;    //cantidad de pagos por año
    let ieq   = i / cpa;   //interés equivalente por período de pago
    let m     = p * cpa;   //Cantidad de pagos en el plazo anual
    let ca    = v;         //Capital Vivo!!
    let cv    = v;         //Capital Vivo!!
    //-----------------------------------------------------------------*
    //chequeo el interés para saber qué metodo aplicar para la potencia
    let queInteres = 0;
    if(i > 0 && i <= 25){
        queInteres = 1;
    } else if(i > 25 && i <= 50){
        queInteres = 2;
    } else {
        queInteres = 3;
    }
    //------------------------------------------------------------------
    for(n = fDesde(s); n <= m; n++){
        switch(s){
            case 1:
                //Capital
                ca = v - (n-1) * v / m;               
                //Cuota Capital
                cc = v / m;
                //Cuota Interés (amortización)
                ci = ca * ieq / 100;
                //Cuota Total
                ct = cc + ci;
                cv = cv - cc;
                break;
            case 2:
                if (n > 0){
                    //Cuota Total
                    pot = potencia((1+(ieq/100)),-m,queInteres);
                    ct  = (v * (ieq/100)) / (1 - pot);
                    //Cuota Interés (amortización)
                    //ci = ca * ieq / 100; orig
                    ci = cv * ieq / 100;
                    //Cuota Capital
                    cc = ct - ci;
                    //Capital
                    //ca = ca - cc; orig
                    ca = cv;
                    cv = cv - cc;
                } else{
                    //Cuota Total
                    //a  = 0;
                    ct = 0;
                    //Cuota Interés (amortización)
                    ci = 0;
                    //Cuota Capital
                    cc = 0;
                    //Capital
                    ca = v;
                    cv = v;
                }
                break;
            case 3:
                //Capital
                ca = v;               
                //Cuota Capital
                cc = 0;
                //Cuota Interés (amortización)
                ci = ca * ieq / 100;
                //Cuota Total
                ct = cc + ci;
                cv = cv - cc;
                if (n == m){
                    cc = v;
                    cv = cv - cc;
                    ct = cc + ci;              
                }
                break;
        }  
        //-------------------------------------------------------------*   
        //Sumarizo los Totales por columnas
        cct = cct + cc;
        cit = cit + ci;
        ctt = ctt + ct;
        //-------------------------------------------------------------*
        if (n>0){
            planPago.push(new cuota(n, ca, cc, ci, ct, cv));
        }
    }
    //*----------------------------------------------------------------*
    cargoTabla(s)
    //*----------------------------------------------------------------*
    //*----------------------------------------------------------------*
    //Cargo los totales a la tabla
    //Paso los totales a dos decimales
    ct2=cct.toFixed(2);
    ct3=cit.toFixed(2);
    ct4=ctt.toFixed(2);
    //Cargo los totales en la tabla
    document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
        `<tr class="table-dark">
            <th scope="row">Total</th>
            <td>        </td>
            <td> ${ct2} </td>
            <td> ${ct3} </td>
            <td> ${ct4} </td>
            <td>        </td>
        </tr>`;
}
//----------------------------------------------------------------------
function valido(ps,pv,pi,pp,pf){
   //Sistema
    if (ps!=1 && ps!=2 && ps!=3){
        return "El sistema de cálculo debe ser Alemán o Francés o Americano"
    } 
    //Capital
    if (pv <= 0 || isNaN(pv)){
        return "El Capital solicitado debe ser numérico y mayor a $0!"
    }
    //Interés o tasa anual
    if (pi <= 0 || isNaN(pi)){
        return "El Interés o Tasa Anual debe ser numérica y positiva!"
    } 
    //Plazo de pago
    if (pp <= 0 || isNaN(pp) || !Number.isInteger(pp)){
        return "El Plazo de pago debe ser numérico, año calendario y mínimo uno!"
    } 
    //Frecuencia de pago
    switch(pf){
        case 1:
            break;
        case 2:
            break;  
        case 3:
            break;
        case 4:
            break; 
        case 6:
            break;
        case 12:
            break;         
        default:
            return "La Frecuencia de pago debe se mensual, bimestral, trimestral, cuatrimestral, semestral o anual!";
    }
    return "";
}
//----------------------------------------------------------------------
//La función potencia es más clara utilizando el "for" 
//Para apicar lo visto utilizo las tres iteracciones según el plazo de años
//case 1 Interés >00  y <= 10% (for)
//case 2 Interés >10  y <= 20% (while)
//case 3 Interés >20   (do while)
// uso el while para aplicar lo visto.
//Si el exponente es (-) lo multipico por -1 (o debería tomar el valor absoluto)
// para después obtener como resultado la inversa (1/x). 
//Si el exponente es positivo el resultado es x
function potencia (base, exponente, queAplico){
    let exp = exponente;
    //Si el exponente es negativo lo  hago positivo
    if (exp < 0){
        exp = exp * (-1);
    }
    let res = 1;
    let pot = 1;
    switch (queAplico){
        case 1:
            while(pot <= exp){
                res = res * base;
                pot++;
            }
            break;
        case 2:
            for(pot = 1; pot <= exp; pot++){
                res = res * base;
            }
            break;
        case 3:
            do{
                res = res * base;
                pot++;
            }while(pot <= exp);                
            break;
    }   
    //Si el exponente es negativo, invierto el resultado (1/x)
    if (exponente < 0){
        res = 1 / res;
    }
    return res
}
//---------------------------------------------------------------------*
function fDesde(sistema){
     // let desde = 0;         //Inicio del for distinto para cada sistema
    switch(sistema){
        case 1:
            return 1;
            break;
        case 2:
            return 0;    
            break;
        case 3:
            return 1;
            break;
        default:
                Swal.fire("Error en definición de DESDE dónde arranca el for!")
    }ordenO
}
//---------------------------------------------------------------------*
function cargoTabla(s){
    document.getElementById("tab").innerHTML="";
    for (n = 0; n < planPago.length; n++){    
        const cuota = planPago[n]
        //Cargo la fila en la tabla
        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
            `<tr class="table-primary">
                <th scope="row">${cuota._numero}</th>
                <td> ${cuota._capital.toFixed(2)} </td>
                <td> ${cuota._cuotaCapital.toFixed(2)} </td>
                <td> ${cuota._cuotaInteres.toFixed(2)} </td>
                <td> ${cuota._cuotaTotal.toFixed(2)} </td>
                <td> ${cuota._capitalVivo.toFixed(2)} </td>
            </tr>`;
    } 
}
//Fin del JS-----------------------------------------------------------*