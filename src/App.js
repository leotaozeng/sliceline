import React from 'react'

import { GlobalStyle } from './Styles/GlobalStyle'
import { FoodDialog } from './FoodDialog/FoodDialog'
import { Order } from './Order/Order'
import { OrderDialog } from './Order/OrderDialog'
import { Menu } from './Menu/Menu'
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'

import { useAuth } from './Hooks/useAuth'
import { useOrders } from './Hooks/useOrders'
import { useOpenFood } from './Hooks/useFoodDialog'
import { useOrderDialog } from './Hooks/useOrderDialog'

function App() {
  const auth = useAuth()
  const orders = useOrders()
  const foodDialog = useOpenFood()
  const orderDialog = useOrderDialog()

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...foodDialog} {...orders} />
      <Navbar {...auth} />
      <Banner />
      <Menu {...foodDialog} />
      <Order {...foodDialog} {...orders} {...orderDialog} {...auth} />
      <OrderDialog {...orders} {...orderDialog} {...auth} />
    </>
  )
}

export default App
