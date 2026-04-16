let value: number | string;

value = 25;          // OK
value = "Twenty";    // OK
// value = true;     // Error: boolean not allowed

// Union Type in Functions
function printId(id: number | string) {
    console.log("ID:", id);
}

// Union with Arrays
let data: (number | string)[] = [1, "Two", 3];

// Real-World Use Case
type Status = "loading" | "success" | "error";

let currentStatus: Status = "loading";
