const foodList = [
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
    section: 'Sandwich'
  },
  {
    name: 'Gyro',
    image: 'images/gyro.jpeg',
    section: 'Sandwich'
  },
  {
    name: 'Shrimp PoBoy',
    image: 'images/sandwich.jpeg',
    section: 'Sandwich'
  },
  {
    name: 'French Fries',
    image: 'images/fries.jpeg',
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
