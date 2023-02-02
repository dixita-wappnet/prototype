console.log("Hello, i am dixita patel");

let a = {
    name : 'dixita',
    language : 'gujarati',
    run : () => {
      alert("self run")
}
}
console.log(a);

let p = {

    run : () => {
        alert("run")
    }
}

a.__proto__ = p
a.run()

p.__proto__ = {

    name2 : 'jay'
}

console.log(a.name2);