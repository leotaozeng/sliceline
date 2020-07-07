import React from 'react'

import { GlobalStyle } from './Styles/GlobalStyle'
import { FoodDialog } from './FoodDialog/FoodDialog'
import { Menu } from './Menu/Menu'
import { Order } from './Order/Order'
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'

import { useOrders } from './Hooks/useOrders'
import { useOpenFood } from './Hooks/useOpenFood'

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
