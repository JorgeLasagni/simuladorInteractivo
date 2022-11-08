//Procedimiento para simulación de PRESTAMOS Sistema Alemán
function genero_cuotas(){
    //alert("Entré a Genero cuotas")
    document.getElementById("tab").innerHTML="";
    let v=Number(document.getElementById("capital").value);
    let i=Number(document.getElementById("interes").value);
    let m=Number(document.getElementById("tiempo").value);
    let t=12

    //alert("Capital:"+v);
    //alert("Interés:"+i);
    //alert("Cuotas:" +m);

    //-----------------------------------------------------------------
    //Validaciones...
    if (v === 0) {
        return alert("Debe ingresar CAPITAL mayor a 0!");
    }
    if (m <= 0) {
        return alert("Debe ingresar número de CUOTAS mayor a 0!");
    }
    if (m > 24) {
        return alert("El número de CUOTAS no puede superar las 24!");
    }
    //-----------------------------------------------------------------
    //Armo la tabla
    let cct = 0.00
    let cit = 0.00
    let ctt = 0.00

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
//----------------------------------------------------------------------