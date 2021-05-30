import fetch from "node-fetch";
import "core-js/proposals/promise-any";
const URL = "https://swapi.dev/api/people/";

async function fetchPerson(url) {
  const response = await fetch(url);
  return await response.json();
}

async function printNamesAll() {
  return Promise.all([
    fetchPerson(`${URL}${1}`).then((person1) => person1.name),
    fetchPerson(`${URL}${2}`).then((person2) => person2.name),
  ]).then((results) => {
    console.log(results);
  });
}

async function printNamesAllAny() {
  const person1 = await fetchPerson(`${URL}${1}`);
  const person2 = await fetchPerson(`${URL}${2}`);
  return Promise.any([person1, person2]).then((value) => console.log(value));
}

printNamesAllAny().then((data) => console.log(data));
