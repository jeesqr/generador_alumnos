// Variables globales
var salida = "";

// Arreglos con mínimo 100 elementos cada uno
const apellidosMexico = [
    "Hernández", "García", "Martínez", "López", "González",
    "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez",
    "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo",
    "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos",
    "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
    "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva",
    "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras",
    "León", "Ríos", "Estrada", "Bautista", "Meza",
    "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava",
    "Lara", "Pacheco", "Soto", "Cervantes", "Robledo",
    "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón",
    "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza",
    "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés",
    "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara",
    "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro",
    "Parra", "Villalobos", "Duarte", "Serrano", "Ávila",
    "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"
];

const apellidosRusos = [
    "NULL", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Sokolov", "Mikhailov", "Novikov",
    "Fedorov", "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov",
    "Nikolaev", "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev", "Soloviev", "Belov", "Komarov", "Grigoriev",
    "Romanov", "Pakhomov", "Antonov", "Tarasov", "Medvedev", "Zhukov", "Frolov", "Baranov", "Kulikov", "Gavrilov",
    "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev", "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev",
    "Demidov", "Larionov", "Timofeev", "Savelyev", "Ignatov", "Kapustin", "Ryabov", "Dorofeev", "Melnikov", "Fomin",
    "Tikhonov", "Golubev", "Sergeev", "Mironov", "Lapshin", "Seleznev", "Prokhorov", "Ustinov", "Borodin", "Martynov",
    "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov", "Sapozhnikov", "Kiselev", "Rozhkov", "Kravtsov",
    "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov", "Goncharov", "Karpov", "Lytkin",
    "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Ostrovsky", "Meshkov", "Shuvalov", "Plotnikov", "Gordeev"
];

const nombresMexicanos = [
    "Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
    "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián",
    "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
    "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
    "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
    "Emiliano", "Santiago", "Máximo", "Camilo", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista",
    "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"
];

const nombresFranceses = [
    "Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard",
    "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent",
    "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc",
    "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric",
    "Sophie", "Marie", "Camille", "Julie", "Claire", "Élise", "Chloé", "Manon", "Lucie", "Pauline",
    "Laura", "Émilie", "Caroline", "Sandrine", "Valérie", "Nathalie", "Isabelle", "Catherine", "Brigitte", "Monique",
    "Amandine", "Aurélie", "Justine", "Mélanie", "Anaïs", "Océane", "Margaux", "Noémie", "Léa", "Inès",
    "Zoé", "Agathe", "Maëlle", "Élodie", "Clara", "Romane", "Salomé", "Maëva", "Tiphaine", "Constance",
    "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott",
    "Lina", "Nina", "Aya", "Yasmine", "Imane", "Farah", "Sarah", "Nour", "Mariam", "Leïla"
];

// Función principal que determina qué generar según la opción
function generar() {
    var opcion = document.getElementById("opcion").value;
    
    switch (opcion) {
        case "1": 
        case "2": 
            generarSQL(); 
            break;
        case "3": 
            generarCSV(); 
            break;
        case "4": 
            generarJSON(); 
            break;
    }
}

// Función para generar SQL
function generarSQL() {
    var matricula = 224250000;
    var registros = parseInt(document.getElementById('registros').value);
    var opcion = document.getElementById("opcion").value;
    
    if (opcion == "1") {
        salida = "INSERT INTO alumnos (expediente, app1, app2, nombres, correo) VALUES \n";
    } else {
        salida = "INSERT INTO alumnos (expediente, app1, app2, nombres, correo) VALUES \n";
    }
    
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        
        // Generar nombre(s)
        let nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        if (tieneSegundoNombre) {
            let nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombre += " " + nombreFrances;
        }
        
        // Manejar segundo apellido
        let segundoApellido;
        if (apellidoRuso === "NULL") {
            segundoApellido = "NULL";
        } else {
            if (opcion == "1") { // MySQL
                segundoApellido = `'${apellidoRuso}'`;
            } else { // PostgreSQL
                segundoApellido = `'${apellidoRuso}'`;
            }
        }
        
        // Construir la línea SQL
        let linea = `(${matricula + i}, '${apellidoMex}', ${segundoApellido}, '${nombre}', 'a${matricula + i}@unison.mx')`;
        
        if (i < registros - 1) {
            linea += ",\n";
        } else {
            linea += ";";
        }
        
        salida += linea;
    }
    
    document.getElementById("salida").innerHTML = salida;
}

// Función para generar CSV
function generarCSV() {
    salida = "expediente,apellido1,apellido2,nombres,correo\n";
    var matricula = 224250000;
    var registros = parseInt(document.getElementById('registros').value);
    
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        
        // Generar nombre(s)
        let nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        if (tieneSegundoNombre) {
            let nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombre += " " + nombreFrances;
        }
        
        // Manejar segundo apellido
        let segundoApellido = (apellidoRuso === "NULL") ? "" : apellidoRuso;
        
        salida += `${matricula + i},${apellidoMex},${segundoApellido},${nombre},a${matricula + i}@unison.mx\n`;
    }
    
    document.getElementById("salida").innerHTML = salida;
}

// Función para generar JSON
function generarJSON() {
    var matricula = 224250000;
    var registros = parseInt(document.getElementById('registros').value);
    
    let alumnos = [];
    
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        
        // Generar nombre(s)
        let nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        if (tieneSegundoNombre) {
            let nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombre += " " + nombreFrances;
        }
        
        // Manejar segundo apellido
        let segundoApellido = (apellidoRuso === "NULL") ? null : apellidoRuso;
        
        let alumno = {
            expediente: matricula + i,
            apellido1: apellidoMex,
            apellido2: segundoApellido,
            nombres: nombre,
            correo: `a${matricula + i}@unison.mx`
        };
        
        alumnos.push(alumno);
    }
    
    salida = JSON.stringify(alumnos, null, 2);
    document.getElementById("salida").innerHTML = salida;
}

// Función para guardar archivo
function guardarArchivo() {
    var var1 = document.createElement("a");
    var opcion = document.getElementById("opcion").value;
    var nombreArchivo = "";
    
    switch (opcion) {
        case "1": 
            nombreArchivo = "alumnos_mysql.sql";
            alert("Generando archivo SQL MySQL");
            break;
        case "2":
            nombreArchivo = "alumnos_postgresql.sql";
            alert("Generando archivo SQL PostgreSQL");
            break;
        case "3":
            nombreArchivo = "alumnos.csv";
            alert("Generando archivo CSV");
            break;
        case "4":
            nombreArchivo = "alumnos.json";
            alert("Generando archivo JSON");
            break;
    }
    
    var1.setAttribute("href", "data:text/plain;charset=UTF-8," + encodeURIComponent(salida));
    var1.setAttribute("download", nombreArchivo);
    var1.style.display = "none";
    document.body.appendChild(var1);
    var1.click();
    document.body.removeChild(var1);
}