//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavorites(person) {
    // Loop through each key in the person object
    for (let key in person) {
        let value = person[key];
        // Display the current key
        console.log(key.toUpperCase() + ":");

        if (Array.isArray(value)) {
            // If the value is an array loop through each item and display
            for (let i = 0; i < value.length; i++) {
                if (typeof value[i] === 'object') {

                    // If the item is an object, loop through its properties and display
                    for (let subKey in value[i]) {
                        console.log(`* ${subKey}: ${value[i][subKey]}`);
                    }
                } else {
                    console.log("* " + value[i]);
                }
            }
        } else {
            // For non-array and non-objet values display the value
            console.log("* " + value);
        }
    }
}


displayFavorites(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log("\n")
        console.log(`Name:  ${this.name}`);
        console.log(`Age: ${this.age}`);
        return ""
        
    }
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    this.addAge = () => {
        this.age += 1;
        return "!!! Someone Aged 1 year !!!"
    }
};

// Create two people using the 'new' keyword
let person_1 = new Person("Bruce", 28);
let person_2 = new Person("Greg", 30)

// Print both info
console.log(person_1.printInfo())
console.log(person_2.printInfo())
console.log(person_2.addAge())
console.log(person_2.addAge())
console.log(person_2.addAge())
console.log(person_2.printInfo())




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
// Function to check the length of a string using promises
function checkStringLength(string) {
    return new Promise((resolve, reject) => {
      if (string.length > 10) {
        // If the length is greater than 10, resolve with "Big word"
        resolve("Big word");
      } else {
        // If the length is less than or equal to 10 reject with "Small Number"
        reject("Small Number");
      }
    });
  }
  
  // Example usage
  let inputString = "12345678901";
  checkStringLength(inputString)
    .then((result) => {
      console.log(result); // Output: "Big word"
    })
    .catch((error) => {
      console.log(error);
    });
  