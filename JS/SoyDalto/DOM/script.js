let p = document.getElementById("parrafo");
document.write(p.textContent);

const texto = document.querySelector(".h3");
texto.removeAttribute("style");
texto.setAttribute("contentEditable", "true");

const h4 = document.getElementById("h4");
h4.setAttribute("title", "título cambiado desde el js");

const input = document.querySelector(".input-normal");
input.setAttribute("minLength", "10");
// input.minLength = 10

// input.setAttribute("type", "file");
// input.accept = "image/*"

const titulo = document.querySelector(".titulo");
// Agarra el valor de la clase de la posción que especifiques
const valor = titulo.classList.item(0);
document.write('<br>' + valor);

const contains = titulo.classList.contains('h1');
if (contains) {
  document.write(`<br> Si tiene la clase: h1 `)
} else {
  document.write(`<br> No tiene la clase: h1, se le está agregando `)
  document.classList.add("h1")
}
titulo.classList.toggle("nueva-clase")

const el = document.querySelector('.elemento');
// const resultado = el.textContent;
// const resultado = el.innerHTML;
const resultado = el.outerHTML;
// alert(resultado)
document.write(`<br><br> ${resultado}`)


const contenedor = document.querySelector(".contenedor");
// const textDelItem = document.createTextNode("Este es un item de la lista")
// item.appendChild(textDelItem)

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
  const item = document.createElement("li");
  item.innerHTML = "XD";
  fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);

// document.write(`<br><br> ${item}`)
console.log(fragmento);


const hijos = document.querySelector('.hijos')
const primerHijo = hijos.firstElementChild;
// const todosHijos = hijos.childNodes;
const todosHijos = hijos.children;

console.log(primerHijo);
console.log(todosHijos);


const h4_antiguo = document.querySelector(".h4");
const h4_nuevo = document.createElement("h4");
h4_nuevo.innerHTML = "H4 NUEVO";

hijos.replaceChild(h4_nuevo, h4_antiguo);
// hijos.removeChild(h4_nuevo);

let contieneHijos = hijos.hasChildNodes()

if (contieneHijos) {
  console.log("El elemento SI tiene hijos");
} else {
  console.log("El elemento NO tiene hijos");
}

const h1 = document.querySelector("#h1")
console.log(h1.parentElement);
