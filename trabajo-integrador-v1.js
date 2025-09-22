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
    genero: "Fantasía Romántica",
    disponible: true,
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
    disponible: true,
  },
  {
    id: 6,
    titulo: "La pianista",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 7,
    titulo: "Cien años de Soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 1,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 1,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 1,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 1,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    genero: "Ficción",
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
    nombre: "",
    email: "",
    librosPrestados: [],
  },
  {
    id: 1,
    nombre: "",
    email: "",
    librosPrestados: [],
  },
  {
    id: 1,
    nombre: "",
    email: "",
    librosPrestados: [],
  },
  {
    id: 1,
    nombre: "",
    email: "",
    librosPrestados: [],
  },
  {
    id: 1,
    nombre: "",
    email: "",
    librosPrestados: [],
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

// Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

function borrarLibro(id) {
  let arrayLibroEliminado = [];
  arrayLibroEliminado = libros.filter(libro => libro.id !== id);
  return arrayLibroEliminado;
}

console.log(borrarLibro(1));

//2) d).
// Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

function borrarLibro(id) {
  let arrayLibroEliminado = [];
  arrayLibroEliminado = libros.filter(libro => libro.id !== id);
  return arrayLibroEliminado;
}

console.log(borrarLibro(1));

// 3 a) Implementar una función registrarUsuario(nombre, email) que
// agregue un nuevo usuario al array usuarios.

// function registrarUsuario (id, nombre, mail, librosPrestados ) {
//     let nuevoUsuario = {
//         id: id,
//         nombre: nombre,
//         mail: mail,
//         librosPrestados: librosPrestados,       
//     }
//     usuarios.push(nuevoUsuario);
// }

// registrarUsuario(6, "Franco Ladrón de Guevara", "francoldg@gmail.com", []);

// console.log(usuarios);


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
        agregarLibro(id, titulo, autor, anio, genero, disponible);
        break;
     
      case "2":
        const criterioIngresado = prompt("Ingrese título, valor o género");
        const valorIngresado = prompt("Ingrese un ejemplo de título, valor o género");
        buscarLibro(criterioIngresado, valorIngresado);
      break;

      case "3":
        const criterioBuscado = prompt(" Ingresa titulo o anio");
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

