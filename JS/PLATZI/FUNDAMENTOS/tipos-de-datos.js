const mayorEdad = 18;
const edadPersona = 18;
let text = "Es menor de edad";

if (edadPersona >= mayorEdad) {
	text = "Es mayor de edad";
}

console.log(text);

const car = {
	price: 25000,
};

car.model = "Audi";
car.price = 50000;

console.log(car);

const fruits = ["Banana"];
fruits[fruits.length] = "Orange";

console.log(fruits);

// FOR OF -> Iterables => array | string
const object = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const element of object) {
	console.log(element);
}

// FOR IN -> object
const person = {
	age: 18,
	size: 180,
	weigth: 56,
	eyes: "brown",
};

for (const properties in person) {
	console.log(`${properties}: ${person[properties]}`);
}

let contador = 0;

function resolvePromise() {
	return new Promise((resolve) => setTimeout(resolve, 100));
}

const runWhile = async () => {
	while (contador <= 10) {
		await resolvePromise();

		console.log(contador);
		contador++;
	}
};

await runWhile();

globalThis.obj = 'OBJECT'

function display()
{
	console.log(`This is ${this.obj}`);
}

display.call();