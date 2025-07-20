

function greet() {
  const name = "Kashif";
  
  function sayHello() {
    console.log("Hello, " + name);
  }

  return sayHello;
}

const greetUser = greet(); 
greetUser();

/* Example number 2*/

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count is:", count);
  };
}

const counter = createCounter();

counter(); 
counter(); 

/*Example Number 3*/

function Person(name) {
  let age = 0;

  return {
    getName: function() {
      return name;
    },
    getAge: function() {
      return age;
    },
    haveBirthday: function() {
      age++;
    }
  };
}

const person1 = Person("Ali");

console.log(person1.getName()); 
console.log(person1.getAge());  
person1.haveBirthday();
console.log(person1.getAge());  



