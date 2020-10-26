//1.- Crea el objeto Coche con las siguientes propiedades:
// marca, modelo y matricula y los métodos: acelerar {imprimirá por consola "a todo gas"} 
//y frenar {imprimirá por consola "cuidado con la abuelita en el paso de cebra"}

Coche = {
    marca: '' ,
    modelo: '',
    matricula: '', 
    acelerar: function() {
        console.log("a todo gas")
    },
    frenar: function() {
        console.log("cuidado con la abuelita en el paso de cebra")
    }
}

//2.- Crea la clase Turismo con las siguientes propiedades: 
//marca, modelo y matricula declaradas en el constructor y 
//los métodos: acelerar {imprimirá por consola "a todo gas"} y 
//frenar {imprimirá por consola "cuidado con la abuelita en el paso de cebra"}


class Turismo{
    constructor(marca,modelo,matricula,acelerar,frenar){
        this.marca = marca,
        this.modelo = modelo,
        this.matricula = matricula
    }
        acelerar() {
            console.log('a todo gas');
        }
        frenar() {
            console.log('cuidado con la abuelita en el paso de cebra');
        }
    }



//3.- Crea una nueva instancia de Turismo 
//(una instancia se crea con new Turismo(/*Valores de las propiedades*/)
// llamada miTurismo cuyas propiedades sean: marca: "Asiento", modelo: "Leon", matricula: "1234AAA"


const miTurismo = new Turismo("marca","modelo","matricula")
miTurismo.marca = "Asiento"
miTurismo.modelo = "Leon"
miTurismo.matricula = "1234AAA"


//4.- Crea una nueva instancia de Turismo 
//(una instancia se crea con new Turismo(/Valores de las propiedades/) 
//llamada miSegundoTurismo cuyas propiedades sean:
// marca: "Vuelve", modelo: "XC90", matricula: "1540GAB"

const miSegundoTurismo = new Turismo("marca","modelo","matricula")
miSegundoTurismo.marca = "Vuelve"
miSegundoTurismo.modelo = "XC90"
miSegundoTurismo.matricula = "1540GAB"

//5.- Crea una nueva clase Persona con las siguientes propiedades: 
//nombre, apellidos, edad, gustosMusicales y los métodos: 
//envejecer {aumentará en 1 la edad},
// nuevoGusto {aceptará como argumento un string y lo añadirá al array gustosMusicales}

class Persona {
    constructor (nombre, apellidos, edad, gustosMusicales) {
        this.nombre = nombre,
        this.apellidos = apellidos,
        this.edad = edad
        this.gustosMusicales = gustosMusicales
    }
    envejecer() {
        this.edad = this.edad +1;
        
    }
    nuevoGusto(s) {
        this.gustosMusicales.push(s)

    }
}

// 6.- Crea una nueva instancia de Persona 
//llamada rockero cuyas propiedades sean: nombre: "Freddie", apellidos: "Mercury", 
///"edad": 45, gustosMusicales: ["Queen", "AC/DC"]

const rockero = new Persona("nombre", "apellidos", "edad", "gustosMusicales")

rockero.nombre = "Freddie"
rockero.apellidos = "Mercury"
rockero.edad = 45
rockero.gustosMusicales = ["Queen", "AC/DC"]



// 7.- Crea una función aplicar__nuevoGusto que añada a rockero el gustoMusical 
//"My Chemical Romance" Que no te despiste que se pida una función, 
//solo es para poder pasar el test, aprovecha el método nuevoGusto


function aplicar__nuevoGusto(s) {
    rockero.nuevoGusto("My Chemical Romance")

}

//8.- Crea un array Perro que contenga los valores: 
//[nombre, raza, función popo {devuelve ("Ha hecho " + Math.random() * 3 + " caquitas")}]


let Perro = [
    "nombre", 
    "raza",
    function popo() {
        return ("Ha hecho " + Math.random() * 3 + " caquitas")
    },
]

//9.- Crea el objeto Perrito con las propiedades: 
//nombre, raza y el método popo {devuelve ("Ha hecho " + Math.random() * 3 + " caquitas")}

Perrito = {
    nombre: '',
    raza: '',
    popo: function() {
        return ("Ha hecho " + Math.random() * 3 + " caquitas")
    },
    
}

// 10.- Crea la clase Perrazo con las propiedades: 
//nombre, raza y el método popo {devuelve ("Ha hecho " + Math.random() * 3 + " caquitas")}


class Perrazo{
    constructor(nombre,raza,popo) {
        this.nombre = nombre,
        this.raza = raza
    }
    popo() {
        return ("Ha hecho " + Math.random() * 3 + " caquitas")
    }
}

// 11.- Crea una nueva instancia de Perrazo llamada lebrelazo cuyas propiedades sean: 
//nombre: "Gus", raza: "Lebrel"

const lebrelazo = new Perrazo ("nombre", "raza")

lebrelazo.nombre = "Gus"
lebrelazo.raza = "Lebrel"

//Nivel Intermedio

// 12.- Crea la clase Husky que extienda la clase Perrazo (class Husky extends Perrazo)
// y añade la propiedad: heterocromia (booleano), 
//la propiedad raza siempre será "Husky" y 
//el método tieneHeterocromia (imprime por console "si" o "no" en base a la propiedad heterocromia)


}


//13.- Crea una nueva instancia de Husky llamada miHusky cuyas propiedades sean: nombre: "Alaska", "heterocromia": true



// 14.- Crea la clase Coordenadas con las propiedades: x, y

//15.- Crea la clase Jugador con las propiedades: posicion (instancia de coordenadas), fuerza, velocidad (instancia de coordenadas),
// direccion (instancia de coordenadas) vida y los métodos: moverse {posicion.x += velocidad.x * direccion.x, posicion.y += velocidad.y * direccion.y}, perderVida {vida -= 1}