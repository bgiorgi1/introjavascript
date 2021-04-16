const animals = ['🐱', '🐶', '🦁', '🦊', '🐯'];
const cars = ['🚗', '🚙', '🏎', '🚕', '🚓'];
const sports = ['⚽️', '🏀', '🏈', '🏐', '🎾', '🏉'];
const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];
const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];
const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];
const differentArray = [1, 'two', '3', 4, 'five', 6, '7', 'eight', 9, '10'];
const twoDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];




let i = 0;
let arrayLength = array.length;
while(i < arrayLength ) {
   let val = array[i];
   i++;
}


for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

// example of using length
for (let i = 0; i < teams.length; i++) {
    // steps/process/algorithm (steps)
    let teamElement = teams[i]; // Nets
    // console.log(teamElement + ' Stadium'); // 3 Nets
    console.log(`${i} ${teamElement} Stadium`); // template literal
}
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let addTwo = num + 2;
    console.log(addTwo);
}

for (let i=0; i <storageUnit.length; i++) {
let num =storageUnit [i]
let array = []
array.push(num);
myOther2DArray.push(array)
}
console.log(myother2DArray)
