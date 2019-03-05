// C is for Cookie
//Upon running the app, the browser initialized an infinite loop,
//so there is an issue with the loop causing this.
// I removed y from the code because it wasn't necessary, causing the loop to be infinite
//I changed the for statements to account for cookies[0] and used x in the comparison in order for the loop to stop

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"];
// let y = 1;

for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x];
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`);
}

//Conjunction Function
//This code was initially saying that conjoinedWord was undefined because 
//the variable was defined inside the function. When we try to call the variable
//with console.log(coinjoinedWord), it couldn't access this variable because of scope.
//To fix this issue, I defined conjoinedWord outside of the function expression, and also
//changed const to let in this definitian.

let conjoinedWord = "";
const conjunction = function (firstWord, secondWord) {
    conjoinedWord = `${firstWord} ${secondWord}`
};

conjunction("Master", "Card");
console.log(conjoinedWord);

//Mod Squad
//Added a comma after the array for "members" key.
//The code displayed an error saying missing initializer on line 51
//Moved the initalizing of HTMLRepresentation to the outside of the block
//in order to be accessed by the final statement. Changed const to let
//Added a <section> element with class "show-info" to index.html

let HTMLRepresentation = `<h1>The Mod Squad</h1>`;

{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    };

    

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`;
    })
}

document.querySelector(".show-info").innerHTML = HTMLRepresentation;

//Simon Says Exercise
// Error says invalidLocation is not defined.
// Removed the second if statement because it was redundant. Created a new
// var i to be the counter for invalid locations. Defined invalid location outside the 
// for loop and set it equal to true. Since all currentLocation[0] are 
// less than or equal to 2, there are 0 invalid locations. If you change
// a currentLocation[0] to anything over 2, the program will say "This location is invalid"
// in the console and will also add 1 to the counter, which will be displayed to the console
// with the last statement

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]];
let invalidLocation = true;
let i = 0;

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k];

    if (currentLocation[0] > 2) {
        invalidLocation = true;
        console.log("This location is invalid")
        i++;
    } 
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${i} invalid locations`);