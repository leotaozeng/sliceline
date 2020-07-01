import React from 'react'
import styled from 'styled-components'

import { foods } from '../Data/FoodData'
import { Food, FoodGrid, FoodLink, FoodLabel } from './FoodGrid'

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0 400px 50px 20px;
`

export function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {/* key => sectionName */}
      {/* value => foods */}
      {Object.entries(foods).map(([sectionName, foods]) => (
        <section key={sectionName}>
          <h1>{sectionName}</h1>

          <FoodGrid>
            {foods.map(food => (
              <Food key={food.name} onClick={() => setOpenFood(food)}>
                <FoodLabel>{food.name}</FoodLabel>
                <FoodLink image={food.image}></FoodLink>
              </Food>
            ))}
          </FoodGrid>
        </section>
      ))}
    </MenuStyled>
  )
}
