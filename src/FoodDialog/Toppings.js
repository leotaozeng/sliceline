import React from 'react'
import styled from 'styled-components'

export const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const CheckboxLabel = styled.label`
  cursor: pointer;
`

export const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`

export function Toppings({ toppings, toggleTopping }) {
  return (
    <>
      <h3>Would you like some toppings?</h3>
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
    </>
  )
}
