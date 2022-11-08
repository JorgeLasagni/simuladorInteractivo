function genero_cuotas(){
    //alert("Entré a Genero cuotas")
    document.getElementById("tab").innerHTML="";
    
    let s=Number(document.getElementById("sistema").value);
    let v=Number(document.getElementById("capital").value);
    let i=Number(document.getElementById("interes").value);
    let p=Number(document.getElementById("plazo").value);
    let f=Number(document.getElementById("frecuencia").value);
//alert("1")
    //let k=Number(document.getElementById("flexRadioDefault1").value);
    //let l=Number(document.getElementById("flexRadioDefault2").value);
    //alert("k:"+k);
    //alert("l:"+l);
    //v   = 3937.50
    //i   = 2.15
    //m   = 10
    //t   = 12
    //alert("Capital:"+v);
    //alert("Interés:"+i);
    //alert("Cuotas:" +m);
    //alert("Sistema:" +s);
    //-----------------------------------------------------------------
    //Validaciones...
    mensaje = valido(s,v,i,p,f)
    if (mensaje != ""){
         return alert(mensaje);
    }
alert("todo OK!")
    //if(s<>1 && s<>2){3
    //}
    //if (v === 0) {
    //    return alert("Debe ingresar CAPITAL mayor a 0!");
    //}
    //if (m <= 0) {
    //    return alert("Debe ingresar número de CUOTAS mayor a 0!");
    //}
    //if (m > 24) {
    //    return alert("El número de CUOTAS no puede superar las 24!");
    //}
    //if (s!=1 && s!=2){
    //    return alert("El seleccionat un sistema");
    //    //    mensaje = "El sistema de cálculo debe ser Alemán o Francés"
    //    //    return //false
    //    } 
    //-----------------------------------------------------------------
    //Armo la tabla
    let cct = 0.00
    let cit = 0.00
    let ctt = 0.00
    let ieq = i / t

    for(n = 1; n <= m; n++){

        ca = v - (n-1) * v / m;
        c1=ca.toFixed(2);

        cc = v / m;
        c2=cc.toFixed(2);

        //ci = ca * i * (m-n+1) / (100 * t);
        //c3=ci.toFixed(2);
        ci = ca * ieq / 100
        c3=ci.toFixed(2);

        ct = (cc + ci);
        c4=ct.toFixed(2);

        cct = cct + cc;
        cit = cit + ci;
        ctt = ctt + ct;
        
        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
        `<tr class="table-primary">
            <th scope="row">${n}</th>
            <td> ${c1} </td>
            <td> ${c2} </td>
            <td> ${c3} </td>
            <td> ${c4} </td>
        </tr>`;
    }
    //Preparo los totales
    ct2=cct.toFixed(2);
    ct3=cit.toFixed(2);
    ct4=ctt.toFixed(2);
    document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
    `<tr class="table-dark">
        <th scope="row">Total</th>
        <td>        </td>
        <td> ${ct2} </td>
        <td> ${ct3} </td>
        <td> ${ct4} </td>
    </tr>`;
}
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
            break
        case 2:
            break  
        case 3:
            break
        case 4:
            break 
        case 6:
            break
        case 12:
            break         
        default:
            return "La Frecuencia de pago debe se mensual, bimestral, trimestral, cuatrimestral, semestral o anual!"
    }
    return ""
}
//----------------------------------------------------------------------