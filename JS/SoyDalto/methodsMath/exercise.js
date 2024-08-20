class Calculadora {
  constructor() {}

  sumar(num1, num2) {
    return document.write(`La suma es : ${num1 + num2}`);
  }
  restar(num1, num2) {
    return document.write(`La resta es : ${num1 - num2}`);
  }
  multiplicar(num1, num2) {
    return document.write(`El producto es : ${num1 * num2}`);
  }
  dividir(num1, num2) {
    num2 === 0
      ? document.write(`No se puede dividir entre 0`)
      : document.write(`La división es : ${num1 / num2}`);
  }
  exponencial(num, exp) {
    document.write(`El exponente es: ${num ** exp}`);
  }
  raizCuadrada(num) {
    document.write(`La raíz cuadrada es: ${Math.round(Math.sqrt(num))}`);
  }
  raizCubica(num) {
    document.write(`La raíz cúbica es: ${Math.round(Math.cbrt(num))}`);
  }
}

const calculadora = new Calculadora();
let num1, num2;
let opcion;

const pedirNumeros = () => {
  console.log(opcion);
  if (opcion === 6 || opcion === 7) {
    num1 = Number(prompt(`Ingrese el número para la raíz`));

    if (isNaN(num1)) {
      alert("Debes ingresar un número válido");
      return;
    }
    return;
  }

  num1 = Number(prompt(`Ingrese el primer número`));
  num2 = Number(prompt(`Ingrese el segundo número`));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Debes ingresar un número válido");
    return;
  }
};

const realizarOperación = () => {
  pedirNumeros();
  if (opcion === 1) {
    calculadora.sumar(num1, num2);
  } else if (opcion === 2) {
    calculadora.restar(num1, num2);
  } else if (opcion === 3) {
    calculadora.multiplicar(num1, num2);
  } else if (opcion === 4) {
    calculadora.dividir(num1, num2);
  } else if (opcion === 5) {
    calculadora.exponencial(num1, num2);
  } else if (opcion === 6) {
    calculadora.raizCuadrada(num1);
  } else if (opcion === 7) {
    calculadora.raizCubica(num1);
  }
};

const pedirOperación = () => {
  document.write(`Que operación desea calcular: <br>
  [1] = Sumar <br>
  [2] = Restar <br>
  [3] = Multiplicar <br>
  [4] = Dividir <br>
  [5] = Potencia <br>
  [6] = Raíz Cuadrada <br>
  [7] = Raíz Cúbica <br>
  `);

  setTimeout(() => {
    const operacion = Number(prompt(`Elige la opción`));
    if (isNaN(operacion)) {
      alert(`Elija una opción válida`);
      return;
    }
    if (operacion < 1 || operacion > 8) {
      alert(`Elija una opción válida`);
      return;
    }
    opcion = operacion;
    realizarOperación()
  }, 1000);
};

pedirOperación();
