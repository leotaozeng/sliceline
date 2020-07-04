import { useState } from 'react'

export function useQuantity(defaultQuantity) {
  const [quantity, setQuantity] = useState(defaultQuantity || 1)

  function handleChange(event) {
    // Convert a string to a number
    const num = +event.target.value

    // If not greater than or equal to one then set the quantity to one
    if (!(num >= 1)) {
      setQuantity(1)

      return false
    }

    setQuantity(num)
  }

  return { quantity, setQuantity, handleChange }
}
