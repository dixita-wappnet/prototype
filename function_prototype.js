
// create a function

const user = function() {};

//  add property in user function

user.prototype.name = 'Prem';

let employee = new user();

employee.id = 1;

console.log(employee);