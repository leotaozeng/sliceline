import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { foods, formatPrice } from '../Data/FoodData'
import {
  SectionName,
  FoodGrid,
  FoodGridItem,
  FoodLink,
  FoodLabel
} from './FoodGrid'

const MenuStyled = styled.div`
  margin: 0 400px 60px 20px;
`

export function Menu({ setOpenFoodDialog }) {
  const { t } = useTranslation()

  return (
    <MenuStyled>
      {/* key => sectionName */}
      {/* value => foods */}
      {Object.entries(foods).map(([sectionName, foods]) => (
        <section key={sectionName}>
          <SectionName>{t(`menu.${sectionName}.title`)}</SectionName>

          <FoodGrid>
            {foods.map(food => (
              <FoodGridItem
                key={food.name}
                onClick={() => setOpenFoodDialog(food)}
              >
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price * 10)}</div>
                </FoodLabel>

                <FoodLink image={food.image} />
              </FoodGridItem>
            ))}
          </FoodGrid>
        </section>
      ))}
    </MenuStyled>
  )
}
