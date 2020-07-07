import { useState } from 'react'

// Creating a custom hook
export function useQuantity(defaultQuantity) {
  const [quantity, setQuantity] = useState(defaultQuantity || 1)

  function handleChange(event) {
    // Convert a string to a number
    const num = +event.target.value

    if (num > 1) {
      setQuantity(num)
      return false
    }

    setQuantity(1)
  }

  return { quantity, setQuantity, handleChange }
}
