import { useState } from 'react'

const toppingList = [
  'Extra Cheese',
  'Pepperoni',
  'Sausage',
  'Onions',
  'Peppers',
  'Pineapple',
  'Ham',
  'Spinach',
  'Artichokes',
  'Mushrooms',
  'Anchovies'
]

function getDefaultToppings() {
  const result = toppingList.map(topping => {
    return {
      name: topping,
      checked: false
    }
  })

  return result
}

export function useToppings(defaultToppings) {
  const [toppings, setToppings] = useState(
    defaultToppings || getDefaultToppings()
  )

  function toggleTopping(index) {
    const newToppings = [...toppings]
    newToppings[index].checked = !newToppings[index].checked

    setToppings(newToppings)
  }

  return { toppings, setToppings, toggleTopping }
}
