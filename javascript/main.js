const pet = {
    name: "Molly",
    species: "Yorkie Poodle",
    nicknames: ["The Barker", "Wolly", "Rodgers"],
    age: 11,
    bark: function (something) {
        console.log(`Molly barks 'WOOF!' at ${something}`)
    },
    sleep: function (somewhere) {
        console.log(`Molly sleeps on ${somewhere}`)
    },
    pant: function () {
        console.log(`Molly pants`)
    },
    favoriteToys: [], //empty array
    play: function (toy) {   // create a function 
        if (toy === "chewy") {   // if the toy is chewy
            this.favoriteToys.push(toy)  // THIS is pet; when you define the function, put the parameter inside the parentesis
        }

    },
}

pet.play("chewy");
pet.bark("the mailman");
pet.sleep("on the couch");
pet.pant();




//THIS IS PART OF ANOTHER EXERCISE  !!!

const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
     this.orders.push(meal);
    },
    orders: [],
}

const chickenComboMeal = {
    sandwichType: "Italian Bread",
    fries: true,
    drinkSize: "medium"
}

const doubelCheeseBurger = {
    sandwichType: "Sesame Bun",
    fries: true,
    drinkSize: "large"
}

const baconBurger = {
    sandwichType: "White Bun",
    fries: false,
    drinkSize: "small"
}

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(doubelCheeseBurger);
restaurant.placeOrder(baconBurger);

console.log(restaurant.orders)
// Invoke the function to return the list of all orders
const listOrder = function () {
    for (i = 0; i < restaurant.orders.length; i++) {
        return 
    }
}
console.log(listOrder)
// Output all orders to the console using console.table()
console.table( [listOrder])
