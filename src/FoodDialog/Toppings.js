import React from 'react'
import styled from 'styled-components'

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`

const CheckboxLabel = styled.label`
  cursor: pointer;
`

export function Toppings({ toppings, toggleTopping }) {
  return (
    <ToppingGrid>
      {toppings.map((topping, index) => (
        <CheckboxLabel key={topping.name}>
          <ToppingCheckbox
            type="checkbox"
            defaultChecked={topping.checked}
            onClick={() => toggleTopping(index)}
          />
          {topping.name}
        </CheckboxLabel>
      ))}
    </ToppingGrid>
  )
}
