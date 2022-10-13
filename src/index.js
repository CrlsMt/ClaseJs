//Object Literal Syntax
const circle = {
  //Propiedades
  radius: 1,
  color: "Blue",
  isDrawed: false,
  location: {
    x: 1,
    y: 2
  },

  //Métodos
  draw: function () {
    console.log("Dibujando...");
  }
};

//Si quisiera crear otro círculo, se tendria que duplicar el código.
//Cuando un objeto tien un método o más, se dice que tiene comportamiento (behavior)

console.log(circle.location);
circle.draw();

//Si se requiere crear más de una instancia, se puede usar un Factory
function factoryStudent(name, semester) {
  return {
    name,
    semester,
    subjects: ["Front End"],
    greet: function () {
      console.log("Hola", name);
    }
  };
}

const student1 = factoryStudent("Felipe", 4);
console.log(student1.name);
student1.greet();

//También se puede con una función constructora
function ConstructorStudent(name, semester) {
  console.log("This", this);
  this.name_std = name;
  this.semester = semester;
  this.subjects = [];
  this.greet = function () {
    console.log("Hola", name);
  };
}
const student2 = new ConstructorStudent("Perengano", 2);
student2.greet();
console.log(student1.constructor);

/*Al utilizar el operador new, realiza:
1.- Crear un objeto vacío con {}
2.- Asigna this para que apunte a este objeto, porque por defecto
apunta al objeto global, lo cual es mala práctica.
3.- Devuelve el objeto creado por la función
El return this se hace implícitamente
 */

const FunctionStudent = new Function(
  "name, semester",
  `
this.name_std = name;
  this.semester = semester;
  this.subjects = [];
  this.greet = function () {
    console.log("Hola", name);
  };
`
);
const functionStudent = new FunctionStudent("Zutano Algo", 5);
ConstructorStudent.call({}, "Fulanito", 3);
ConstructorStudent.apply({}, ["Manganito", 7]);

/*
Los elementos en Javascript se clasifican en 2 tipos:
 - Value Types.- Number, String, Boolean, Symbol, undefined, null
 - Reference Types.- Object, Function, Array
 Como los Function y Array también son objetos, los Reference Types son solamente objetos.
*/

let x = 10;
let y = x;
y = 20;
console.log(x); //x Y y son totalmente independientes porque se copian por valor.

let xo = { value: 10 };
let yo = xo;
yo.value = 20;
console.log(xo); // xo y yo están enlazados porque están uniendo su referencia.

let n = 15;
function duplicate(number) {
  number *= 2;
}
duplicate(n);
console.log("Duplicate con Number:", n);

let no = { value: 15 };
function duplicateObj(obj) {
  obj.value *= 2;
}
duplicateObj(no);
console.log("Duplicate con Object:", no);

/*AÑADIR COSAS A UN OBJETO */
student2.control = "09550222";
student2["nip"] = "1324";

student2["otra-cosa"] = "asndoi";
//student2.algo-mas = "asjd nsdiufn"; NO SE PUEDE

//ITERAR ELEMENTOS DE UN OBJETO
console.log("Iterar elementos de student2:-------");
let key;
for (key in student2) {
  //console.log(key, student2[key])
}

console.log("Solamente las propiedades:-----");

for (key in student2) {
  if (typeof student2[key] !== "function") {
    //console.log(key, student2[key])
  }
}

const keys = Object.keys(student2);
//console.log("Desde Object.keys", keys);

//También se puede con una función constructora
function StudentProperties(name, semester) {
  //console.log("This", this);
  this.name_std = name;
  let pin = "1234"; //Propiedad privada
  this.semester = semester;
  this.subjects = [];
  this.hash = function () {
    let s = pin.split("");
    let num = s.map(Number);
    const helperSum = function (acc, curr) {
      return acc + curr;
    };
    return num.reduce(helperSum, 0);
  };

  this.toString = function () {
    //Shadowing
    return this.name_std;
  };

  this.greet = function () {
    console.log("Hola", name);
  };

  this.getPin = function () {
    return "El pin del alumno es: " + pin;
  };

  this.setPin = function (p) {
    const num = Number(p);

    if (Number.isInteger(num) && num > 0) {
      pin = num.toString();
      return;
    }

    throw new Error("Dato inválido.");
  };

  Object.defineProperty(this, "pin", {
    get: function () {
      return "El pin del alumno es: " + pin;
    },

    set: function (p) {
      const num = Number(p);

      if (Number.isInteger(num) && num > 0) {
        pin = num.toString();
        return;
      }

      throw new Error("Dato inválido.");
    }
  });
}

const studentProperties = new StudentProperties("Alberto", 2);

console.log("pin", studentProperties.hash());

//PROTOTYPE CHAIN
let object = window;
do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

//Shadowing
studentProperties.toString(); //Alberto
//Permite sobreescribir propiedades o métodos que estaban
//en el Prototype para que se adapten a las necesidades del
//desarrollador.

//Asingar un prototype
const studentProto = {
  evaluation: function () {
    console.log("El estudiante está evaluando...");
  }
};

function StudentConstructor(name_std) {
  this.name_std = name_std;
  this.carrera = "ISC";
}

StudentConstructor.prototype = studentProto;
StudentConstructor.prototype.constructor = StudentConstructor;

const studentOtro = new StudentConstructor("Pepito");
