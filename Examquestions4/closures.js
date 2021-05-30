function outFunction(outVariable) {
  return function innerFunction(innerVariable) {
    console.log(outVariable);
    console.log(innerVariable);
  };
}

const c = outFunction("OuterVariable");
c("InnerVariable");
