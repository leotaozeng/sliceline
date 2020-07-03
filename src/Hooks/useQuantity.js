import { useState } from 'react'

export function useQuantity(defaultQuantity) {
  const [quantity, setQuantity] = useState(defaultQuantity || 1)

  function onChange(event) {
    setQuantity(event.target.value)
  }

  return { quantity, setQuantity, onChange }
}
