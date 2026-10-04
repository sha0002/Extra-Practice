// console.log("Hello World")

// const user = {
//     firstName: "Rohit",
//     lastName: "Sharma",
//     role: "Software development"
// }

// console.log(user)

function one(num1: number, num2: number) {
    return num1 + num2
}

// console.log(one(5, 8))

const calculate = one(8, 2)

console.log(calculate);

function twoObj(name: object) {
    return name
}

const user = twoObj({
    name: "shashank",
    salary: 5000
})

console.log(user)


// generics

// function logstring(arg: string) {
//     console.log(arg);
//     return arg;
// }

// logstring('arg');

// function lognum(arg: number) {
//     console.log(arg)
//     return arg
// }

// lognum(5)

// function logarray(arg: any[]) {
//     console.log(arg)
//     return arg
// }

// logarray([1, 2])

function logAnything<T>(arg: T): T {
    console.log(arg)
    return arg
}

logAnything(["shashank"])


