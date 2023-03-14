//Write a program that, given an initial number, tries to find it in an array, and prints true or false depending on the result. Try to do it with 3 different kinds of loops

//using find()
const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let found = false

list.find((item) => {
    if (item === 123123) {
        found = true
    }
})

console.log(found);

//using for
const number = 123123
for (let i = 0; i < list.length; i++) {
    if (list[i] === number) {
        found = true
    }
}
console.log(found);

//using for of
for (const iterator of list) {
    if (iterator === number) {
        found = true
    }
}
console.log(found);

//using while
let index = 0
while (index < list.length) {
    if (list[index] === number) {
        found = true
    }
    index++
}
console.log(found);