import { useState } from 'react'

export function useOrders() {
  const [orders, setOrder] = useState([])

  return { orders, setOrder }
}
