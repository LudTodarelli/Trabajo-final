//Trabajo Práctico Integrados:
//Integrantes: Sofia De Alessandre; Peralta Rocío Evangelina; Maria Paula Terreno; Ludmila Todarelli

//a) Crear un array de objetos llamado libros que contenga al menos 10
// libros. Cada libro debe tener las siguientes propiedades:
// ✓ id (número)
// ✓ titulo (string),
// ✓ autor (string),
// ✓ año (número),
// ✓ género (string),
// ✓ disponible (booleano).

let libros = [
  {
    id: 1,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 2,
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    anio: 1997,
    genero: "Fantasía",
    disponible: true,
  },
  {
    id: 3,
    titulo: "Una corte de rosas y espinas",
    autor: "Sarah J.Maas",
    anio: 2016,
    genero: "Romance",
    disponible: false,
  },
  {
    id: 4,
    titulo: "La biblioteca de la medianoche",
    autor: "Matt Haig",
    anio: 2020,
    genero: "Fantasía",
    disponible: true,
  },
  {
    id: 5,
    titulo: "Bodas de Odio",
    autor: "Florencia Bonelli",
    anio: 1998,
    genero: "Novela",
    disponible: false,
  },
  {
    id: 6,
    titulo: "La pianista",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    genero: "Ficción",
    disponible: false,
  },
  {
    id: 7,
    titulo: "Cien años de Soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    genero: "Ficción",
    disponible: false,
  },
  {
    id: 8,
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    anio: 2007,
    genero: "Fantasía",
    disponible: false,
  },
  {
    id: 9,
    titulo: "La casa de Bernarda Alba",
    autor: "Federico García Lorca",
    anio: 1936,
    genero: "Drama",
    disponible: true,
  },
  {
    id: 10,
    titulo: "La vegetariana",
    autor: "Han Kang",
    anio: 2007,
    genero: "Realismo",
    disponible: true,
  },
];

// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
// Cada usuario debe tener:
// ✓ id (número)
// ✓ nombre (string)
// ✓ email (string)
// ✓ librosPrestados (array de ids de libros).

let usuarios = [
  {  
    id: 1,
    nombre: "Sofia De Alessandre",
    email: "cofiadealessandre@gmail.com",
    librosPrestados: [],
  },
  {
    id: 2,
    nombre: "Corina Kang",
    email: "corinakang@gmail.com",
    librosPrestados: [7,8],
  },
  {
    id: 3,
    nombre: "Rocío Evangelina Peralta ",
    email: "rocioperalta@gmail.com",
    librosPrestados: [3],
  },
  {
    id: 4,
    nombre: "Maria Paula Terreno ",
    email: "paulaterreno@gmail.com",
    librosPrestados: [],
  },
  {
    id: 5,
    nombre: "Ludmila Todarelli ",
    email: "ludmilatodarelli@gmail.com",
    librosPrestados: [5,6],
  },
];

// 2 a)
// Implementar una función agregarLibro(id, titulo, autor, anio, genero)
//  que agregue un nuevo libro al array libros.

function agregarLibro(id, titulo, autor, anio, genero, disponible) {
  
  let nuevoLibro = {
    id: id,
    titulo: titulo,
    autor: autor,
    anio: anio,
    genero: genero,
    disponible: disponible,
  };
  libros.push(nuevoLibro);
}

agregarLibro(
  11,
  "El misterio del solitario",
  "Joistein Gaarder",
  1940,
  "Ficción",
  true
);

console.log(libros);

// 2 b)
// Crear una función buscarLibro(criterio, valor) que permita buscar libros por titulo,
//  autor o género utilizando el algoritmo de búsqueda lineal.

function buscarLibro(criterio, valor) {
  let existeLibro = libros.find((libro) => {
    if (criterio === "titulo") {
      return libro.titulo === valor;
    } else if (criterio === "autor") {
      return libro.autor === valor;
    } else if (criterio === "genero") {
      return libro.genero === valor;
    } else {
      console.log(
        "El valor ingresado no es válido. Ingrese título, autor o género buscado."
      );
    }
  });
  console.log(existeLibro);
}

buscarLibro("titulo", "El principito");

// 2. c)
// Desarrollar una función ordenarLibros(criterio) que ordene los libros por título
// o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y
// luego muestre los libros ordenados en la consola.



function ordenarLibros(criterio) {
  if (criterio === "anio") {
    libros.sort((a, b) => a.anio - b.anio);
  } else if (criterio === "titulo") {
    libros.sort((a, b) => {
      if (a.titulo > b.titulo) return 1;
      if (a.titulo < b.titulo) return -1;
      return 0;
    });
  } else {
    return "Criterio inválido";
  }

  return libros;
}

console.log(ordenarLibros("anio"));

//La función evalúa por año o por título, en el caso de año lo hace numéricamnente, por eso usa los parámetros A y B. En el caso de título, se le agrega un valor numérico, uno o menos uno, para que sort lo pueda entender y ordenar.

//2) d).

// Desarrollar una función borrarLibro(id) que elimine el libro 
// que se le pase por parámetro.

function borrarLibro(id) {
  let arrayLibroEliminado = [];
  arrayLibroEliminado = libros.filter(libro => libro.id !== id);
  return arrayLibroEliminado;
}

console.log(borrarLibro(1));



// 3 a) Implementar una función registrarUsuario(nombre, email) que
// agregue un nuevo usuario al array usuarios.

function registrarUsuario (id, nombre, email, librosPrestados ) {
    let nuevoUsuario = {
        id: id,
        nombre: nombre,
        email: email,
        librosPrestados: librosPrestados,       
    }
    usuarios.push(nuevoUsuario);
}

registrarUsuario(6, "Franco Ladrón de Guevara", "francoldg@gmail.com", []);

console.log(usuarios);


// 3.b)
// Implementar una función mostrarTodosLosUsuarios() 
// que me devuelva el array completo de usuarios.


function mostrarTodosLosUsuarios () {
  return usuarios
}
console.log(mostrarTodosLosUsuarios());


//3.c)
// Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.


function buscarUsuario(email) {
  let existeUsuario = usuarios.find((usuario) => usuario.email === email);
  return existeUsuario;
}


console.log(buscarUsuario("corinakang@gmail.com"));


// 3. d)

// Implementar una función borrarUsuario(nombre, email) 
// que elimine el usuario seleccionado.

function borrarUsuario (nombre, email) {
  let arrayUsuarioEliminado = [];
      arrayUsuarioEliminado = usuarios.filter((usuario) => usuario.nombre !== nombre || usuario.email !== email);
  return arrayUsuarioEliminado;

}

  console.log(borrarUsuario("Corina Kang", "corinakang@gmail.com"));



// 4. a)
// Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como 
// no disponible y lo agregue a la lista de libros prestados del usuario.

  function prestarLibro(idLibro, idUsuario) {
  let seEncontroLibro = libros.find((libro) => libro.id === idLibro);
  let seEncontroUsuario = usuarios.find((usuario) => usuario.id === idUsuario);

    if (!seEncontroLibro) {
    console.log("No se encontró el libro");
    return;
  }

  if (!seEncontroUsuario) {
    console.log("No se encontró el usuario.");
    return;
  }

  if (!seEncontroLibro.disponible) {
    console.log("El libro no está disponible.");
    return;
  }

  
  seEncontroLibro.disponible = false;
  seEncontroUsuario.librosPrestados.push(idLibro);
  

  return `Libro "${seEncontroLibro.titulo}" prestado a ${seEncontroUsuario.nombre}.`;
}

console.log(prestarLibro(2, 3));

// 4.B)
  // Implementar una función devolverLibro(idLibro, idUsuario) que marque un 
  // libro como disponible y lo elimine de la lista de libros prestados del usuario.




function devolverLibro(idLibro, idUsuario) {
let seEncontroLibro = libros.find((libro) => libro.id === idLibro);
seEncontroLibro.disponible = true;
  let seEncontroUsuario = usuarios.find((usuario) => usuario.id === idUsuario);
console.log(seEncontroUsuario);

       if (!seEncontroLibro) return "No se encontró el libro";
  if (!seEncontroUsuario) return "No se encontró el usuario";
  
  if (!seEncontroUsuario.librosPrestados.includes(idLibro)) {
    return `El usuario ${seEncontroUsuario.nombre} no tiene prestado el libro con id ${idLibro}.`; }

    seEncontroLibro.disponible = true;

    seEncontroUsuario.librosPrestados = seEncontroUsuario.librosPrestados.filter(
    (libro) => libro !== idLibro
  );

  return `Libro "${seEncontroLibro.titulo}" fue devuelto por ${seEncontroUsuario.nombre}.`;
}


console.log(devolverLibro(1, 5));

// 5. Reportes
// a)
// Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
// ✓
// Cantidad total de libros.
// ✓
// Cantidad de libros prestados.
// ✓
// Cantidad de libros por género.
// ✓
// Libro más antiguo y más nuevo

function generarReporteLibros (){

  // Cantidad total de libros.
  
 let cantidadTotalLibros = libros.length;
console.log(`Cantidad total de libros: ${cantidadTotalLibros}`);

// Cantidad de libros prestados.

let recorrerArrayPrestados = libros.filter((libro) => libro.disponible === false);
let cantidadTotalLibrosPrestados = recorrerArrayPrestados.length;
console.log(cantidadTotalLibrosPrestados);

// Cantidad de libros por género.

const cantidadTotalLibrosPorGenero = {};

  libros.forEach((libro) => {
    let genero = libro.genero;

    if (cantidadTotalLibrosPorGenero [genero]) {
      cantidadTotalLibrosPorGenero [genero]++;
    } else {
      cantidadTotalLibrosPorGenero [genero] = 1;
    }
  });

  console.log(cantidadTotalLibrosPorGenero );



  // Libro más antiguo y más nuevo
  
  const libroMasAntiguo = libros.reduce((min, libro) => {
    if (libro.anio < min.anio) {
             return  libro; 
    } else {
       return min;
    } ;
  });

  const libroMasNuevo = libros.reduce((max, libro) => {
   if (libro.anio > max.anio){
    return libro;
     } else {
      return max;
     }

  });

  return {
    cantidadTotalLibros,
    cantidadTotalLibrosPrestados,
    cantidadTotalLibrosPorGenero,
    libroMasAntiguo,
    libroMasNuevo,
  }

}
console.log(generarReporteLibros());

// 6. Identificación Avanzada de libros
// a)
// Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).
// b)
// La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.

function librosConPalabrasEnTitulo() {
  let arrayDeTitulosConMasDeUnaPalabra = [];

  libros.forEach((libro) => {
    let palabras = libro.titulo.split(" ");
    if (palabras.length > 1) { // más de una palabra
      arrayDeTitulosConMasDeUnaPalabra.push(libro.titulo);
    }
  });

  console.log(arrayDeTitulosConMasDeUnaPalabra);
}


librosConPalabrasEnTitulo();

// 7. Cálculos Estadísticos
// a)
// Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
// ✓
// Promedio de años de publicación de los libros.
// ✓
// Año de publicación más frecuente.

function calcularEstadisticas() {
  let aniosPublicacion = libros.map((libro) => libro.anio);
  console.log(aniosPublicacion);
  // ✓ Promedio de años de publicación de los libros.
  let sumarAnios = aniosPublicacion.reduce(
    (acumulador, actual) => acumulador + actual,
    0
  );
  console.log(sumarAnios);
  let promedioDeAñosPublicacion = sumarAnios / aniosPublicacion.length;
  let promedioRedondeado = Math.round(promedioDeAñosPublicacion);


  //******************************NOS FALTA RESOLVER ESTE: */
// ✓ Año de publicación más frecuente.

// function encontrarAnioMasFrecuente(anios) {
//   let maxRepeticiones = 0;
//   let anioMasFrecuente = 0;

//   for (let i = 0; i < aniosPublicacion.length; i++) {
//     let contador = 0;

//     for (let j = 0; j < aniosPublicacion.length; j++) {
//       if (libros.anio[i] === libros.anio[j]) {
//         contador++;
//       }
//     }

//     if (contador > maxRepeticiones) {
//       maxRepeticiones = contador;
//       anioMasFrecuente = libros.anio[i];
//     }
//   }
// console.log(anioMasFrecuente);

  
// console.log(encontrarAnioMasFrecuente());

// Diferencia en años entre el libro más antiguo y el más nuevo. 
let ordenarLibrosAnios = libros.sort((a, b) => a.anio - b.anio);
console.log(ordenarLibrosAnios)
let primerAnio = ordenarLibrosAnios.shift()
console.log(primerAnio.anio)
let ultimoAnio = ordenarLibrosAnios.pop()
console.log(ultimoAnio.anio)
let restaDeAnios = ultimoAnio.anio - primerAnio.anio

  return promedioRedondeado,
  restaDeAnios
}
console.log(calcularEstadisticas());

calcularEstadisticas();

// 8. Manejo de Cadenas 
// a) Crear una función normalizarDatos() que utilice métodos de strings 
// para: 
// ✓ Convertir todos los títulos a mayúsculas. 
// ✓ Eliminar espacios en blanco al inicio y final de los nombres de 
// autores. 
// ✓ Formatear los emails de los usuarios a minúsculas.

function normalizarDatos() {
  // ✓ Convertir todos los títulos a mayúsculas. 
  let titulosAMinuscula = libros.map((libro) => libro.titulo.toLowerCase())
  console.log(titulosAMinuscula)
  // ✓ Eliminar espacios en blanco al inicio y final de los nombres de 
// autores. 
let sinEspacios = libros.map((libro) => libro.autor.trim())
console.log(sinEspacios)
// ✓ Formatear los emails de los usuarios a minúsculas.
let emailAMinuscula = usuarios.map((usuario) => usuario.email.toLowerCase())
console.log(emailAMinuscula)
}
normalizarDatos()


// 9. Interfaz de Usuario por Consola
// a)
// Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().

// b)
// El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.


// agregarLibro
// buscarLibro
// ordenarLibros
// borrarLibro
// registrarUsuario
// mostrarTodosLosUsuarios 
// buscarUsuario -- Lud
// borrarUsuario 
// prestarLibro
// devolverLibro
// generarReporteLibros()
// librosConPalabrasEnTitulo()
//calcularEstadistica
// normalizarDatos

function menuPrincipal() {
  let opcion 
  do {
   opcion = prompt(`Seleccione una opción
1.agregarLibro,
2.buscarLibro,
3.ordenarLibros,
4.borrarLibro,
5.registrarUsuario,
6.mostrarTodosLosUsuarios, 
7.buscarUsuario,
8.borrarUsuario, 
9.prestarLibro,
10.devolverLibro,
11.generarReporteLibros,
12.librosConPalabrasEnTitulo,
13.calcularEstadisticas,
14.normalizarDatos,
15.salir`);

    switch(opcion) {
      case "1":
  const id = prompt(" Ingresa el ID del libro:");
  const titulo = prompt("Ingresa el titulo del libro:");
  const autor = prompt(" Ingresa el autor del libro:");
  const anio = prompt(" Ingresa el anio de publicacion:");
  const genero = prompt("Ingresa el genero del libro:");
  const disponible = prompt("Esta disponible? (true/false)");

  // agregarLibro(id, titulo, autor, anio, genero, disponible);
console.log(agregarLibro(id, titulo, autor, anio, genero, disponible));
        break;
      case "2":
        buscarLibro();
        break;
      case "3":
        ordenarLibros();
        break;
      case "4":
        generarReporteLibros();
        break;
      case "5":
        registrarUsuario();
       break;
      case "6":
        mostrarTodosLosUsuarios();
        break;
      case "7":
        buscarUsuario();
        break;
      case "8":
        borrarUsuario();
        break;
      case "9":
        prestarLibro();
        break;
      case "10":
        devolverLibro ();
        break;
      case "11":
        generarReporteLibros();
        break;
      case "12":
        librosConPalabrasEnTitulo();
        break;
      case "13":
        calcularEstadisticas();
        break;
      case "14":
        normalizarDatos();
        break;
      case "15":
        console.log("¡Hasta luego!");
        break;
      default:
        console.log("Opción inválida");
    }
  } while (opcion !== "15");
}

menuPrincipal();

