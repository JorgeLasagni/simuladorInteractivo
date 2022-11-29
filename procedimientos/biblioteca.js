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

const butn = document.getElementById("btn")
//butn.onclick = generoControl()
butn.addEventListener("click", generoControl)
//---------------------------------------------------------------------*
function generoControl(){

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

//*--------------------------------------------------------------------*"
function altaLote(){
    // borro todo lo que cargué
    //biblioteca = [];
    // biblioteca.push(new obra("Linch", "John", "Administración colonial española 1782-1810", "DER", "DER", "1", "A"+(biblioteca.length+1)));
    // biblioteca.push(new obra("Bauman", "Zygmunt", "Vida Líquida", "DER", "IZQ", "2", "A"+(biblioteca.length+1)));
    // biblioteca.push(new obra("Franklin", "H.Bruce", "Vietnam y las fantasías norteamericanas", "IZQ", "DER", "3", "A"+(biblioteca.length+1)));
    // biblioteca.push(new obra("Hernandez", "José", "Marín Fierro", "IZQ", "DER", "4", "A"+(biblioteca.length+1)));
        
    biblioteca.push(new obra("Berbeglia","Carlos Enrique (coordinador)","Propuestas para una antropología argentina (tomo VII)","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Meillassoux","Claude","Mujeres, graneros y capitales","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bucay ","Jorge Luis","De la autoestima al egoísmo","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bucay ","Jorge","Cuentos para pensar","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bucay ","Jorge","Recuerdos para Demián","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Carnegie","Dale","Cómo suprimir las preocupaciones","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bioy Casares","Adolfo","El sueño de los héroes","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bioy Casares","Adolfo","La aventura de un fotógrafo en La Plata","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Dormir al sol","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bioy Casares","Adolfo","","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Historias de Amor","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Diario de la guerra del cerdo","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Historias fantásticas","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bioy Casares","Adolfo","El héroe de las mujeres","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Diccionario del argentino exquisito","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bioy Casares","Adolfo","Historias desaforadas","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Borges","Jorge Luis","El Aleph","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Borges","Jorge Luis","Historia universal de la infamia","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Borges","Jorge Luis","Ficciones","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Borges","Jorge Luis","El libro de la arena","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Borges","Jorge Luis","Historia de la eternidad","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Borges","Jorge Luis","El informe de Brodie","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Borges","Jorge Luis","El oro de los tigres","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Borges","Jorge Luis","Los conjurados","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Borges","Jorge Luis","Otras inquisiciones","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Borges","Jorge Luis","El hacedor","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Irving","Washington","Cuentos de la Alhambra","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Mastretta","Ángeles","Mujeres de ojos grandes","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Poe","Edgar Alan","Cuentos","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Riera","Temis (Yuri)","El lado verde de Themis","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cuyas","","Portugués-Español Español-Portugués","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Longman","","Inglés-Español Español-Inglés","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Universidad de Chicago","","Inglés-Español Español-Inglés","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Océano","","Español-Italiano Italiano-Español","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Larousse","","Ingles para viajeros","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Zingarelli","","Italiano-Italiano","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Longman","","Inglés-Inglés","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bosco Botsho","Jean","Lugares sagrados de África","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Martinez Peria","Juan Francisco","Libertad o Muerte!","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Péries-Servenay","Gabriel-David","Una gerra negra","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Balmaceda","Daniel","Estrellas del Pasado","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bruhat","Jean","Historia de Indonesia","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Paulme","Denise","Las civilizaciones africanas","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Guitard","Odette","Bandung","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Harris","Richard","Independencia y futuro","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Alem","Jean-Pierre","Armenia","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Panikkar","K.M.","La India y el sentido común","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("de Beer","Z.J.","Sudáfrica y el problema de las razas","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Nkrumah","Kwame","África debe unirse","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Jesman","Czeslaw","La paradoja etíope","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Decraene","Philippe","El panafricanismo","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Julien","André Ch","Historia de África","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Panikkar","K.M.","La sociedad india en la encrucijada","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Segal","Ronald","Perfiles africanos","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Gallissot","René","La economía en África del Norte","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Wheeler","Geoffrey","Problemas raciales en el Asia Soviética Musulmana","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Sampson","Anthony","África y el sentido común","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Gutteridge","William  ","Laqs Fuerzas Armadas en los nuevos Estados africanos","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Moreau","Maurice","La economía del Japón","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Grousset","René","Historia de Asia","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Riffaud","Madeleine","VietCong","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Devés Valdés","Eduardo ","El mpensamiento africano subsahariano","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Said","Edward W.","Orientalismo","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Wolf","Eric R.","Europa y la gente sin historia","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Aptheker","Hebert","Historia de la Revolución Norteamericana","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Morgan","Edmund","Esclavitud y libertad en los Estados Unidos","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Franklin","H.Bruce","Vietnam y las fantasías norteamericanas","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Nigra","Fabio","Una Historia Económica (inconformista) de los Estados Unidos, 1865-1980","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Nigra-Pozzi","Fabio-Pablo","La decadencia de los Estados Unidos","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Varios","","Historia Universal (12) Asia y África negra","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Devoto","Fernando","Historia de la inmigración en la Argentina","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Varios","","32 escritores con Rosas o contra Rosas","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Devoto-Pagano","Fernando-Nora","Historia de la historiografía argentina","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Arteaga","Juan José","Breve historia contemporánea del Uruguay","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Hobsbawm","Eric","Bandidos","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Rock","David","Argentina 1516-1987","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Carbia","Rómulo D.","La Revolución de Mayo y la Iglesia","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Duby","Georges","Atlas histórico mundial","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Gentili","Anna María","El león y el cazador","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Rojas","Ricardo","El santo de la espada","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Halperin Donghi","Tulio","Revolución y Guerra","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Barsky-Gelman","Osvaldo-Jorge","Historia del agro argentino","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("SiStefano-Zanatta","Roberto-Loris","Historia de la Iglesia Argentina","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Gelman","Jorge","Rosas bajo fuego","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Halperin Donghi","Tulio","Historia Argentina","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Djenderedjian","Julio","Historia del capitalismo agrario pampeano Tomo 4","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("De Las Casas","Bartolomé","Brevísima relación de la destrucción de las Indias 1552","IZQ","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Halperin Donghi","Tulio","Una Nación para el Desierto Argentino","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Chiaramonte","José Carlos","Ciudades, provincias, estados: Orígenes de la Nación Argentina 1800-1846","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Linch","John","Administración colonial española 1782-1810","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Goldman","Noemí","El pueblo quiere saber de qué se trata!","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Segreti","Carlos S.A.","El unitarismo argentino","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Halperin Donghi","Tulio","Historia contemporánea de América Latina","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Varios","","Anales de Historia Antigua, Medieval y Moderna","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Marañón ","Gregorio","Ensayo biológico sobre Enrique IV de Castilla y su tiempo","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Gallego ","Julian","El campesinado en la Grecia antigua","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Finley","M.I.","La Grecia Antigua","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Daux","Georges","Las etapas de la arqueología","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Romero","José Luis","La edad Media","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Romero","José Luis","La cultura occidental","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Le Goff","Jacques","Mercaderes y Banqueros de la Edad Media","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Le Goff","Jacques ","La baja Edad Media","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Romano-Tenenti","Ruggiero-Alberto","Los fundamentos del mundo moderno","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Pritchard","James B.","La Arqueología y el Antiguo Testamento","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bruun","Geoffrey","La Europa del Sigo XIX 1815-1914","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Pallottino","Massimo","Etruscología","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Romero","José Luis","Estudio de la mentalidad burguesa","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Varios","","La imaginación al poder","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Finley","M.I.","Grecia Primitiva: La Edad de Bronce y la Era Arcaica","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Dobb","Maurice","Estudios sobre el desarrollo del capitalismo","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Sweezy","Paul M.","Teoría del desarrollo capitalista","DER","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Pirenne","Henri","Historia económica y social de la Edad Media","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("McKitterick","Rosamond","La Alta Edad Media","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Floud","Roderick","Métodos Cuantitativos para historiadores","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Zeisel","Hans","Dígalo con números","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Todorov","Tzvetan","La conquista de América","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Hesíodo","","Teogonía-Trabajos y Días-Escudo-Certamen","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Vernant","Jean-Pierre","Los orígenes del pensamiento griego","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Aristóteles","","Política","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Campagno-Lewkowicz","Marcelo-Ignacio","La Historia sin objeto","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Herodoto","","Historias","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Romero","José Luis","La Edad Media","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Vidal-Naquet","Pierre","El mundo de Homero","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Platón","","República","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Kuhrt","Amélie","El Oriente Próximo en la Antigüedad, I","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Kuhrt","Amélie","El Oriente Próximo en la Antigüedad, II","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Hobsbawm","Eric","La Era de la Revolución","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Hobsbawm","Eric","La Era del Capital","IZQ","DER","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Hobsbawm","Eric","La Era del Imperio","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Hobsbawm","Eric","Historia del Siglo XX","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Nigra-Pozzi","Fabio-Pablo","Invasiones Bárbaras","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Goldman","Noemí","Nueva historia argentina Tomo III","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Di Meglio","Gabriel ","Viva el bajo pueblo!","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bennassar","Bartolomé","La España de los Austrias 1516 - 1700","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Marañón ","Gregorio","El conde-duque de Olivares","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Brunt","P.A.","Conflictos sociales en la República Romana","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Torrado","Susana","Estructura social de la Argentina: 1945-1983","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Koenigsberger-Mosse","H.G.-George L.","Europa en el Siglo XVI","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Pennington","D.H.","Europa en el Siglo XVII","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bloch","Marc","Introducción a la Historia","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Aaker-Joachimsthaler","David-E.","Liderazgo de marca","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Lowe","Janet","Bill Gates habla ","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Handy","Charles","La organización por dentro","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Ries-Ries","Al-Laura","Las 11 leyes inmutables de la creación de marcas en Internet","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Prahalad","C.K.","Estrategia corporativa","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Hammer","Michael","La agenda","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Peters","Tom","Gestionar con imaginación","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Hesselbein-Goldsmith-Beckhard","F.-M-","El liíder del futuro","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Buffet-Clark","Mary-David","Buffettología","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Toppin-Czerniawska","Gilbert-Fiona","Consultoría de Negocios","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Vause","Bob","Análisis estratégico de compañías","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Sandage y otros"," ","El futuro de la tecnología","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Kourdi","Jeremy","Estrategia","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Shirreff","David","Cómo lidiar con el riesgo financiero","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Dallas y otros"," ","Miscelánea de negocios","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Barry y otros"," ","Economía moderna ","IZQ","IZQ","3","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Varios"," ","Análisis de los indicadores económicos","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Pacek-Thorniley","Nenad-Daniel","Oportunidades en los mercados emergentes","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Roberts","Richard","Wall Street","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Friend-Zehle","Graham-Stefan","Cómo diseñar un plan de negocios","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Hindle","Tim","Management","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Tennent-Friend","John-Graham","Cómo delinear un modelo de negocios","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Owen-Griffiths","Deborah-Robin","Cómo analizar el mercado","IZQ","DER","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Ohmae","Kenichi","La mente del estratega","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Ferrari","Carlos A.","Presupuesto base cero","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","La casa de los espíritus","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","El cuaderno maya","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","El zorro","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","Amor","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","El plan infinito","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","Afrodita","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","Paula","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","El retrato de sepia","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","Cuentos de Eva Luna","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","De amor y de sombra","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","La isla bajo el mar","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","Los amantes del Guggenheim - El oficio de contar","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","Inés del alma mía","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","Eva Luna","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","Hija de la fortuna","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Allende","Isabel","La ciudad de las bestias","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Arlt","Roberto","Los siete locos","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Blatty","William Peter","Legión","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Calderón de la Barca","Pedro","La vida es sueño","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","62/Modelo para armar","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Octaedro","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Queremos tanto a Glenda","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","El examen","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Todos los fuegos el fuego","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","La otra orilla","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Los Reyes - Dos juegos de palabras","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Salvo el crepúsculo","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Un tal Lucas","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Papeles inesperados","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Divertimento","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Obra Crítica I","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Obra Crítica III","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Rayuela","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Diario de Andrés Fava","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Adiós, Robinson - Nada a Pehuajó","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Bestiario","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Alguien que anda por ahí","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Historias de cronopios y de famas","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Imagen de John Keats","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Los Premios","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Los astronautas de la cosmopista","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cortázar","Julio","Final de Juego","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Durrell","Lawrence","Justine","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Fowles","John","La mujer del teniente francés II","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Linch","Benito","El inglés de los güesos","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Marías","Javier","Así empieza lo malo","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Shelley","Mary","Frankenstein","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Stowe","Enriqueta","La Cabaña del Tío Tom","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Jimenez","Juan Ramón","Platero y Yo","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Cervantes Saavedra","Miguel de","El ingenioso hidalgo Don Quijote de la Mancha","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos I","IZQ","DER","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos II","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos III","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos IV","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos V","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Druon","Maurice","Los Reyes Malditos VI","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros I","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros II","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros III","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros I","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros II","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Aléxandros III","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Noche de invierno","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Odiseo","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Odiseo","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","El ejército perdido","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","La tumba de Alejandro","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Quimaira","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","El ocaso de Roma y otros relatos","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Paladión","DER","IZQ","1","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","La conjura de las reinas","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Akropolis","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","El complot contra los escipiones y otros relatos","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Imperio","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","El imperio de los dragones","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Talos de Esparta","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","Los Idus de marzo","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","La última legión","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo","El Tirano","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Manfredi","Valerio Massimo"," ","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Achebe","Chinua","Trilogía Africana","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Conrad","Joseph","El corazón de las tinieblas","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("D´Elia","Miguel Alfredo","Caminos ilesos","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Freud","Sigmund","Escritos sobre la cocaína","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Freud","Sigmund","Cartas de amor","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("García Dupont","Eduardo ","De la histeria a la feminidad","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Miller","Jacques-Alain","Lógicas de la vida amorosa","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Najles","Ana Ruth","Problemas de aprendizaje y psicoanálisis","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Soler","Colette","Lo que Lacan dijo de las mujeres","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Zabalza","Sergio","El lugar del padre en la adolescenmcia","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Mallman","Francis","Tierra de fuegos","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Marx","Karl","Manifiesto comunista","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Weber","Max","Ética protestante","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Fanon","Frantz","Los condenados de la tierra","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Comaroff","Jean y John","Violencia y ley en la poscolonia: una reflexion sobre las complicidades Norte-Sur","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Comaroff","Jean y John","Etnicidad S.A.","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Comaroff","Jean y John","Teorías desde el sur","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Guzmán-Geler","Florencia-Lea","Cartografías afrolatinoamericanas","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Anderson","Benedict","Comunidades Imaginadas","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Arenas","Gerardo","En busca de lo singular","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bauman","Zygmunt","Vida Líquida","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bleichmar","Silvia","La subjetividad en Riesgo","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Evans","Dylan","Diccionario introductoriuo de psicoanálisis lacaniano","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Hessen","Johannes","Teoría del conocimiento","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Julien","Philippe","El manto de Noé","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Kafka","Franz","Carta al padre","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Lacan","Jacques","De los nombres del padre","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Mastretta","Ángeles","Arráncame la vida","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Miller","Jacques-Alain","Introducción al método psicoanalítico","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Querol-Alcañiz","Silvia-Susana","Selección de Personal","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Quiroga","Carlos","El prójimop y lo abyecto","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Soler","Colette","Las variables del fin de la cura","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Urresti","Marcelo","Ciberculturas juveniles","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Visca","Jorge Luis","Técnicas proyectivas psicopedagógicas y las pautas gráficas para su interpretación","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Wallace","Irving","La 27 esposa","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Yllera","Alicia","Tristán e Iseo","DER","IZQ","2","A"+(biblioteca.length+1)));
    biblioteca.push(new obra("Bergman","Klaus Dr.","Profecías de Nostradamus","DER","IZQ","2","A"+(biblioteca.length+1)));
    cargoTabla()
}
//*--------------------------------------------------------------------*
function altaObra(){
        const vapellido   = prompt("Ingrese Apellido del autor:");
        const vnombre     = prompt("Ingrese Nombre del autor:");
        const vtitulo     = prompt("Ingrese Título de la obra:");
        const vpanel      = prompt("Ingrese Panel de ubicación de la obra (DER-IZQ):");
        const vsubpanel   = prompt("Ingrese SubPanel de ubicación de la obra (DER-IZQ):");
        const vnivel      = prompt("Ingrese Nivel o Estante (1-2-3-4-5-6):");
        biblioteca.unshift(new obra(vapellido, vnombre, vtitulo, vpanel, vsubpanel, vnivel, "A"+(biblioteca.length+1)));
        cargoTabla()
    }
//*--------------------------------------------------------------------*
function bajaObra(){    
    const mcodigo = prompt("Ingrese el código de IDENTIFICACIÓN de la obra a procesar:")
    const index = biblioteca.findIndex(kobra => kobra._codigo === mcodigo);
    if (index < 0){
        alert("Atención! \n El código de Obra: <" +mcodigo+ +"> No Existe!");
    } else {
        const kobra = biblioteca[index]
        const confirma = prompt("Autor: "+kobra._apellido+", "+kobra._nombre+"\n Obra: "+kobra._titulo+"\n \n ¿Confirma la ELIMINACIÓN de esta obra? SI o NO:")      
        if (confirma === "SI"){
            biblioteca.splice(index,1);
            cargoTabla()
        }
    }
}
//*--------------------------------------------------------------------*
function modiObra(){
    const mcodigo = prompt("Ingrese el código de IDENTIFICACIÓN de la obra a procesar:")
    const index = biblioteca.findIndex(kobra => kobra._codigo === mcodigo);
    if (index < 0){
        alert("Atención! \n El código de Obra: <" +mcodigo+ +"> No Existe!");
    } else {
        const kobra = biblioteca[index]
        const confirma = prompt(kobra._apellido+", "+kobra._nombre+"\n Obra: "+kobra._titulo+"\n \n ¿Confirma la MODIFICACIÓN de esta obra? SI o NO:")      
        if (confirma === "SI"){
            kobra._apellido = prompt("Modifique el Apellido del autor: ", kobra._apellido)
            kobra._nombre   = prompt("Modifique el Nombre del autor: ", kobra._nombre)
            kobra._titulo   = prompt("Modifique el Título de la obra: ", kobra._titulo)
            kobra.panel     = prompt("Modifique el Panel de ubicación de la obra: ", kobra._panel)
            kobra.subpanel  = prompt("Modifique el SubPanel de ubicación de la obra: ", kobra._subpanel)
            kobra.nivel     = prompt("Modifique el Nivel o Estante de ubicación de la obra: ", kobra._nivel)
            cargoTabla()
        }
    }
}
//*--------------------------------------------------------------------*
function seleObra(){
    //const result = words.filter(word => word.length > 6);

    const kk = biblioteca.filter(kobra => kobra._panel === "DER");
    // alert(kk)
    // console.log(kk)

    document.getElementById("tab").innerHTML="";
    for (n = 0; n < kk.length; n++){    
        const kobra = kk[n]
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
//*--------------------------------------------------------------------*
function ordenObra(){
    const oapellido  = prompt("Ordena por Apellido y Nombre del autor? (SI-NO: ", "SI")
    const otitulo    = prompt("Ordena por Título de la obra? (SI-NO) ", "SI")
    const oubicacion = prompt("Ordena por Ubicación de la obra: ", "NO")
    biblioteca.sort(function (a, b) {
        if (oapellido == "SI"){
            if (a._apellido+a._nombre > b._apellido+b._nombre) {
                return 1;
            }
            if (a._apellido+a._nombre < b._apellido+b._nombre) {
                return -1;
            }
              // a = b
            return 0;
        }else{
            if (otitulo == "SI"){
                if (a._titulo > b._titulo) {
                    return 1;
                }
                if (a._titulo < b._titulo) {
                    return -1;
                }
                  // a = b
                return 0; 
            }else{
                if (a._panel+a._subpanel+a._nivel > b._panel+b._subpanel+b._nivel) {
                    return 1;
                }
                if (a._panel+a._subpanel+a._nivel < b._panel+b._subpanel+b._nivel) {
                    return -1;
                }
                  // a = b
                return 0;
            }
        }     
    });
    cargoTabla()
}
//*--------------------------------------------------------------------*
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
//**********************************************************************

// function generoControl(){
//     alert("estoy en generoControl")
//     //Transformo a numéricos los valores cargados en html
//     let proceso=Number(document.getElementById("proceso").value);
//     switch (proceso) {
//         case 1:     //altas automática por Lote
//             altaLote();
//             break;
//         case 2:     //alta por obra
//             //altaObra();
//             break;
//         case 3:     //baja de una obra
//             modiBajaObra();
//             break;
//         case 4:     //modificación de una obra
//             modiBajaObra();
//             break;
//         case 5:     //Selecciono alguna/s obra/s
//             seleObra();
//             break;
//         case 6:     //Ordenar segun ...,
//             ordenObra();
//             break;
//         default:
//             alert("Debe seleccionar un PROCESO");
//             break;
//     }   
// }
// function altaLote(){
//     // borro todo lo que cargué
//     //biblioteca = [];
//     biblioteca.push(new obra("Linch", "John", "Administración colonial española 1782-1810", "DER", "DER", "1", "A"+(biblioteca.length+1)));
//     biblioteca.push(new obra("Bauman", "Zygmunt", "Vida Líquida", "DER", "IZQ", "2", "A"+(biblioteca.length+1)));
//     biblioteca.push(new obra("Franklin", "H.Bruce", "Vietnam y las fantasías norteamericanas", "IZQ", "DER", "3", "A"+(biblioteca.length+1)));
//     biblioteca.push(new obra("Hernandez", "José", "Marín Fierro", "IZQ", "DER", "4", "A"+(biblioteca.length+1)));
//     cargoTabla()
// }
// //*--------------------------------------------------------------------*
// function altaObra(){
//     // const vapellido   = document.getElementById("apellido").value;
//     // const vnombre     = document.getElementById("nombre").value;
//     // const vtitulo     = document.getElementById("titulo").value;
//     // const vpanel      = document.getElementById("panel").value;
//     // const vsubpanel   = document.getElementById("subpanel").value;
//     // const vnivel      = document.getElementById("nivel").value;
//     // biblioteca.unshift(new obra(vapellido, vnombre, vtitulo, vpanel, vsubpanel, vnivel, "A"+(biblioteca.length+1)));
//     // cargoTabla()
// }
// //*--------------------------------------------------------------------*
// function modiBajaObra(){
//     //alert("Estoy en BAJA de una Obra");

//     const mcodigo = prompt("Ingrese el código de IDENTIFICACIÓN de la obra a procesar:")
//     const index = biblioteca.findIndex(kobra => kobra._codigo === mcodigo);

//     // if (index < 0){
//     //     alert("Atención! el código de Obra:<" +mcodigo+ +"> No Existe!");
//     // } else {
//     //     kobra = biblioteca[index]
//     //     alert(kobra._apellido+", "+kobra._nombre+" "+kobra._titulo)
//     //     const confirma = prompt(kobra._apellido+", "+kobra._nombre+" "+kobra._titulo+"¿Confirma la eliminación de esta obra? SI o NO:")      
//     //     if (confirma === "SI"){
//     //         biblioteca.splice(index,1);
//     //         cargoTabla()
//     //     }
//     // }

//     if (index < 0){
//             alert("Atención! el código de Obra:<" +mcodigo+ +"> No Existe!");
//         } else {

//             let kobra = biblioteca[index]

//             //alert(kobra._apellido+", "+kobra._nombre+" "+kobra._titulo)
//             //const confirma = prompt(kobra._apellido+", "+kobra._nombre+" "+kobra._titulo+"¿Confirma la eliminación de esta obra? SI o NO:")      
//             //if (confirma === "SI"){
//             //    biblioteca.splice(index,1);
//             //    cargoTabla()
//             document.getElementById("apellido").value=kobra._apellido;
//             document.getElementById("nombre").value=kobra._nombre;
//             document.getElementById("titulo").value=kobra._titulo;
//             document.getElementById("panel").value=kobra._panel;
//             document.getElementById("subpanel").value=kobra._subpanel;
//             document.getElementById("nivel").value=kobra._nivel;
//             }
//     }

// //*--------------------------------------------------------------------*
// // function modiObra(){
// //     alert("Estoy en MODIFICACIÓN de una Obra");
// // }
// //*--------------------------------------------------------------------*
// function seleObra(){
//     alert("Estoy en SELECCIÓN de una o varias Obras");
// }
// //*--------------------------------------------------------------------*
// function cargoTabla(){
//     document.getElementById("tab").innerHTML=";
//     for (n = 0; n < biblioteca.length; n++){    
//         const kobra = biblioteca[n]
//         //Cargo la fila en la tabla
//         document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
//             `<tr class="table-primary">
//                 <th scope="row">${kobra._codigo}</th>
//                 <td> ${kobra._apellido+", "+kobra._nombre} </td>
//                 <td> ${kobra._titulo} </td>
//                 <td> ${kobra._panel+"-"+kobra._subpanel+"-"+kobra._nivel} </td>
//             </tr>`;
//     } 
// }
// //*--------------------------------------------------------------------*
// function finalControl(){
//     alert("Estoy en fiinal control")
//     //Transformo a numéricos los valores cargados en html
//     let proceso=Number(document.getElementById("proceso").value);
//     const confirma = prompt("¿Confirma PROCESO? SI o NO:")
//     if (confirma != "SI"){
//         cargoTabla()
//         return
//     }

//     switch (proceso) {

//         // case 1:     //altas automática por Lote
//         //     altaLote();
//         //     break;

//         case 2:     //alta por obra
//             //altaObra();
//             const vapellido   = document.getElementById("apellido").value;
//             const vnombre     = document.getElementById("nombre").value;
//             const vtitulo     = document.getElementById("titulo").value;
//             const vpanel      = document.getElementById("panel").value;
//             const vsubpanel   = document.getElementById("subpanel").value;
//             const vnivel      = document.getElementById("nivel").value;
//             biblioteca.unshift(new obra(vapellido, vnombre, vtitulo, vpanel, vsubpanel, vnivel, "A"+(biblioteca.length+1)));
//             cargoTabla()                                                                     
//             break;

//         case 3:     //baja de una obra
//             //fBajaObra();
//             const confirma = prompt(kobra._apellido+", "+kobra._nombre+" "+kobra._titulo+"¿Confirma la eliminación de esta obra? SI o NO:")      
//             if (confirma === "SI"){
//                 biblioteca.splice(index,1);
//                 cargoTabla()
//             }
//             break;

//         case 4:     //modificación de una obra
//             //fModiObra();
//             kobra._apellido   = document.getElementById("apellido").value;
//             kobra._nombre     = document.getElementById("nombre").value;
//             kobra._titulo     = document.getElementById("titulo").value;
//             kobra._panel      = document.getElementById("panel").value;
//             kobra._subpanel   = document.getElementById("subpanel").value;
//             kobra._nivel      = document.getElementById("nivel").value;

//             //biblioteca.unshift(new obra(vapellido, vnombre, vtitulo, vpanel, vsubpanel, vnivel, "A"+(biblioteca.length+1)));

//             cargoTabla()
//             break;
//         case 5:     //Selecciono alguna/s obra/s
//             //seleObra();
//             break;
//         case 6:     //Ordenar segun ...,
//             //ordenObra();
//             break;
//         default:
//             alert("Debe seleccionar un PROCESO");
//             break;
//     }   
// }
//*Fin de biblioteca.js------------------------------------------------*