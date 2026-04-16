interface Users {
  name: string;
  age: number;
}

let person: Users = {
  name: "Sara",
  age: 25
};
console.log("User:", person);


// Optional Properties
interface Car {
  brand: string;
  model: string;
  year?: number;
}

let myCar: Car = {
  brand: "Toyota",
  model: "Corolla"
};
console.log("Car:", myCar);


// Interface in function
interface Product {
  id: number;
  title: string;
}

function printProduct(p: Product) {
  console.log("Product title:", p.title);
}

printProduct({ id: 101, title: "MacBook Air" });
