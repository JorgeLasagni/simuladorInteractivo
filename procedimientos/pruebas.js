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
    //s=2
    //v=10000
    //i=3
    //p=5
    //f=12
    mensaje = valido(s,v,i,p,f)
    if (mensaje != ""){
        return alert(mensaje);
    }
    //alert("sali de las validaciones");
    //------------------------------------------------------------------
    //Armo la tabla
    //Sumarizadores para mostrar los Totales
    let cct = 0.00      //cc Total cuota capital
    let cit = 0.00      //ci Total cuota interés
    let ctt = 0.00      //ct Total cuota total 

    //Valores intermedios necesarios para los cálculos
    let cpa = 12 / f    //cantidad de pagos por año
    let ieq = i / cpa   //interés equivalente por período de pago
    let m   = p * cpa   //Cantidad de pagos en el plazo anual
    let ca  = v         //Capital Vivo!!
    let desde = 0
    //alert("por entrar al switch");
    //Sistema Alemán  1 (arranco el "for en 1")
    //Sistema Francés 2 (arranco el "for" en 0)
    switch(s){
        case 1:
            //alert("1 por entrar al switch");       
            desde = 1;
            break
        case 2:
            //alert("2 ?? por entrar al switch");       
            desde = 0;    
            break 
    }
    //------------------------------------------------------------------
    //alert("por entrar al for")        

    for(n = desde; n <= m; n++){
        //alert("en for con n:"+n);
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
                //alert("case 2...n:"+n)
                if (n > 0){
                    //Cuota Total
                    ct = (v * (i/100)) / (1-(potencia((1+(i/100)),-p)));

                    //alert("a:"+a)
                    //ct = v * (i/100);
                    //alert("ct:"+ct)
                    //loQue = 1+(i/100);
                    //alert("loQue:"+loQue)
                    //loQue = potencia(loQue,-p);
                    //alert("despues de potencia:"+loQue)
                    //ct = ct / (1-loQue);
                    //alert("ct:"+ct)

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
                //alert("n:"+n+" ct:"+ct.toFixed(2)+" ci:"+ci.toFixed(2)+" cc:"+cc.toFixed(2)+" ca:"+ca.toFixed(2))
                break;
        }       
        //Sumarizo los Totales por columnas
        //alert("por sumarizar 1")
        cct = cct + cc;
        cit = cit + ci;
        ctt = ctt + ct;
        //Preparo los parciales para la tabla
       // alert("por sacar decimales")

        c1=ca.toFixed(2);
        c2=cc.toFixed(2);
        c3=ci.toFixed(2);
        c4=ct.toFixed(2);
        //alert(21)
        //Cargo la fila en la tabla
        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
            `<tr class="table-primary">
                <th scope="row">${n}</th>
                <td> ${c1} </td>
                <td> ${c2} </td>
                <td> ${c3} </td>
                <td> ${c4} </td>
            </tr>`;
            //alert(2)
    }
    //------------------------------------------------------------------
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
    //alert("estoy en potencia");
    let exp = exponente;
    //alert("exponente:"+exponente+"/exp:"+exp);
    //alert("Base:"+base)

    if (exp < 0){
        exp = exp * (-1);
    }
    //alert("como exponente es negativo:"+exponente+"/exp:"+exp);

    let res = 1;
    let pot = 1;

    while(pot <= exp){

        res = res * base;
        //alert(":"+pot+" res"+res);

        pot++;
    }
    //alert("Resultado de la potencia sin invertir:"+res)

    if (exponente < 0){
        res = 1 / res;
    }
    //alert("Resultado de la potencia YA invertido:"+res)
    return res
}
//Fin del JS------------------------------------------------------------