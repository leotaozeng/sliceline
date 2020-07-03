const foodList = [
  {
    name: 'Nachos',
    image: 'images/nachos.jpg',
    section: 'Appetizers'
  },
  {
    name: 'Antipasto Skewers',
    image: 'images/antipasto-skewers.jpg',
    section: 'Appetizers'
  },
  {
    name: 'Pico de Gallo',
    image: 'images/pico-de-gallo.jpg',
    section: 'Appetizers'
  },
  {
    name: 'Cucumber Canapes',
    image: 'images/cucumber-canapes.jpg',
    section: 'Appetizers'
  },
  {
    name: 'Cheese Pizza',
    image: 'images/pizza.png',
    section: 'Pizza'
  },
  {
    name: 'Pepperoni Pizza',
    image: 'images/pizza2.jpeg',
    section: 'Pizza'
  },
  {
    name: 'Chicken Pizza',
    image: 'images/chicken-pizza.jpeg',
    section: 'Pizza'
  },
  {
    name: 'Veggie Pizza',
    image: 'images/healthy-pizza.jpeg',
    section: 'Pizza'
  },
  {
    name: 'Burger',
    image: 'images/burger.jpeg',
    section: 'Sandwiches'
  },
  {
    name: 'Gyro',
    image: 'images/gyro.jpeg',
    section: 'Sandwiches'
  },
  {
    name: 'Shrimp PoBoy',
    image: 'images/Sandwich.jpeg',
    section: 'Sandwiches'
  },
  {
    name: 'French Fries',
    image: 'images/fries.jpeg',
    section: 'Sides'
  },
  {
    name: 'Grilled Vegetables',
    image: 'images/grilled-vegetables.jpg',
    section: 'Sides'
  },
  {
    name: 'Sliced Salmon',
    image: 'images/sliced-salmon.jpg',
    section: 'Seafood'
  },
  {
    name: 'Cooked Shrimps',
    image: 'images/cooked-shrimps.jpg',
    section: 'Seafood'
  }
]

export const foods = foodList.reduce((result, current) => {
  if (!result[current.section]) {
    result[current.section] = []
  }

  result[current.section].push(current)

  return result
}, {})
