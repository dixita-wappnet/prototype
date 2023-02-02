console.log("this is  a prototype inheritance file");

// this is prototype of first and employee object
const proto = {

    slogan : function(){

        return ("The company is the best");
    },

    changeName : function(newName){

        this.name = newName
    }

}
 // this create first object

const first = Object.create(proto);
first.name = "Himanshu";
first.role = "Programmer";

// this change the value of name
first.changeName("Himanshu2")

console.log(first);

//employee constructure

function employee(name, salary, experience){

    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// slogan 

employee.prototype.slogan = function(){

    return (`The company is the best. Regards, ${this.name}`);
}

let aish = new employee("jay", 50000, 2);
console.log(aish.slogan());

// create a programmer constructure

function programmer(name, salary, experience, language)
{
    // call is function 
    employee.call(this, name, salary, experience);
    this.language =language;
}

//Inherit the prototype 
programmer.prototype = Object.create(employee.prototype);

//menualy set the constructure 
programmer.prototype.constructure = programmer;

let sunny = new programmer("Sunny", 30000, 0, "javascript");
console.log(sunny);