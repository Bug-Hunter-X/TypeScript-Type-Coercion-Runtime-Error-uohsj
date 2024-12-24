function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", "world"); // Type error is not caught at compile time
console.log(result);