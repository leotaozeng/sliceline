import React from 'react'

import { GlobalStyle } from './Styles/GlobalStyle'
import { FoodDialog } from './FoodDialog/FoodDialog'
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'
import { Menu } from './Menu/Menu'
import { Order } from './Order/Order'
import { useOpenFood } from './Hooks/useOpenFood'
import { useOrders } from './Hooks/useOrders'

function App() {
  const openFood = useOpenFood()
  const orders = useOrders()

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Banner />
      <Menu {...openFood} />
      <Order {...orders} />
    </>
  )
}

export default App
