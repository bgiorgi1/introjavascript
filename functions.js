const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];
const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];
const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];

// function called add Numbers

//input => functions => output

function addNumbers(numbersArray) {
    // psuedocode = plan of attack for your code
    // add all of the numbers in the array
    //return a result (what dataype are you returning i.e. array, number, object, boolian, string...)
    // 1 - declarations
    let result = 0;

    // 2 - logic (steps to solve the problem or get return value)
    //for loop to iterate through
for (let i=0; i < numbersArray.length; i++ ){
let temp = numbersArray [i]; // each element
console.log(temp);
result += temp; //results = result + temp
    // 3 - return value
return result;
}
console.log(addNumbers(numbers));


const romeObject = {
    name: 'Rome',
    location: 'LA',
    team: 'Lakers',
}

//function that returns team name

function teamName (object) {
    //define what the return value (datatype)
    return object.team;
}

let result = teamName (romeObject);
console.log(result);

let resultTwo = teamName(otherObjects);
console.log (resultTwo);

const returnObject = (object)