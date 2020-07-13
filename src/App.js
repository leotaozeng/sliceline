import React, { Suspense } from 'react'

import { GlobalStyle } from './Styles/GlobalStyle'
import { AuthDialog } from './AuthDialog/AuthDialog'
import { FoodDialog } from './FoodDialog/FoodDialog'
import { Order } from './Order/Order'
import { OrderDialog } from './Order/OrderDialog'
import { Menu } from './Menu/Menu'
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'

import { useAuth } from './Hooks/useAuth'
import { useTitle } from './Hooks/useTitle'
import { useOrders } from './Hooks/useOrders'
import { useOpenFood } from './Hooks/useFoodDialog'
import { useOrderDialog } from './Hooks/useOrderDialog'

// loading component for suspense fallback
function Loader() {
  return <div>loading...</div>
}

function App() {
  const auth = useAuth()
  const orders = useOrders()
  const foodDialog = useOpenFood()
  const orderDialog = useOrderDialog()

  useTitle({ ...foodDialog, ...orders })

  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <Navbar {...auth} />
      <Banner />
      <Menu {...foodDialog} />
      <Order {...foodDialog} {...orders} {...orderDialog} {...auth} />
      <OrderDialog {...orders} {...orderDialog} {...auth} />
      <FoodDialog {...foodDialog} {...orders} />
      <AuthDialog {...auth} />
    </Suspense>
  )
}

export default App
