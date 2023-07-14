// Task 1
let food = ["cheese",
    "sour cream",
    "milk",
    "yogurt",
    "ice cream",
    "milkshake",
]

for (items of food) {
    console.log(items)
}

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (let [key, value] of Object.entries(bird)) {
        console.log(key, ": ", value)
    }
}

birdCan();

// Task 3

function animalCan() {
    for (let items in bird) {
        console.log(items, ": ", bird[items])
    }
}

animalCan();

