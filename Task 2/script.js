/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const clickMeButton = document.getElementById("btn__element");
const finalResult = document.getElementById("btn__state");
let sumOfClicks = 0;

clickMeButton.onclick = function () {
    sumOfClicks++;
    finalResult.innerText = sumOfClicks;
    finalResult.style.color = "red";
};

