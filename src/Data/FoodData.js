const foodList = [
  {
    name: 'Nachos',
    image: 'images/nachos.jpg',
    section: 'Appetizers',
    price: 3
  },
  {
    name: 'Antipasto Skewers',
    image: 'images/antipasto-skewers.jpg',
    section: 'Appetizers',
    price: 1.5
  },
  {
    name: 'Pico de Gallo',
    image: 'images/pico-de-gallo.jpg',
    section: 'Appetizers',
    price: 3.5
  },
  {
    name: 'Cucumber Canapes',
    image: 'images/cucumber-canapes.jpg',
    section: 'Appetizers',
    price: 2
  },
  {
    name: 'Cheese Pizza',
    image: 'images/pizza.png',
    section: 'Pizza',
    price: 3
  },
  {
    name: 'Pepperoni Pizza',
    image: 'images/pizza2.jpeg',
    section: 'Pizza',
    price: 3
  },
  {
    name: 'Chicken Pizza',
    image: 'images/chicken-pizza.jpeg',
    section: 'Pizza',
    price: 3
  },
  {
    name: 'Veggie Pizza',
    image: 'images/healthy-pizza.jpeg',
    section: 'Pizza',
    price: 3
  },
  {
    name: 'Burger',
    image: 'images/burger.jpeg',
    section: 'Sandwiches',
    price: 3.5
  },
  {
    name: 'Gyro',
    image: 'images/gyro.jpeg',
    section: 'Sandwiches',
    price: 2.5
  },
  {
    name: 'Shrimp PoBoy',
    image: 'images/Sandwich.jpeg',
    section: 'Sandwiches',
    price: 6
  },
  {
    name: 'French Fries',
    image: 'images/fries.jpeg',
    section: 'Sides',
    price: 1
  },
  {
    name: 'Grilled Vegetables',
    image: 'images/grilled-vegetables.jpg',
    section: 'Sides',
    price: 2
  },
  {
    name: 'Sliced Salmon',
    image: 'images/sliced-salmon.jpg',
    section: 'Seafood',
    price: 10
  },
  {
    name: 'Cooked Shrimps',
    image: 'images/cooked-shrimps.jpg',
    section: 'Seafood',
    price: 9
  }
]

export function formatPrice(price) {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  }).format(price * 10)
}

export const foods = foodList.reduce((result, current) => {
  if (!result[current.section]) {
    result[current.section] = []
  }

  result[current.section].push(current)

  return result
}, {})
