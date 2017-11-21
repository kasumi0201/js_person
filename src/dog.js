class Dog{
constructor(name){
this.name = name;
}
bark() {
  return `wah wah I'm ${this.name}`;
}
}

module.exports = Dog;
