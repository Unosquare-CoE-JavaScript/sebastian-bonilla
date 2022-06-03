var one = 1;
let notOne = 2;
const notTwo = 3;
class notThree {}
console.log(this.one); // 1
console.log(this.notOne); // undefined
console.log(this.notTwo); // undefined
console.log(this.notThree); // undefined