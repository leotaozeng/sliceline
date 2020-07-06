import { useState } from 'react'

export function useChoice(defaultChoice) {
  const [choice, setChoice] = useState(defaultChoice)

  function handleChange(event) {
    setChoice(event.target.value)
  }

  return { choice, handleChange }
}
