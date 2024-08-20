// Que 1. In the following shopping cart add, remove, and edit items
//  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add "Meat" in the beginning of your shopping cart if it has not been already existed
// add "Sugar" at the end of your shopping cart if it has not been already existed
// remove "Honey" if you are allergic to honey
// modify "Tea" to 'Green Tea'

// Sol:

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' to the beginning of the shopping cart if it's not already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end of the shopping cart if it's not already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// Remove 'Honey' if you are allergic to it
const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

// Display the updated shopping cart
console.log(shoppingCart);

