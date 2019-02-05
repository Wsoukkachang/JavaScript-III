/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - Binds to window unless "use strict".

* 2. Implicit Binding - Implies that the "this" is the object to the left of the ".", 

* 3. New Binding - Creates a new object using a constructor function.

* 4. Explicit Binding - More detailed binding, gives specific directions (uses .call or .apply methods).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayAge(age) {
    console.log(this);
    return age;
  }
  sayAge("30");

// Principle 2

// code example for Implicit Binding

const myPerson = {
    phrase: 'I am grateful to be alive!',
    sayPhrase: function(age) {
      console.log(`${this.phrase} My age is ${age}!`);
      console.log(this);
    }
  };
  myPerson.sayPhrase('30');

// Principle 3

// code example for New Binding

function Person(person) {
    this.phrase = 'I am grateful to be alive';
    this.person = person;
    this.speak = function() {
      console.log(`${this.phrase} even though I am ${this.person}`);
    };
  }
  
  const elder = new Person('old');
  const minor = new Person('young');
  
  elder.speak(); 
  minor.speak();

// Principle 4

// code example for Explicit Binding
elder.speak.call(minor); // Elder saying they are young.

minor.speak.apply(elder); // Minor saying they are old.