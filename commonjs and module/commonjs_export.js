let person = {
  name: "geetansh",
  age: 22,
};

var printName = () => {
  console.log(person.name);
};

var printAge = () => {
  console.log(person.age);
};

module.exports = {
  person,
  printName,
  printAge,
};
