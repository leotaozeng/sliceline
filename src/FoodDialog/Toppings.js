import React from 'react'
import styled from 'styled-components'

const ToppingGrid = styled.div`
  display: grid;
`

const ToppingCheckbox = styled.input``

const CheckboxLabel = styled.label``

export function Toppings() {
  return (
    <ToppingGrid>
      <CheckboxLabel />
      <ToppingCheckbox />
    </ToppingGrid>
  )
}
