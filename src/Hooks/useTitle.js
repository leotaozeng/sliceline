import { useEffect } from 'react'

export function useTitle({ openFoodDialog, orders }) {
  console.log(orders)
  useEffect(() => {
    if (openFoodDialog) {
      document.title = openFoodDialog.name
    } else {
      document.title =
        orders.length === 0
          ? 'Pick your food - Anytime, Anywhere | Sliceline'
          : `[${orders.length}] items in your order!`
    }
  })
}
