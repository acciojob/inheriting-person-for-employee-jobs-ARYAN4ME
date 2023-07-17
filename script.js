// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Prototype method for Person
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old.");
}

// Employee constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit Person prototype in Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Set constructor property for Employee
Employee.prototype.constructor = Employee;

// Prototype method for Employee
Employee.prototype.jobGreet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old, and my job title is " + this.jobTitle + ".");
}

// Example usage
// var person = new Person("John", 25);
// person.greet(); // Output: Hello, my name is John, I am 25 years old.

// var employee = new Employee("Jane", 30, "Manager");
// employee.greet(); // Output: Hello, my name is Jane, I am 30 years old.
// employee.jobGreet(); // Output: Hello, my name is Jane, I am 30 years old, and my job title is Manager.

}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
