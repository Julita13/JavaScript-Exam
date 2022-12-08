/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

//  ES6

class Movie{
    constructor(title, director, budget) {
        this.title  = title;
        this.director = director;
        this.budget = budget; 
    };
    wasExpensive() {
        if(this.budget > 100000000){
            return true;
        } else {
            return false;
        }
        //  return this.budget > 100000000 ? true : false  // irgi veikia, ištrinus if'ą
        //  return this.budget > 100000000 // <---- veikiausiai "švariausias" kodo užrašymas, ištrinus if'ą :)
    }
};

const newMovie = new Movie("Inception", "Christopher Nolan", 160000000);
const newMovie2 = new Movie("Terminator", "James Cameron", 6400000);
console.log(newMovie.wasExpensive());
console.log(newMovie2.wasExpensive());
