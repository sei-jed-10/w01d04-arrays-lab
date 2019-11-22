// Using push and unshift, make this array contain the numbers from zero through seven:

const arr = [2, 3, 4];
arr.unshift(0,1);
arr.push(5,6,7);
arr; // => [0, 1, 2, 3, 4, 5, 6, 7]



// What is returned by push? Before throwing this into the console, form a hypothesis about what you think the return value will be:
const arr = [5, 7, 9];

arr.push(6); // returns ???
// it will return 
[ 5, 7, 9, 6 ]



// Change all numbers to be those numbers multiplied by two:
// const numbers = [4, 9, 7, 2, 1, 8];

const numbers = [4, 9, 7, 2, 1, 8];
for (i = 0; i < numbers.length; i++) {
     if (numbers[i] !== 0) {
     numbers[i] = numbers[i] * 2; 
    }
 numbers; // => [8, 18, 14, 4, 2, 16]
} 



// Change all odd numbers to be those numbers multiplied by two:
// const numbers = [4, 9, 7, 2, 1, 8];

const numbers = [4, 9, 7, 2, 1, 8];
for (i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 !== 0) {
     numbers[i] = numbers[i] * 2; 
    }
 numbers; // => [4, 18, 14, 2, 2, 8]
}


// Create an array to hold your favorite colors. For each choice, log to the screen a string like: My #1 choice is blue.
const favoriteColors =['Blue','Yellow', 'Black'];
console.log (`My #1 choice is ${favoriteColors[0]}`);

// Create an array of ages. Loop through and log only the ages that are over 21.
const ages= [15,18, 21,23, 25, 30, 35,40];
for ( i = 0; i < 21; i++) {
    console.log(ages[i]);
    }



// Starting with an empty array called rainbowColors:
// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method
// Print the length of the array
// Print the second item
// Print the last item (make this flexible/dynamic!)
// Print the index of the string "blue"

const rainbowColors=[];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green', 'blue', 'indigo', 'violet' );
rainbowColors;
rainbowColors.length;
rainbowColors[1];
rainbowColors.slice(rainbowColors.length-1);
rainbowColors.indexOf('blue');


// Find out the difference between .slice and .splice
const rainbowColors=[];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green', 'blue', 'indigo', 'violet' );

const twoColors = rainbowColors;
twoColors.slice(1,3);
twoColors.splice(1,3);

// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
// Work with arrays of arrays

var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(3,3);
nums;



// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
// Access "inner array first item" and print it out"

arrOfArrs[0][0];

// Print "third" by using a dynamic index
arrOfArrs[1][arrOfArrs[arrOfArrs.length-1].length-1]



// Create an array to hold your top five choices of something (music, books, movies, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.  const favoriteMusic =['classic', 'hip hop', 'rock', 'blues', 'country'];
  console.log (`My #1 choice is ${favoriteMusic[0]}`);
  console.log (`My #1 choice is ${favoriteMusic[1]}`);
  console.log (`My #1 choice is ${favoriteMusic[2]}`);
  console.log (`My #1 choice is ${favoriteMusic[3]}`);
  console.log (`My #1 choice is ${favoriteMusic[4]}`);

  console.log (`My 1st choice is ${favoriteMusic[0]},My 2nd choice is ${favoriteMusic[1]}, My 3rd choice is ${favoriteMusic[2]}, My 4th choice is ${favoriteMusic[3]} , My 5th choice is ${favoriteMusic[4]} `);