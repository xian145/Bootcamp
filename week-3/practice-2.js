//Write a program that initializes an array with all values at 0. Then loop over that array and change each value in the array with the value of the index
const ar_1 = [0,0,0,0,0,0,0,0,0,0,0]
console.log(`yes`);

for (let index = 0, length = ar_1.length; index < length; index++) {
   ar_1[index] = index //we assing a value for ehac index
}

console.log(ar_1);