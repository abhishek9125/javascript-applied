// const person = {
//     name: "Abhishek",
//     getName: function () {
//         return `${this.name} is my name`;
//     },
// };
// console.log(person.getName());

// function test() {
//     console.log(this);
// }
// test();

// const person = {
//     name: "Vedant",
//     getName: () => {
//         return `${this.name} is my name`;
//     },
// };
// console.log(person.getName());

function User() {
    this.name = "John Doe"
    this.score = 20
    this.sayUser = function () {
        // when `this` is accessible
        console.log(this.name)

        function innerFunction() {
            // when `this` refers to the global scope/object
            console.log(this.name)
        }

        innerFunction();
    }
}
let name = new User();
name.sayUser();