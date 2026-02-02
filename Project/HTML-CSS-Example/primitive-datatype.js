/**
 * JavaScript Primitive Data Types Demo
 */

console.log("=== JavaScript Primitive Data Types ===\n");

/* 1. String */
let courseName = "CS418";
console.log("String value:", courseName);
console.log("Type:", typeof(courseName), "\n");

/* 2. Number */
let students = 35;
let average = 89.5;

console.log("Number (integer):", students);
console.log("Number (decimal):", average);
console.log("Type:", typeof(students), "\n");

/* Special number cases */
console.log("Infinity:", 10 / 0);
console.log("NaN (Not a Number):", "CS" * 5);
console.log("typeof NaN:", typeof(NaN), "\n");

/* 3. Boolean */
let isOnline = true;
let isFinal = false;

console.log("Boolean true:", isOnline);
console.log("Boolean false:", isFinal);
console.log("Type:", typeof(isOnline), "\n");

/* 4. Undefined */
let grade;
console.log("Undefined value:", grade);
console.log("Type:", typeof(grade), "\n");

/* 5. Null */
let result = null;
console.log("Null value:", result);
console.log("Type (JS quirk):", typeof (result), "\n");

/* 6. BigInt */
let bigNumber = 9007199254740995n;
console.log("BigInt value:", bigNumber);
console.log("Type:", typeof(bigNumber), "\n");

/* BigInt rules */
console.log("BigInt addition:", 10n + 20n);
// console.log(10n + 10); //  TypeError (cannot mix BigInt and Number)


/* 7. typeof summary */
console.log("=== typeof Summary ===");
console.log("typeof 'Hello'  ->", typeof("Hello"));
console.log("typeof 123      ->", typeof(123));
console.log("typeof true     ->", typeof(true));
console.log("typeof undefined->", typeof(undefined));
console.log("typeof null     ->", typeof(null), "<-- historical bug");
console.log("typeof 10n      ->", typeof(10n));

console.log("\nEnd of primitive data type demo.");
