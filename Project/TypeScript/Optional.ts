type User = {
    name: string;
    age?: number;   // optional
};

let u1: User = { name: "Sara" };
let u2: User = { name: "Nasreen", age: 34 };


function greet(name: string, title?: string) {
    if (title) {
        console.log(`Hello ${title} ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
}

greet("Nasreen");
greet("Nasreen", "Lecturer");
