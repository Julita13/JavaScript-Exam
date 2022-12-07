/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
// const submitInput = document.querySelector("#submit-btn"); 
const myForm = document.querySelector("form");
const result = document.querySelector("#output");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const kilograms = document.querySelector("#search").value;
    const pounds = (kilograms * 2.2046).toFixed(2);
    const grams = (kilograms / 0.0010000).toFixed(2);
    const ounces = (kilograms * 35.274).toFixed(2);
    console.log(kilograms);
    console.log(pounds);
    console.log(grams);
    console.log(ounces);
    result.innerHTML = 
    `
        <h1> ${kilograms} kilograms = ${pounds} pounds </h1>
        <h1> ${kilograms} kilograms = ${grams} grams </h1>
        <h1> ${kilograms} kilograms = ${ounces} ounces </h1>
    `
})
