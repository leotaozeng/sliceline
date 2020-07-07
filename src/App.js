import React from 'react'

import { GlobalStyle } from './Styles/GlobalStyle'
import { FoodDialog } from './FoodDialog/FoodDialog'
import { Menu } from './Menu/Menu'
import { Order } from './Order/Order'
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'

import { useAuth } from './Hooks/useAuth'
import { useOrders } from './Hooks/useOrders'
import { useOpenFood } from './Hooks/useOpenFood'

// import { auth, googleAuthProvider } from './firebase.config'

// auth
//   .signInWithPopup(googleAuthProvider)
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => {})

function App() {
  const auth = useAuth()
  const orders = useOrders()
  const openFood = useOpenFood()

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Banner />
      <Menu {...openFood} />
      <Order {...orders} />
    </>
  )
}

export default App
