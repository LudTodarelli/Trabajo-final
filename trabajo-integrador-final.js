//Trabajo Práctico Integrados:
//Integrantes: Sofia De Alessandre; Kang, Corina; Peralta Rocío Evangelina; Maria Paula Terreno; Ludmila Todarelli

//a) Crear un array de objetos llamado libros que contenga al menos 10
// libros. Cada libro debe tener las siguientes propiedades:
// ✓ id (número)
// ✓ titulo (string),
// ✓ autor (string),
// ✓ año (número),
// ✓ género (string),
// ✓ disponible (booleano).

//EXPLICACIÓN : tanto en el punto 1 inciso a, como en el inciso b, realizamos los arrays con los titulos, libros y usuarios que serán los dos objetos que necesitamos para poder trabajar en este proyecto. Dentro de los mismos, registramos las propiedades que deseamos que ese libro tenga (como: id, título, autor, género, y si está o no disponible para prestar). Luego el array llamado "usuario" con las propiedades dentro que deseamos que tengan (id, nombre, email y si tiene o no libros prestados).

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
    titulo: " 1 corte de rosas y espinas",
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
    titulo: "!Bodas de Odio",
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
    anio: 2005,
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
    email: "sofiadealessandre@gmail.com",
    librosPrestados: [],
  },
  {
    id: 2,
    nombre: "Corina Kang",
    email: "corinakang@gmail.com",
    librosPrestados: [7, 8],
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
    librosPrestados: [5, 6],
  },
];

// 2 a)
// Implementar una función agregarLibro(id, titulo, autor, anio, genero)
//  que agregue un nuevo libro al array libros.

//EXPLICACIÓN: Realizamos una función llamda "agregarLibros" donde le pasamos los parámetros que deseabamos que "nuevoLibro" tenga agregados. Luego dentro le creamos una variable para poder guardar esos nuevos datos ingresados, y al finalizar, le realizamos un push, para que lo agregue al array original en el último lugar.

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

  console.log("El libro " + titulo + " fue agregado.");
}
// Ejemplo para probar el correcto uso de la función.
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

//EXPLICACIÓN: Realizamos una función con parámetros de criterio y valor, para luego dentro poner una variable que se encargue de buscar en el array de los libros  el libro que deseamos (por eso elegimos el find). Dentro un if, donde nos permite organizar la búsqueda según título, autor o género. Si ninguno de eso valores ingresados son correctos, actuaría el else, avisando al usuario que su valor es incorrecto. El console log solo nos permite ver en consola lo guardado en la variable que estamos intentado ver.

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

//EXPLICACIÓN: Aquí realizamos una función llamada ordenarLibros con un parámetro llamado criterio que nos permite realizar la búsqueda por año o por título. Dependiendo de ese criterio ingresado con el sort, ordenamos los libros de forma ascendente, apoyándonos en un if que nos permite separa la búsqueda primero por año comparando cada libro por su propiedad numérica, y si es por titulo, se los ordena alfabéticamente, pero retornando un valor número (1, -1 o 0). Dependiendo de ese resultado va permitiendo acomodarlos (por ejemplo si a es mayor b). El else de nuestro if nos permite retornar si el criterio ingresado no es válido. Finalmente llamamos a la función, la retornamos con el array ordenado y se imprime en consola el resultado.

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

//2) d).

// Desarrollar una función borrarLibro(id) que elimine el libro
// que se le pase por parámetro.

//EXPLICACIÓN:
// Realizamos la función borrarLibro con el parámetro id, donde dentro, creamos un array de libro vacío donde luego se guardará el id del libro a borrar. La función con el find busca eliminar el libro con el id que le pasemos, devolviendo un nuevo array donde está todos los libros, menos el borrado.

function borrarLibro(id) {
  let arrayLibroEliminado = [];
  arrayLibroEliminado = libros.filter((libro) => libro.id !== id);
  return arrayLibroEliminado;
}

console.log(borrarLibro(1));

// 3 a) Implementar una función registrarUsuario(nombre, email) que
// agregue un nuevo usuario al array usuarios.

//EXPLICACIÓN: Aquí realizamos un función llamada "registrarUsuario",a la cual le pasamos los siguientes parámetros: id, nombre, email y libros prestados, teniendo como fin agregar un nuevo usuario a nuestro array. Con toda esta información, creamos un objeto que representaría el nuevo usuario, dentro de una variable. Luego a ese objeto lo agregamos con un push al array original, llamamos a la función para ejecutarla y mostramos en consola, la lista actualizada.

function registrarUsuario(id, nombre, email, librosPrestados) {
  let nuevoUsuario = {
    id: id,
    nombre: nombre,
    email: email,
    librosPrestados: librosPrestados,
  };
  usuarios.push(nuevoUsuario);
  return usuarios;
}

registrarUsuario(6, "Franco Ladrón de Guevara", "francoldg@gmail.com", []);

console.log(usuarios);

// 3.b)
// Implementar una función mostrarTodosLosUsuarios()
// que me devuelva el array completo de usuarios.

//EXPLICACIÓN:  Aquí realizamos una nueva función con el objetivo de mostrar todos los usuarios, es decir nuestro array actualizado. Con el console.log, lograrmos verlos en consola.

function mostrarTodosLosUsuarios() {
  return usuarios;
}
console.log(mostrarTodosLosUsuarios());

//3.c)
// Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

//EXPLICACIÓN:
//Realizamos una función llamada "buscarUsuario" con el parámetro email, con el objetivo de buscar un usuario sólo brindando su email como referencia (parámetro). Dentro de dicha función colocamos una variable, que se encargará de buscar mediante el find, dentro del array usuarios, email por email, de todos los usuarios. Luego se llama a la función para poder ejecutarla y nos devuelve el usuario buscado.

function buscarUsuario(email) {
  let existeUsuario = usuarios.find((usuario) => usuario.email === email);
  return existeUsuario;
}

console.log(buscarUsuario("corinakang@gmail.com"));

// 3. d)

// Implementar una función borrarUsuario(nombre, email)
// que elimine el usuario seleccionado.

//EXPLICACIÓN:

// Realizamos la funcián llamada "borrarUsuario", con los parámetros nombre e email, con el fin de eliminar a un usuario de lista, a partir de estos dos datos. Dentro de la función creamos una variable, en un principio con un array vacio, que será el encarcado de guardar los datos ingresados para luego poder disponer de ellos. De esta forma se completa "arrayUsuarioEliminado", sin el usuario que coincida con el nombre y el email que se ingresó, devolviéndonos un nuevo arreglo.Luego se llama a la función para que se pueda ejecutar y haga lo que le hemos solicitado realizar.

function borrarUsuario(nombre, email) {
  let arrayUsuarioEliminado = [];
  arrayUsuarioEliminado = usuarios.filter(
    (usuario) => usuario.nombre !== nombre || usuario.email !== email
  );
  return arrayUsuarioEliminado;
}

console.log(borrarUsuario("Corina Kang", "corinakang@gmail.com"));

// 4. a)
// Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.

//EXPLICACIÓN:

// Creamos aquí una función llamada "prestarLibro", con el objetivo de lograr prestar un libro a un usuario. Para ello, pasamos como parámetro la propiedad id de libro y el id de usuario de nuestros arrays. Realizamos dos variables donde dentro le pedimos que mediante la propiedad find, busque los id que le pasamos como prarámetros. El resultado de esta búsqueda se guarda en dichas variables. Luego, mediante un if, buscamos realizar una validación donde verificamos si se ha encontrado  el libro o no y los usuarios pasados por parámetro, y si el libro está o no disponible.
// Si el libro está disponible, cambia su estado de true a false ya que pasa a estar prestado y por último con el push agregamos el id del libro a la lista de libros prestados del usuario.
//Finalmente devolvemos con un retorno un mensaje que nos diga que libro ha sido prestado y a quién.

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

//EXPLICACIÓN:

// Realizamos una función llamada devolverLibro, donde le pasamos como parametro los id de usuario y de libro. Se crea una variable donde se guardará la busqueda mediante un find en el array libros, del id que coincida con los parametros dados.
// Realizamos el mismos procedimiento de búsqueda con el find mendiante el id pasado como parametro en el array de los usuarios. También validamos si el libro o el usuario no se encontraron, devolviendo así un mensaje de error.  Con el ultimo if, verificamos si el id de ese libro realmente le ha sido prestado a ese id de usuario. Si no lo tiene se devuelve un mensaje diciendo que no lo posée. Luego de encontrar dicho libro lo marcamos como dispobible ya que ha sido devuelto. Por último,mediante el filter, en seEncontroUsuario.librosPrestados, se borra el id del libro de la lista de libros prestados del usuario pasado.

function devolverLibro(idLibro, idUsuario) {
  let seEncontroLibro = libros.find((libro) => libro.id === idLibro);
  let seEncontroUsuario = usuarios.find((usuario) => usuario.id === idUsuario);
  console.log(seEncontroUsuario);

  if (!seEncontroLibro) return "No se encontró el libro";
  if (!seEncontroUsuario) return "No se encontró el usuario";

  if (!seEncontroUsuario.librosPrestados.includes(idLibro)) {
    return `El usuario ${seEncontroUsuario.nombre} no tiene prestado el libro con id ${idLibro}.`;
  }

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
// ✓ Cantidad total de libros.
// ✓ Cantidad de libros prestados.
// ✓ Cantidad de libros por género.
// ✓ Libro más antiguo y más nuevo


//EXPLICACIÓN: En esta función queremos generar un reporte general de los libros que tenemos en nuestra biblioteca. Recorremos nuestro array de libros para obterner varios datos útiles, como la cantidad total de libros, cuántos están prestados, cuántos hay por género, cuál es el más antiguo o el más nuevo utilizando length para contar cuántos libros hay en total dentro del arreglo libros. Utilizamos métodos avanzados como lo solicita la consigna. En el caso de .filter, lo utilizamos para filtrar entre aquellos libros que no se encontraban disponibles (es decir, que su disponibilidad era false). Por otro lado, el .reduce fue utilizado para poder establecer una comparación entre los años más antiguos y más nuevos de los libros. 


function generarReporteLibros() {
  // Cantidad total de libros.

  let cantidadTotalLibros = libros.length;
  console.log(`Cantidad total de libros: ${cantidadTotalLibros}`);

  // Cantidad de libros prestados.

  let recorrerArrayPrestados = libros.filter(
    (libro) => libro.disponible === false
  );
  let cantidadTotalLibrosPrestados = recorrerArrayPrestados.length;
  console.log(
    "La cantidad de libros prestados es " + cantidadTotalLibrosPrestados
  );

  // Cantidad de libros por género.

  const cantidadTotalLibrosPorGenero = {};

  libros.forEach((libro) => {
    let genero = libro.genero;

    if (cantidadTotalLibrosPorGenero[genero]) {
      cantidadTotalLibrosPorGenero[genero]++;
    } else {
      cantidadTotalLibrosPorGenero[genero] = 1;
    }
  });

  console.log(cantidadTotalLibrosPorGenero);

  // Libro más antiguo y más nuevo

  const libroMasAntiguo = libros.reduce((min, libro) => {
    if (libro.anio < min.anio) {
      return libro;
    } else {
      return min;
    }
  });

  const libroMasNuevo = libros.reduce((max, libro) => {
    if (libro.anio > max.anio) {
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
  };
}
console.log(generarReporteLibros());

// 6. Identificación Avanzada de libros
// a)
// Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).
// b)
// La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.

//EXPLICACIÓN: En este caso, utilizamos el método .forEach para poder recorrer el array libros. A su vez, elegimos usar un split para poder convertir el valor de la propiedad "titulo" en subcadenas de strings y, de esa forma, poder contabilizarlas. De esta forma, creamos el array "arrayDeTitulosConMasDeUnaPalabra", al cual se le agregarán aquellos títulos que cumplan con la condición del if. Por último, se agregó la variable soloLetras a la cual le asignamos el valor de una expresión regular para poder filtar aquellos títulos que contengan números u otros caracteres especiales. 



function librosConPalabrasEnTitulo() {
  let arrayDeTitulosConMasDeUnaPalabra = [];

  libros.forEach((libro) => {
    let palabras = libro.titulo.split(" ");
    
    
    let tieneVariasPalabras = palabras.length > 1;

    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(libro.titulo);

    if (tieneVariasPalabras && soloLetras) {
      arrayDeTitulosConMasDeUnaPalabra.push(libro.titulo);
    }
  });

  console.log(arrayDeTitulosConMasDeUnaPalabra);
  return arrayDeTitulosConMasDeUnaPalabra;
}

librosConPalabrasEnTitulo();


// 7. Cálculos Estadísticos
// a)
// Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
// ✓
// Promedio de años de publicación de los libros.
// ✓
// Año de publicación más frecuente.

//EXPLICACIÓN: Creamos la función "calcularEstadisticas" para analizar los datos de los libros. Utilizamos el objeto datos para almacenar los resultados parciales que ibamos a necesitar para poder realizar lo solicitado por la consigna. Elegimos usar un ciclo for para poder recorrer los libros del array y utilizamos la lógica del if para poder obtener información pertinente(como el año más antiguo y más reciente, así como  contar la frecuencia de cada año de publicación). El objeto Math fue utilizado para poder obtener un número entero en el cálculo del promedio de año de publicación. Finalmente y ya fuera de la función, declaramos una variable "estadisticas" con el valor de la función "calcularEstadisticas", para poder acceder a la información del objeto "datos" de una forma más sencilla y así poder imprimirlo mediante el console.log. 

function calcularEstadisticas() {
  const datos = {
    suma: 0,
    anioMenor: 0,
    anioMayor: 0,
    anioMayorCantidadPublicaciones: 0,
    promedio: 0,
  };

  for (let index = 0; index < libros.length; index++) {
    const anioPublicacion = libros[index].anio;
    datos.suma += anioPublicacion;
    datos[anioPublicacion] = (datos[anioPublicacion] || 0) + 1;
   

    if (datos.anioMenor == 0 || anioPublicacion < datos.anioMenor) {
      datos.anioMenor = anioPublicacion;
    }
    if (anioPublicacion > datos.anioMayor) {
      datos.anioMayor = anioPublicacion;
    }
    if (datos[anioPublicacion] > datos.anioMayorCantidadPublicaciones) {
      datos.anioMayorCantidadPublicaciones = anioPublicacion;
    }
  }

 

  datos.promedio = Math.ceil(datos.suma / libros.length);

  return datos;
}
const estadisticas = calcularEstadisticas();
console.log(
  `Promedio de años de publicación de los libros: ${estadisticas.promedio}`
);
console.log(
  `Año de publicación más frecuente: ${estadisticas.anioMayorCantidadPublicaciones}`
);
console.log(
  `Diferencia en años entre el libro más antiguo y el más nuevo: ${
    estadisticas.anioMayor - estadisticas.anioMenor
  } años.`
);

// 8. Manejo de Cadenas
// a) Crear una función normalizarDatos() que utilice métodos de strings
// para:
// ✓ Convertir todos los títulos a mayúsculas.
// ✓ Eliminar espacios en blanco al inicio y final de los nombres de
// autores.
// ✓ Formatear los emails de los usuarios a minúsculas.

// EXPLICACIÓN: La función "normalizarDatos" tiene como objetivo estandarizar la información provista por el usuario. Por este motivo, utilizamos el método map para poder recorrer el array con el fin de que este sea modificado de acuerdo a los métodos de strings que se amoldan a lo solicitado: que los títulos pasen a estar en mayúscula (toUpperCase), que se eliminen posibles espacios en blanco al inicio y final de los nombres de los autores (trim) y formatear los emails a minúscula(toLowerCase).

function normalizarDatos() {
  // ✓ Convertir todos los títulos a mayúsculas.
  let titulosAMayuscula = libros.map((libro) => libro.titulo.toUpperCase());
  console.log(titulosAMayuscula);
  // ✓ Eliminar espacios en blanco al inicio y final de los nombres de
  // autores.
  let sinEspacios = libros.map((libro) => libro.autor.trim());
  console.log(sinEspacios);
  // ✓ Formatear los emails de los usuarios a minúsculas.
  let emailAMinuscula = usuarios.map((usuario) => usuario.email.toLowerCase());
  console.log(emailAMinuscula);
}
normalizarDatos();

// 9. Interfaz de Usuario por Consola
// a)
// Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().

// b)
// El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

//EXPLICACIÓN: La función "menuPrincipal" se diseñó para que el usuario pueda interactuar con el sistema de la biblioteca. Se utilizó un bucle do while para que el menú se muestre al menos una vez y se repita hasta que el usuario decida salir. Decidimos utilizar un switch para evaluar la opción que el usuario ingresa a través de la función prompt. Cada case dentro del switch llama a la función correspondiente, como agregarLibro o buscarUsuario, y el break detiene la ejecución. De esta manera, el código cumple con el requisito de ofrecerle al usuario disponibilidad total sobre el sistema y la información que el él reside.

function menuPrincipal() {
  let opcion;
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

    switch (opcion) {
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
        const valorIngresado = prompt(
          "Ingrese un ejemplo de título, valor o género"
        );
        buscarLibro(criterioIngresado, valorIngresado);
        break;

      case "3":
        const criterioBuscado = prompt(" Ingresa titulo o anio");
        console.log(ordenarLibros(criterioBuscado));
        break;

      case "4":
        generarReporteLibros();
        break;

      case "5":
        const idIngresado = parseInt(prompt(" Ingresa el ID del usuario"));
        const nombreIngresado = prompt(" Ingresa el nombre del usuario");
        const emailIngresado = prompt(" Ingresa el email del usuario");
        const librosPrestadosIngresado = parseInt(
          prompt(" Ingresa los libros prestados del usuario")
        );
        console.log(
          registrarUsuario(
            idIngresado,
            nombreIngresado,
            emailIngresado,
            librosPrestadosIngresado
          )
        );

        break;

      case "6":
        console.log(mostrarTodosLosUsuarios());

        break;

      case "7":
        const emailBuscado = prompt(" Ingresa el email del usuario");
        console.log(buscarUsuario(emailBuscado));

        break;

      case "8":
        const nombreEliminar = prompt(" Ingresa el nombre del usuario");
        const emailEliminar = prompt(" Ingresa el email del usuario");
        console.log(borrarUsuario(nombreEliminar, emailEliminar));
        break;

      case "9":
        const idLibroPrestado = parseInt(prompt(" Ingresa el id del libro"));
        const idUsuarioPrestado = parseInt(
          prompt(" Ingresa el id del usuario")
        );
        console.log(prestarLibro(idLibroPrestado, idUsuarioPrestado));
        break;

      case "10":
        const idLibroDevolver = parseInt(prompt(" Ingresa el id del libro"));
        const idUsuarioDevolver = parseInt(
          prompt(" Ingresa el id del usuario")
        );
        console.log(devolverLibro(idLibroDevolver, idUsuarioDevolver));
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
