import React, { useState } from 'react'

import { GlobalStyle } from './Styles/GlobalStyle'
import { FoodDialog } from './FoodDialog/FoodDialog'
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'
import { Menu } from './Menu/Menu'
import { Order } from './Order/Order'

function App() {
  const [openFood, setOpenFood] = useState()

  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
      <Order />
    </>
  )
}

export default App
