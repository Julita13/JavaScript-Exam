/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const resultWindow = document.getElementById("output");


const fetchData = async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        const allCars = await response.json();
        return allCars;        
      }
    } catch (error) {
      console.error(error);
    }
  };

  function showCars(cars) {
      cars.forEach(item => {
          resultWindow.innerHTML += `<div class='brand'><div class='cars'> ${item.brand}</div> <div class='model'> ${item.models}</div></div>`;
      });
  };

  (() => { fetchData().then(allCars => showCars(allCars)) })();