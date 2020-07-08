import React from 'react'
import styled from 'styled-components'

import { foods, formatPrice } from '../Data/FoodData'
import { SectionName, Food, FoodGrid, FoodLink, FoodLabel } from './FoodGrid'

const MenuStyled = styled.div`
  margin: 0 400px 60px 20px;
`

export function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {/* key => sectionName */}
      {/* value => foods */}
      {Object.entries(foods).map(([sectionName, foods]) => (
        <section key={sectionName}>
          <SectionName>{sectionName}</SectionName>

          <FoodGrid>
            {foods.map(food => (
              <Food key={food.name} onClick={() => setOpenFood(food)}>
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price * 10)}</div>
                </FoodLabel>

                <FoodLink image={food.image} />
              </Food>
            ))}
          </FoodGrid>
        </section>
      ))}
    </MenuStyled>
  )
}
