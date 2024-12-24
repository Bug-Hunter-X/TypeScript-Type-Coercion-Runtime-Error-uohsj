function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

let result: number; 
try {
  result = add(10, 20); // Correct usage
  console.log(result); // Output: 30
} catch (e) {
  console.error(e);
}

try {
  result = add("hello", "world"); //Throws error
  console.log(result);
} catch (e) {
  console.error(e);
}

//Alternatively, use function overloading for more flexibility
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: any, b: any): any {
  return a + b;
}
console.log(add2(10, 20)); // Output: 30
console.log(add2("hello", "world")); // Output: helloworld
