//Write a program that count the number of letters occurrences in a string. Return an array that contains all letters and their count, like this for the string cbb: [['c', 1],['b', 2]]
const phrase = 'I can put whatever I want here, so i can change it if i want'.toLocaleLowerCase() //set lower case

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('') //split the phrase in an array that have strings as values.

const  result = [] //an oppen array that can be as bigger as needed

for (const letter of phrase) {
    let found = false //this will be set as false every iteration
    if (!alphabet.includes(letter)) continue //if the letter inside of phrase is not in the alphabet we skip it and dont do what is below (that means comas or anything else)
    for (const entry of result) { //will iterate for each element in result if we have something
        if (entry[0] === letter){ //we enter here only if we already add a letter in result, and thats happen below
            entry[1]++ //we add to the second entry in the array of the letter +1 bc we found it again
            found = true //set as true bc we dont want to create a new array with the same letter
        }
    }
    if (!found) { // we enter here only if we need to creast an array with a new leeter we found
        result.push([letter, 1])
    }
}

console.log(result);