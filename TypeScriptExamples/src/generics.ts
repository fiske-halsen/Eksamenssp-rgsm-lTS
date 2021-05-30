//Generics
function identity<Type>(arg: Type): Type {
  return arg;
}

const output1 = identity<number>(10);
const output2 = identity<string>("myString");

// Vi kunne og bruge any, men så ville vi miste code completion.
function identity2(arg: any): any {
  return arg;
}

function identity3(arg: string): string {
  return arg;
}

function identity4(arg: number): number {
  return arg;
}
