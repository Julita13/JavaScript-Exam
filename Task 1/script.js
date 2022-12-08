/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const myForm = document.querySelector("form");
const result = document.querySelector("#output");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const kilograms = document.querySelector("#search").value;
    // console.log(kilograms);
    const pounds = (kilograms * 2.2046).toFixed(2);
    const grams = (kilograms / 0.0010000).toFixed(2);
    const ounces = (kilograms * 35.274).toFixed(2);
    result.innerHTML = 
        `
            <h2> ${kilograms} kilograms = <span>${pounds}</span> pounds </h2>
            <h2> ${kilograms} kilograms = <span>${grams}</span> grams </h2>
            <h2> ${kilograms} kilograms = <span>${ounces}</span> ounces </h2>
        `;
    document.querySelector("#search").value = "";
})

// h2 tagas pasirinktas todėl, kad h1 jau buvo panaudotas index.html'e - idant būtų išlaikomas kodo vientisumas ;)