import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

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

  //Metodos
  draw: function () {
    console.log("Dibujando...");
  }
};

//Si quisiera crear otro circulo se tendria que duplicar el codigo
//Cuando un objeto tiene un metodo o más, se dice que tiene comportamiento.

console.log(circle.location);
circle.draw();

//Si se requiere crear más de una instancia se puede usar un

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

//Tambien se puede con una función constructora

function constructorStudent(name, semester) {
  this.name_std = name;
  this.semester = semester;
  this.subjects = [];
  this.greet = function(){
    console.log("Hola", name);
  };
}

function constructorStudent(name, semester) {
  this.name_std = name;
  this.semester = semester;
  this.subjects = [];
  this.greet = function () {
    console.log("Hola", name);
  };
}
  
const student2 = constructorStudent("Alex", 2);
student2.greet();
  
/*Al utilizar el operador new, realiza:
  1. Crear un objeto vacion con{}
  2. Asigna this para que apunte a este objeto, porque por defecto apunta al objeto 
  al objeto global, lo cual es mala practica.
  3. Devuelve el objeto creado por la funcion el return this se hace implicitamente
 */
  
console.log(student1.constructor);
console.log(student2.constructor);
  
/*  Las funciones como los object literal tienen como constructor el de la clase object.
    Todas las variables se crean a partir de constructores let x = {} viene de 
    let x = new object()
    '' viene new String()
    true viene de new boolean()
    1 viene de new number().
*/

/*const functionStudent = new function('name', 'semester', '

')*/

