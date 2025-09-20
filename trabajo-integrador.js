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


//   function devolverLibro(idLibro, idUsuario) {
//     let buscarLibro = libros.find((libro) => libro.id === idLibro);
//   let buscarUsuario = usuarios.find((usuario) => usuario.id === idUsuario);
// console.log(buscarLibro);
//   if (buscarLibro.disponible == false) {
//   buscarLibro.disponible == true;
//   buscarUsuario.librosPrestados.pop(id.libro);
//   console.log(buscarUsuario);
// }  

// }

// console.log(devolverLibro(2,3));



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
// function promedio(libro) {
//    let añosPublicacion = libros.map((libro) => libro.anio)
//   let suma = libros.reduce((acc, num) => acc + num, 0);
//   return Math.round(suma / libro.length); 
// }

// console.log(promedio(libros)); // 13


// }

const anios = libros;

// 1. Sumar todos los años
const suma = anios.reduce((acumulador, actual) => acumulador + actual, 0);

// 2. Calcular el promedio
const promedio = suma / anios.length;

// 3. Opcional: redondear usando Math (por ejemplo, Math.round)
const promedioRedondeado = Math.round(promedio);

console.log("Promedio exacto:", promedio);            // 6.6
console.log("Promedio redondeado:", promedioRedondeado); // 7

}

calcularEstadisticas();

