// Same keys and values ES2015
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

// Computed Property Names ES2015
let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

// Object Methods ES2015
const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi"
    },
    sayBye(){
        return this.firstName + "says bye!";
    }
}

// createAnimal function
// Function that generates animal obj and accept 3 following arguments
// -species of animal
// -string used to name a function
// -string to be printed when above function is called
const d = createAnimal("dog", "bark", "Woooof!")

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise
        }
    }
}
