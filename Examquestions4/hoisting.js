function hoisting() {
  console.log(`Value of myObject ${myObject}`);

  if (!myObject) {
    var myObject = { value: "Some text" };
    console.log(myObject.value);
  }
}

hoisting();
