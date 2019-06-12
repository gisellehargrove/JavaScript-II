// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const closure = function() {
  let closureVar = 'A closure string'
  return function() {
    return closureVar;
  }
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function() {
    return count++;
  }
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter(), 'newCounter');
console.log(newCounter(), 'newCounter')

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  return {
    // `increment` should increment a counter variable in closure scope and return it.
    increment: function() {
      return count++;
    },
    // `decrement` should decrement the counter variable and return it.
    decrement: function() {
      return count--;
    },
    checkCurrent: function() {
      return count;
    }
  }
};

const factory = counterFactory();
console.log(factory.increment(), 'counter factory increment');
console.log(factory.increment(), 'counter factory increment');
console.log(factory.decrement(), 'counter factory decrement');
