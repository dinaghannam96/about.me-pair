'use strict';
let counter = 0;
function count(input) {
    if (input === "yes" | input === "y") {
        alert("you are Correct");
        counter = counter + 1;

    } else if (input === "no" | input === "n") {
        alert("that is Wrong");
    } else {
        alert("that is not defined");
    }

}

let username = prompt("What is your name? ");
alert("Welcome " + username + " to my website");

alert("My name is dina and this is my personal website");
let work = prompt("Am I a legal translator?").toLowerCase();
count(work)
let major = prompt("Do I have a degree in translation studies?").toLowerCase();
count(major)
let lang = prompt("Do I speak german?").toLowerCase();
count(lang)
let game = prompt("Am I a professional chess player?").toLowerCase();
count(game)
let food = prompt("Is pasta considered as my favourite dish?").toLowerCase();
count(food)

for (let i = 0; i < 4; i++) {
    let ageq = prompt("guess my age ?");
    let age = 24;
    console.log(age);
    if (ageq < age) {
        alert("that's too young");

    }
    else if (ageq > age) {
        alert("that's too old");

    }
    else (ageq == age); {
        alert("that's true ");
        counter = counter + 1;
        break;
    }
}

let outfit;
for (let i = 0; i < 6; i++) {
    let style = prompt("Guess my daily fav outfit style?");
    let myFav = ["casual", "formal", "chic", "fasionable"];
    for (let i = 0; i < 4; i++) {
        if (style === myFav[i]) {
            outfit = myFav[i];
            break;
        }

    }

    if (style === outfit) {

        alert("Correct")
        counter = counter + 1;
        break;
    } else {

        alert("Wrong")
    }

}
alert("Your score is: " + counter);
