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
let biblioteca          = [];
let bibliotecaFiltrada  = [];
let tablaGral           = [];
//Defino un código de identificación para cada obra ...
//  lo inicializo  y almaceno en cero. Cuando lo necesite, lo recupero, lo incremento y lo vuelvo a guardar.
//  es en la función código y se guarda el último nro utilizado
let ctrlCodigo = 0
// Recupero o genero un lote de obras y lo guardo
if(localStorage.getItem("cargaLote")) {
    recuperoLote()
} else {
    altaLote()
    guardoLote()
}
//Muestro las obras en la tabla
mostrarObras(biblioteca);

//Variable para control de edición -cuándo tiene que dar un alta, modificar (o eliminar)
let editando = false;

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

//---------------------------------------------------------------------*
function guardoLote(){
    const bibliotecaJSON = JSON.stringify(biblioteca);
    localStorage.setItem("cargaLote", bibliotecaJSON);
}
//---------------------------------------------------------------------*
function recuperoLote(){
    const bibliotecaRecuperada = localStorage.getItem("cargaLote");
    biblioteca = JSON.parse(bibliotecaRecuperada)
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

    if(validoCampos() === false) {
        alert('Todos los campos son obligatorios');
        return;
    }
    if(editando) {
        editarObra()
        editando = false
    } else {
        biblioteca.unshift(new obra(apellidoInput.value, nombreInput.value, tituloInput.value, panelInput.value, subpanelInput.value, nivelInput.value, codigo()));
        guardoLote()
        mostrarObras(biblioteca);
        formulario.reset();
    }
}
//---------------------------------------------------------------------*
//Faltan validaciones!!
function validoCampos() {
    if (apellidoInput.value === "" || nombreInput.value === "" || tituloInput.value === "") {
        return false;
    }
}
//---------------------------------------------------------------------*
function editarObra() {
    objObra.apellido   = apellidoInput.value;
    objObra.nombre     = nombreInput.value;
    objObra.titulo     = tituloInput.value;
    objObra.panel      = panelInput.value;
    objObra.subpanel   = subpanelInput.value;
    objObra.nivel      = nivelInput.value;

    biblioteca.map(obra => {
        if(obra.id === objObra.id) {
            obra.apellido   = objObra.apellido;
            obra.nombre     = objObra.nombre;
            obra.titulo     = objObra.titulo;
            obra.panel      = objObra.panel;
            obra.subpanel   = objObra.subpanel;
            obra.nivel      = objObra.nivel;
            obra.id         = objObra.id;
        }
    })
    guardoLote()
    mostrarObras(biblioteca);
    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent = 'Agregar'
    editando = false;
}
//---------------------------------------------------------------------*
function mostrarObras(tablaGral){
    document.getElementById("tab").innerHTML="";
    tablaGral.forEach(obra => {
        const {apellido, nombre, titulo, panel, subpanel, nivel, id} = obra;
        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
        `<tr class="table-primary">
                <th> ${id} </th>
                <td> ${apellido+", "+nombre} </td>
                <td> ${titulo} </td>
                <td> ${panel}</td>
                <td> ${subpanel} </td>
                <td> ${nivel} </td>
                <td> <button class= "btn btn-editar   btn-success colorBoton" onclick="cargarObra(${id})"   >Editar</button> </td>
                <td> <button class= "btn btn-eliminar btn-danger" onclick="eliminarObra(${id})" >Eliminar</button> </td>
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
}
//---------------------------------------------------------------------*
function eliminarObra(id) {
    const index = biblioteca.findIndex(obra => obra.id === id);
    biblioteca.splice(index,1);
    guardoLote()
    mostrarObras(biblioteca);
}
//---------------------------------------------------------------------*
function altaLote(){ 
    biblioteca.push(new obra("Berbeglia","Carlos Enrique (coordinador)","Propuestas para una antropología argentina (tomo VII)","IZQ","IZQ","2", codigo()));
    biblioteca.push(new obra("Meillassoux","Claude","Mujeres, graneros y capitales","IZQ","IZQ","2", codigo()));
    biblioteca.push(new obra("Bucay ","Jorge Luis","De la autoestima al egoísmo","IZQ","IZQ","2", codigo()));
    biblioteca.push(new obra("Bucay ","Jorge","Cuentos para pensar","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Bucay ","Jorge","Recuerdos para Demián","IZQ","IZQ","2", codigo()));
    biblioteca.push(new obra("Carnegie","Dale","Cómo suprimir las preocupaciones","IZQ","IZQ","2", codigo()));
    biblioteca.push(new obra("Bioy Casares","Adolfo","El sueño de los héroes","IZQ","IZQ","2", codigo()));
    biblioteca.push(new obra("Bioy Casares","Adolfo","La aventura de un fotógrafo en La Plata","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Dormir al sol","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Bioy Casares","Adolfo","","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Historias de Amor","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Diario de la guerra del cerdo","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Historias fantásticas","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Bioy Casares","Adolfo","El héroe de las mujeres","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Diccionario del argentino exquisito","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Historias desaforadas","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Borges","Jorge Luis","El Aleph","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Borges","Jorge Luis","Historia universal de la infamia","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Borges","Jorge Luis","Ficciones","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Borges","Jorge Luis","El libro de la arena","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Borges","Jorge Luis","Historia de la eternidad","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Borges","Jorge Luis","El informe de Brodie","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Borges","Jorge Luis","El oro de los tigres","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Borges","Jorge Luis","Los conjurados","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Borges","Jorge Luis","Otras inquisiciones","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Borges","Jorge Luis","El hacedor","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Irving","Washington","Cuentos de la Alhambra","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Mastretta","Ángeles","Mujeres de ojos grandes","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Poe","Edgar Alan","Cuentos","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Riera","Temis (Yuri)","El lado verde de Themis","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Cuyas","","Portugués-Español Español-Portugués","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Longman","","Inglés-Español Español-Inglés","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Universidad de Chicago","","Inglés-Español Español-Inglés","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Océano","","Español-Italiano Italiano-Español","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Larousse","","Ingles para viajeros","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Zingarelli","","Italiano-Italiano","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Longman","","Inglés-Inglés","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Bosco Botsho","Jean","Lugares sagrados de África","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Martinez Peria","Juan Francisco","Libertad o Muerte!","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Péries-Servenay","Gabriel-David","Una gerra negra","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Balmaceda","Daniel","Estrellas del Pasado","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Bruhat","Jean","Historia de Indonesia","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Paulme","Denise","Las civilizaciones africanas","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Guitard","Odette","Bandung","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Harris","Richard","Independencia y futuro","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Alem","Jean-Pierre","Armenia","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Panikkar","K.M.","La India y el sentido común","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("de Beer","Z.J.","Sudáfrica y el problema de las razas","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Nkrumah","Kwame","África debe unirse","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Jesman","Czeslaw","La paradoja etíope","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Decraene","Philippe","El panafricanismo","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Julien","André Ch","Historia de África","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Panikkar","K.M.","La sociedad india en la encrucijada","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Segal","Ronald","Perfiles africanos","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Gallissot","René","La economía en África del Norte","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Wheeler","Geoffrey","Problemas raciales en el Asia Soviética Musulmana","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Sampson","Anthony","África y el sentido común","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Gutteridge","William  ","Laqs Fuerzas Armadas en los nuevos Estados africanos","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Moreau","Maurice","La economía del Japón","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Grousset","René","Historia de Asia","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Riffaud","Madeleine","VietCong","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Devés Valdés","Eduardo ","El mpensamiento africano subsahariano","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Said","Edward W.","Orientalismo","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Wolf","Eric R.","Europa y la gente sin historia","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Aptheker","Hebert","Historia de la Revolución Norteamericana","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Morgan","Edmund","Esclavitud y libertad en los Estados Unidos","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Franklin","H.Bruce","Vietnam y las fantasías norteamericanas","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Nigra","Fabio","Una Historia Económica (inconformista) de los Estados Unidos, 1865-1980","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Nigra-Pozzi","Fabio-Pablo","La decadencia de los Estados Unidos","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Varios","","Historia Universal (12) Asia y África negra","DER","DER","1",codigo()));
    biblioteca.push(new obra("Devoto","Fernando","Historia de la inmigración en la Argentina","DER","DER","1",codigo()));
    biblioteca.push(new obra("Varios","","32 escritores con Rosas o contra Rosas","DER","DER","1",codigo()));
    biblioteca.push(new obra("Devoto-Pagano","Fernando-Nora","Historia de la historiografía argentina","DER","DER","1",codigo()));
    biblioteca.push(new obra("Arteaga","Juan José","Breve historia contemporánea del Uruguay","DER","DER","1",codigo()));
    biblioteca.push(new obra("Hobsbawm","Eric","Bandidos","DER","DER","1",codigo()));
    biblioteca.push(new obra("Rock","David","Argentina 1516-1987","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Carbia","Rómulo D.","La Revolución de Mayo y la Iglesia","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Duby","Georges","Atlas histórico mundial","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Gentili","Anna María","El león y el cazador","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Rojas","Ricardo","El santo de la espada","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Halperin Donghi","Tulio","Revolución y Guerra","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Barsky-Gelman","Osvaldo-Jorge","Historia del agro argentino","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("SiStefano-Zanatta","Roberto-Loris","Historia de la Iglesia Argentina","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Gelman","Jorge","Rosas bajo fuego","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Halperin Donghi","Tulio","Historia Argentina","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Djenderedjian","Julio","Historia del capitalismo agrario pampeano Tomo 4","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("De Las Casas","Bartolomé","Brevísima relación de la destrucción de las Indias 1552","IZQ","IZQ","2",codigo()));
    biblioteca.push(new obra("Halperin Donghi","Tulio","Una Nación para el Desierto Argentino","DER","DER","1",codigo()));
    biblioteca.push(new obra("Chiaramonte","José Carlos","Ciudades, provincias, estados: Orígenes de la Nación Argentina 1800-1846","DER","DER","1",codigo()));
    biblioteca.push(new obra("Linch","John","Administración colonial española 1782-1810","DER","DER","1",codigo()));
    biblioteca.push(new obra("Goldman","Noemí","El pueblo quiere saber de qué se trata!","DER","DER","1",codigo()));
    biblioteca.push(new obra("Segreti","Carlos S.A.","El unitarismo argentino","DER","DER","1",codigo()));
    biblioteca.push(new obra("Halperin Donghi","Tulio","Historia contemporánea de América Latina","DER","DER","1",codigo()));
    biblioteca.push(new obra("Varios","","Anales de Historia Antigua, Medieval y Moderna","DER","DER","1",codigo()));
    biblioteca.push(new obra("Marañón ","Gregorio","Ensayo biológico sobre Enrique IV de Castilla y su tiempo","DER","DER","1",codigo()));
    biblioteca.push(new obra("Gallego ","Julian","El campesinado en la Grecia antigua","DER","DER","1",codigo()));
    biblioteca.push(new obra("Finley","M.I.","La Grecia Antigua","DER","DER","1",codigo()));
    biblioteca.push(new obra("Daux","Georges","Las etapas de la arqueología","DER","DER","1",codigo()));
    biblioteca.push(new obra("Romero","José Luis","La edad Media","DER","DER","1",codigo()));
    biblioteca.push(new obra("Romero","José Luis","La cultura occidental","DER","DER","1",codigo()));
    biblioteca.push(new obra("Le Goff","Jacques","Mercaderes y Banqueros de la Edad Media","DER","DER","1",codigo()));
    biblioteca.push(new obra("Le Goff","Jacques ","La baja Edad Media","DER","DER","1",codigo()));
    biblioteca.push(new obra("Romano-Tenenti","Ruggiero-Alberto","Los fundamentos del mundo moderno","DER","DER","1",codigo()));
    biblioteca.push(new obra("Pritchard","James B.","La Arqueología y el Antiguo Testamento","DER","DER","1",codigo()));
    biblioteca.push(new obra("Bruun","Geoffrey","La Europa del Sigo XIX 1815-1914","DER","DER","1",codigo()));
    biblioteca.push(new obra("Pallottino","Massimo","Etruscología","DER","DER","1",codigo()));
    biblioteca.push(new obra("Romero","José Luis","Estudio de la mentalidad burguesa","DER","DER","1",codigo()));
    biblioteca.push(new obra("Varios","","La imaginación al poder","DER","DER","1",codigo()));
    biblioteca.push(new obra("Finley","M.I.","Grecia Primitiva: La Edad de Bronce y la Era Arcaica","DER","DER","1",codigo()));
    biblioteca.push(new obra("Dobb","Maurice","Estudios sobre el desarrollo del capitalismo","DER","DER","1",codigo()));
    biblioteca.push(new obra("Sweezy","Paul M.","Teoría del desarrollo capitalista","DER","DER","1",codigo()));
    biblioteca.push(new obra("Pirenne","Henri","Historia económica y social de la Edad Media","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("McKitterick","Rosamond","La Alta Edad Media","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Floud","Roderick","Métodos Cuantitativos para historiadores","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Zeisel","Hans","Dígalo con números","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Todorov","Tzvetan","La conquista de América","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Hesíodo","","Teogonía-Trabajos y Días-Escudo-Certamen","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Vernant","Jean-Pierre","Los orígenes del pensamiento griego","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Aristóteles","","Política","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Campagno-Lewkowicz","Marcelo-Ignacio","La Historia sin objeto","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Herodoto","","Historias","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Romero","José Luis","La Edad Media","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Vidal-Naquet","Pierre","El mundo de Homero","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Platón","","República","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Kuhrt","Amélie","El Oriente Próximo en la Antigüedad, I","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Kuhrt","Amélie","El Oriente Próximo en la Antigüedad, II","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Hobsbawm","Eric","La Era de la Revolución","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Hobsbawm","Eric","La Era del Capital","IZQ","DER","3",codigo()));
    biblioteca.push(new obra("Hobsbawm","Eric","La Era del Imperio","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Hobsbawm","Eric","Historia del Siglo XX","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Nigra-Pozzi","Fabio-Pablo","Invasiones Bárbaras","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Goldman","Noemí","Nueva historia argentina Tomo III","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Di Meglio","Gabriel ","Viva el bajo pueblo!","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Bennassar","Bartolomé","La España de los Austrias 1516 - 1700","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Marañón ","Gregorio","El conde-duque de Olivares","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Brunt","P.A.","Conflictos sociales en la República Romana","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Torrado","Susana","Estructura social de la Argentina: 1945-1983","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Koenigsberger-Mosse","H.G.-George L.","Europa en el Siglo XVI","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Pennington","D.H.","Europa en el Siglo XVII","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Bloch","Marc","Introducción a la Historia","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Aaker-Joachimsthaler","David-E.","Liderazgo de marca","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Lowe","Janet","Bill Gates habla ","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Handy","Charles","La organización por dentro","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Ries-Ries","Al-Laura","Las 11 leyes inmutables de la creación de marcas en Internet","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Prahalad","C.K.","Estrategia corporativa","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Hammer","Michael","La agenda","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Peters","Tom","Gestionar con imaginación","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Hesselbein-Goldsmith-Beckhard","F.-M-","El liíder del futuro","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Buffet-Clark","Mary-David","Buffettología","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Toppin-Czerniawska","Gilbert-Fiona","Consultoría de Negocios","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Vause","Bob","Análisis estratégico de compañías","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Sandage y otros"," ","El futuro de la tecnología","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Kourdi","Jeremy","Estrategia","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Shirreff","David","Cómo lidiar con el riesgo financiero","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Dallas y otros"," ","Miscelánea de negocios","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Barry y otros"," ","Economía moderna ","IZQ","IZQ","3",codigo()));
    biblioteca.push(new obra("Varios"," ","Análisis de los indicadores económicos","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Pacek-Thorniley","Nenad-Daniel","Oportunidades en los mercados emergentes","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Roberts","Richard","Wall Street","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Friend-Zehle","Graham-Stefan","Cómo diseñar un plan de negocios","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Hindle","Tim","Management","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Tennent-Friend","John-Graham","Cómo delinear un modelo de negocios","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Owen-Griffiths","Deborah-Robin","Cómo analizar el mercado","IZQ","DER","2",codigo()));
    biblioteca.push(new obra("Ohmae","Kenichi","La mente del estratega","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Ferrari","Carlos A.","Presupuesto base cero","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","La casa de los espíritus","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","El cuaderno maya","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","El zorro","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","Amor","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","El plan infinito","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","Afrodita","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","Paula","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","El retrato de sepia","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","Cuentos de Eva Luna","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","De amor y de sombra","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","La isla bajo el mar","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","Los amantes del Guggenheim - El oficio de contar","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","Inés del alma mía","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","Eva Luna","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","Hija de la fortuna","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Allende","Isabel","La ciudad de las bestias","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Arlt","Roberto","Los siete locos","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Blatty","William Peter","Legión","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Calderón de la Barca","Pedro","La vida es sueño","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","62/Modelo para armar","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Octaedro","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Queremos tanto a Glenda","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","El examen","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Todos los fuegos el fuego","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","La otra orilla","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Los Reyes - Dos juegos de palabras","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Salvo el crepúsculo","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Un tal Lucas","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Papeles inesperados","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Divertimento","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Obra Crítica I","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Obra Crítica III","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Rayuela","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Diario de Andrés Fava","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Adiós, Robinson - Nada a Pehuajó","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Bestiario","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Alguien que anda por ahí","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Historias de cronopios y de famas","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Imagen de John Keats","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Los Premios","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Los astronautas de la cosmopista","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Cortázar","Julio","Final de Juego","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Durrell","Lawrence","Justine","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Fowles","John","La mujer del teniente francés II","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Linch","Benito","El inglés de los güesos","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Marías","Javier","Así empieza lo malo","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Shelley","Mary","Frankenstein","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Stowe","Enriqueta","La Cabaña del Tío Tom","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Jimenez","Juan Ramón","Platero y Yo","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Cervantes Saavedra","Miguel de","El ingenioso hidalgo Don Quijote de la Mancha","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos I","IZQ","DER","1",codigo()));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos II","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos III","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos IV","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos V","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos VI","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros I","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros II","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros III","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros I","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros II","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros III","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Noche de invierno","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Odiseo","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Odiseo","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","El ejército perdido","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","La tumba de Alejandro","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Quimaira","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","El ocaso de Roma y otros relatos","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Paladión","DER","IZQ","1",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","La conjura de las reinas","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Akropolis","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","El complot contra los escipiones y otros relatos","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Imperio","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","El imperio de los dragones","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Talos de Esparta","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Los Idus de marzo","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","La última legión","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","El Tirano","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Manfredi","Valerio Massimo"," ","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Achebe","Chinua","Trilogía Africana","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Conrad","Joseph","El corazón de las tinieblas","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("D´Elia","Miguel Alfredo","Caminos ilesos","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Freud","Sigmund","Escritos sobre la cocaína","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Freud","Sigmund","Cartas de amor","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("García Dupont","Eduardo ","De la histeria a la feminidad","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Miller","Jacques-Alain","Lógicas de la vida amorosa","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Najles","Ana Ruth","Problemas de aprendizaje y psicoanálisis","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Soler","Colette","Lo que Lacan dijo de las mujeres","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Zabalza","Sergio","El lugar del padre en la adolescenmcia","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Mallman","Francis","Tierra de fuegos","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Marx","Karl","Manifiesto comunista","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Weber","Max","Ética protestante","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Fanon","Frantz","Los condenados de la tierra","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Comaroff","Jean y John","Violencia y ley en la poscolonia: una reflexion sobre las complicidades Norte-Sur","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Comaroff","Jean y John","Etnicidad S.A.","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Comaroff","Jean y John","Teorías desde el sur","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Guzmán-Geler","Florencia-Lea","Cartografías afrolatinoamericanas","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Anderson","Benedict","Comunidades Imaginadas","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Arenas","Gerardo","En busca de lo singular","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Bauman","Zygmunt","Vida Líquida","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Bleichmar","Silvia","La subjetividad en Riesgo","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Evans","Dylan","Diccionario introductoriuo de psicoanálisis lacaniano","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Hessen","Johannes","Teoría del conocimiento","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Julien","Philippe","El manto de Noé","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Kafka","Franz","Carta al padre","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Lacan","Jacques","De los nombres del padre","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Mastretta","Ángeles","Arráncame la vida","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Miller","Jacques-Alain","Introducción al método psicoanalítico","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Querol-Alcañiz","Silvia-Susana","Selección de Personal","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Quiroga","Carlos","El prójimop y lo abyecto","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Soler","Colette","Las variables del fin de la cura","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Urresti","Marcelo","Ciberculturas juveniles","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Visca","Jorge Luis","Técnicas proyectivas psicopedagógicas y las pautas gráficas para su interpretación","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Wallace","Irving","La 27 esposa","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Yllera","Alicia","Tristán e Iseo","DER","IZQ","2",codigo()));
    biblioteca.push(new obra("Bergman","Klaus Dr.","Profecías de Nostradamus","DER","IZQ","2", codigo()));
}
//*--------------------------------------------------------------------*
// function ordeno(orden){
//     if (orden  === "dmaM"){
//         return 1
//     }else {
//         return -1
//     }
// }
//*--------------------------------------------------------------------*
function ordenObra(ordenamiento,campo){  
    //alert("estoy en orden obra: "+ordenamiento+"-"+campo) 
    if (ordenamiento === "dmaM") {
        biblioteca.sort(function (a ,b)  {
            if (campo === "codigo") {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                alert("="+ordenamiento+":"+ordeno(ordenamiento));
                // a = b
                return 0;
            } else {
                if (campo === "autor") {
                    if (a.apellido+a.nombre > b.apellido+b.nombre) {
                        return 1;
                    }
                    if (a.apellido+a.nombre < b.apellido+b.nombre) {
                        return -1;
                    }
                    // a = b
                        return 0;
                } else {
                    if (campo === "titulo"){
                        if (a.titulo > b.titulo) {
                            return 1;
                        }
                        if (a.titulo < b.titulo) {
                            return -1;
                        }
                            // a = b
                            return 0; 
                    } else {
                        if (campo === "panel") {
                            if (a.panel > b.panel) {
                                return 1;
                            }
                            if (a.panel < b.panel) {
                                return -1;
                            }
                            // a = b
                            return 0;
                        } else {
                            if (campo === "subpanel") {
                                if (a.subpanel > b.subpanel) {
                                    return 1;
                                }
                                if (a.subpanel < b.subpanel) {
                                    return -1;
                                }
                                // a = b
                                return 0;
                        } else {
                            if (campo === "nivel") {
                                if (a.nivel > b.nivel) {
                                    return 1;
                                }
                                if (a.nivel < b.nivel) {
                                    return -1;
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
        } else {
        biblioteca.sort(function (a ,b)  {
            if (campo === "codigo") {
                if (a.id > b.id) {
                    return -1;
                }
                if (a.id < b.id) {
                    return 1;
                }
                alert("="+ordenamiento+":"+ordeno(ordenamiento));
                // a = b
                return 0;
            } else {
                if (campo === "autor") {
                    if (a.apellido+a.nombre > b.apellido+b.nombre) {
                        return -1;
                    }
                    if (a.apellido+a.nombre < b.apellido+b.nombre) {
                        return 1;
                    }
                    // a = b
                        return 0;
                } else {
                    if (campo === "titulo"){
                        if (a.titulo > b.titulo) {
                            return -1;
                        }
                        if (a.titulo < b.titulo) {
                            return 1;
                        }
                            // a = b
                            return 0; 
                    } else {
                        if (campo === "panel") {
                            if (a.panel > b.panel) {
                                return -1;
                            }
                            if (a.panel < b.panel) {
                                return 1;
                            }
                            // a = b
                            return 0;
                        } else {
                            if (campo === "subpanel") {
                                if (a.subpanel > b.subpanel) {
                                    return -1;
                                }
                                if (a.subpanel < b.subpanel) {
                                    return 1;
                                }
                                // a = b
                                return 0;
                        } else {
                            if (campo === "nivel") {
                                if (a.nivel > b.nivel) {
                                    return -1;
                                }
                                if (a.nivel < b.nivel) {
                                    return 1;
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
}
    guardoLote();
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
function cargaObrasAnterior() {
    if(localStorage.getItem("cargaLote")) {
        recuperoLote()
    } 
    if (biblioteca.length === 0) {
        altaLote()
        guardoLote()
    }
    mostrarObras(biblioteca);
}
//*Fin biblioteca.js**************************************************/
