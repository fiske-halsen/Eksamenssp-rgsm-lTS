interface IPerson {
  name: string;
  age: number;
}

function showPerson(person: IPerson): void {
  console.log(`Name: ${person.name} age: ${person.age}`);
}

showPerson({ name: "Phillip", age: 20 });
