// ------------------------------
// 1. Typed Arrays
// ------------------------------
let scores: number[] = [85, 92, 78];
let fruits: string[] = ["Apple", "Banana", "Mango"];

// Pushing correct and incorrect values
scores.push(99);      // allowed
// scores.push("test"); // Type error



// ------------------------------
// 2. Typed Objects
// ------------------------------
let student: { name: string; age: number; isActive: boolean } = {
    name: "Sara",
    age: 22,
    isActive: true,
};

// student.age = "twenty two"; // Type error



// ------------------------------
// 3. Nested Object Types
// ------------------------------
let course: {
    title: string;
    duration: number;
    instructor: {
        name: string;
        experience: number;
    };
} = {
    title: "Web Development",
    duration: 12,
    instructor: {
        name: "Nasreen",
        experience: 7,
    },
};



// ------------------------------
// 4. Function with Typed Parameters + Return Type
// ------------------------------
function add(a: number, b: number): number {
    return a + b;
}

let result = add(10, 20);
console.log("Result:", result);

// add("hi", 10); // Type error



// ------------------------------
// 5. Function Returning an Object
// ------------------------------
function getStudent(): { name: string; age: number; enrolled: boolean } {
    return {
        name: "John",
        age: 20,
        enrolled: true,
    };
}

console.log(getStudent());



// ------------------------------
// 6. Array of Objects
// ------------------------------
let users: { id: number; username: string; isAdmin: boolean }[] = [
    { id: 1, username: "ali", isAdmin: false },
    { id: 2, username: "sara", isAdmin: true },
];

console.log(users);
