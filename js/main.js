var user = {
firstname: "kasumi",
lastname: "takeshima",
greet: function(){
  console.log("hello, my name is " + this.firstname + " "+ this.lastname);
}
};
user.greet();

// =============================================

function Person(name,last){
this.name = name;
this.getName = function() { return this.name; }
}

var person = new Person('joe');
console.log(person.getName());
var person2 = new Person('kasumi');
console.log(person2.getName());
