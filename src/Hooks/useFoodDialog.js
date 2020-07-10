import { useState } from 'react'

export function useOpenFood() {
  const [openFoodDialog, setOpenFoodDialog] = useState()

  return { openFoodDialog, setOpenFoodDialog }
}
