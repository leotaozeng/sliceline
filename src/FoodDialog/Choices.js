import React from 'react'
import styled from 'styled-components'

import { ToppingGrid, CheckboxLabel, ToppingCheckbox } from './Toppings'

const ChoiceGrid = styled(ToppingGrid)``

const RadioLabel = styled(CheckboxLabel)``

const ChoiceRadio = styled(ToppingCheckbox)``

export function Choices({ choice: value, choices, handleChange }) {
  return (
    <>
      <h3>Choose one</h3>
      <ChoiceGrid>
        {choices.map(choice => {
          console.log(choice === value)
          return (
            <RadioLabel key={choice}>
              <ChoiceRadio
                type="radio"
                name="choice"
                value={choice}
                checked={choice === value}
                onChange={handleChange}
              />
              {choice}
            </RadioLabel>
          )
        })}
      </ChoiceGrid>
    </>
  )
}
