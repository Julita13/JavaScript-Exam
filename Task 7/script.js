/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys(myObject) {
  return Object.keys(myObject);
}

console.log(showObjectKeys(audi));

// arba: 

// function showObjectKeys2(myObject) {
//   console.log(Object.keys(myObject));
// }

// showObjectKeys2(audi);
