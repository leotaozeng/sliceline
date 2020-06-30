import React from 'react'
import styled from 'styled-components'
import { pizzaRad } from '../Styles/colors'
import { Title } from '../Styles/title'

const NavbarStyled = styled.div`
  position: fixed;
  background-color: ${pizzaRad};
  padding: 10px;
  width: 100%;
`

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        Sliceline
        <span role="img" aria-label="logo">
          🍕
        </span>
      </Logo>
    </NavbarStyled>
  )
}
