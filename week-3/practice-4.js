//Write a program that finds the smallest and biggest number in an array, and prints them 
const list = [2, 3, 201, 1032, -12, 23, -234, 22]

const orderedlist = list.sort((a, b) => (a > b ? 1 : -1))

console.log(`the lowest number is ${orderedlist[0]}`);

console.log(`the biggest number is ${orderedlist[list.length-1]}`);

//other posiblity is with a for loop

let smallest = 0 
let bigger = 0

for (const item of list) { //if we use in instead of `of` we get the index not the item 
    if (bigger < item) {
        bigger = item
    }
    if (smallest > item){
        smallest = item
    }
}

console.log(`the smallest number is ${smallest} and the bigger is  ${bigger}`);