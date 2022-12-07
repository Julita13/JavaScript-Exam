/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// ES5

function Calculator(number1, number2){
    this.num1 = number1;
    this.num2 = number2;
    this.sum = function() {
        console.log(this.num1 + this.num2);
    };
    this.subtraction = function() {
        console.log(this.num1 - this.num2)
    };
    this.multiplication = function() {
        console.log(this.num1 * this.num2)
    };
    this.division = function() {
        console.log(this.num1 / this.num2)
    }
}

const kalkuliatorius = new Calculator(20, 5);
kalkuliatorius.sum();
kalkuliatorius.subtraction();
kalkuliatorius.multiplication();
kalkuliatorius.division();

