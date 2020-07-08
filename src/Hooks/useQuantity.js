import { useState } from 'react'

// Creating a custom hook
export function useQuantity(defaultQuantity) {
  const [quantity, setQuantity] = useState(defaultQuantity || 1)

  function handleChange(event) {
    const value = event.target.value

    if (value === '') {
      setQuantity(1)
      return false
    }

    // Convert a string value into an integer
    setQuantity(parseInt(event.target.value))
  }

  return { quantity, setQuantity, handleChange }
}
