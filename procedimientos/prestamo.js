//Procedimiento para simulación de PRESTAMOS Sistema Alemán o Francés
function genero_cuotas(){
    //Inicializo la tabla
    document.getElementById("tab").innerHTML="";
    //Transformo a numéricos los valores cargados en html
    let s=Number(document.getElementById("sistema").value);
    let v=Number(document.getElementById("capital").value);
    let i=Number(document.getElementById("interes").value);
    let p=Number(document.getElementById("plazo").value);
    let f=Number(document.getElementById("frecuencia").value);
    //------------------------------------------------------------------
    //Validación de la carga...
    //funcion "valido" para control de la carga
    //s:sistema v:capital i:interés p:plazo f:frecuencia
    mensaje = valido(s,v,i,p,f)
    if (mensaje != ""){
        return alert(mensaje);
    }
    //------------------------------------------------------------------
    //Armo la tabla
    //Sumarizadores para mostrar los Totales
    let cct = 0.00      //cc Total cuota capital
    let cit = 0.00      //ci Total cuota interés
    let ctt = 0.00      //ct Total cuota total 

    //Valores intermedios necesarios para los cálculos
    let cpa   = 12 / f    //cantidad de pagos por año
    let ieq   = i / cpa   //interés equivalente por período de pago
    let m     = p * cpa   //Cantidad de pagos en el plazo anual
    let ca    = v         //Capital Vivo!!

    //Sistema Alemán  1 (arranco el "for en 1")
    //Sistema Francés 2 (arranco el "for" en 0)
    let desde = 0         //Inicio del for distinto para cada sistema
    switch(s){
        case 1:
            desde = 1;
            break
        case 2:
            desde = 0;    
            break 
    }
    //------------------------------------------------------------------
    for(n = desde; n <= m; n++){
        switch(s){
            case 1:
                //Capital
                ca = v - (n-1) * v / m;               
                //Cuota Capital
                cc = v / m;
                //Cuota Interés (amortización)
                ci = ca * ieq / 100;
                //Cuota Total
                ct = (cc + ci);
                break;
            case 2:
                if (n > 0){
                    //Cuota Total
                    pot = potencia((1+(ieq/100)),-m);
                    ct  = (v * (ieq/100)) / (1 - pot);
                    //Cuota Interés (amortización)
                    ci = ca * ieq / 100;
                    //Cuota Capital
                    cc = ct - ci;
                    //Capital
                    ca = ca - cc;
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
                }
                break;
        }       
        //Sumarizo los Totales por columnas
        cct = cct + cc;
        cit = cit + ci;
        ctt = ctt + ct;
        //Preparo los parciales para la tabla
        c1=ca.toFixed(0);
        c2=cc.toFixed(0);
        c3=ci.toFixed(0);
        c4=ct.toFixed(0);
        if (n>0){
            //Cargo la fila en la tabla
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                `<tr class="table-primary">
                    <th scope="row">${n}</th>
                    <td> ${c1} </td>
                    <td> ${c2} </td>
                    <td> ${c3} </td>
                    <td> ${c4} </td>
                </tr>`;
        }
    }
    //------------------------------------------------------------------
    //Cargo los totales a la tabla
    //Paso los totales a dos decimales
    ct2=cct.toFixed(0);
    ct3=cit.toFixed(0);
    ct4=ctt.toFixed(0);
    //Cargo los totales en la tabla
    document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
        `<tr class="table-dark">
            <th scope="row">Total</th>
            <td>        </td>
            <td> ${ct2} </td>
            <td> ${ct3} </td>
            <td> ${ct4} </td>
        </tr>`;
}
//----------------------------------------------------------------------
//----------------------------------------------------------------------
function valido(ps,pv,pi,pp,pf){
   //Sistema
    if (ps!=1 && ps!=2){
        return "El sistema de cálculo debe ser Alemán o Francés"
    } 
    //Capital
    if (pv <= 0){
        return "El Capital solicitado debe ser mayor a $0"
    } 
    //Interés o tasa anual
    if (pi <= 0){
        return "El Interés o Tasa Anual debe ser positiva"
    } 
    //Plazo de pago
    if (pp <= 0){
        return "El Plazo de pago debe ser al menos por un año"
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
// uso el while para aplicar lo visto.
//Si el exponente es (-) lo multipico por -1 (o debería tomar el valor absoluto)
// para después obtener como resultado la inversa (1/x). 
//Si el exponente es positivo el resultado es x
function potencia (base, exponente){
    let exp = exponente;
    if (exp < 0){
        exp = exp * (-1);
    }
    let res = 1;
    let pot = 1;

    while(pot <= exp){
        res = res * base;
        pot++;
    }
    if (exponente < 0){
        res = 1 / res;
    }
    return res
}
//Fin del JS------------------------------------------------------------