function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];

function randType(obj){
    return obj[Math.floor(obj.length * Math.random())]
}
function randomPizzaOven(){
    var pizza = {};
    pizza.crustType = randType(crustTypes);
    pizza.sauceType = randType(sauceTypes);
    var randNbOfPicks = Math.floor(9 * Math.random())
    pizza.cheeses = [];
    pizza.toppings = [];
    for( var i = 0 ; i <= randNbOfPicks; i++ ){
        pizza.cheeses.push(randType(cheeses));
        pizza.toppings.push(randType(toppings));
    }
    return pizza;
}
console.log(randomPizzaOven());