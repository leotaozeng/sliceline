import React from 'react'
import styled, { css } from 'styled-components'

import { pizzaRad } from '../Styles/colors'
import { formatPrice } from '../Data/FoodData'
import { useQuantity } from '../Hooks/useQuantity'
import { useToppings } from '../Hooks/useToppings'
import { useChoice } from '../Hooks/useChoice'

import { FoodLabel } from '../Menu/FoodGrid'
import { QuantityInput } from './QuantityInput'
import { Toppings } from './Toppings'
import { Choices } from './Choices'

const Dialog = styled.form`
  position: fixed;
  top: 50%;
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  width: 500px;
  height: calc(100vh - 100px);
  transform: translate3d(0, -50%, 0);
  border-radius: 0.3rem;
  background-color: white;
  z-index: 1001;
`

const DialogBanner = styled.header`
  min-height: 200px;
  margin-bottom: 20px;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  background: ${({ image }) => `url(${image}) no-repeat center/cover`};
`

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  left: 0;
  font-size: 30px;
  padding: 5px 40px;
`

const DialogBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

const pricePerTopping = 5

export const DialogContent = styled.div`
  flex-grow: 1;
  padding: 0 40px;
  overflow: auto;
`

export const DialogFooter = styled.footer`
  display: flex;
  justify-content: center;
  height: 60px;
  box-shadow: 0 -2px 10px 0 grey;
`

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  width: 200px;
  min-height: 20px;
  line-height: 20px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  font-family: 'Righteous', cursive;
  color: white;
  background-color: rgb(${pizzaRad});
  transition: all 0.3s;
  cursor: pointer;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      background-color: grey;
      cursor: not-allowed;

      &:hover {
        background-color: grey !important;
      }
    `}

  &:hover {
    background-color: #992337;
  }

  &:focus {
    outline: none;
  }

  .price {
    display: block;
    width: 40%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export function getPrice(order) {
  const totalToppings = order.toppings.filter(topping => {
    return topping.checked
  }).length

  return order.quantity * order.price * 10 + totalToppings * pricePerTopping
}

function FoodDialogContainer({ openFood, setOpenFood, orders, setOrders }) {
  // quantity hook
  const quantity = useQuantity(openFood.quantity)
  const toppings = useToppings(openFood.toppings)
  const selectedRadio = useChoice(openFood.choice)

  // New order || 完整的新订单
  const order = {
    ...openFood,
    quantity: quantity.quantity,
    toppings: toppings.toppings,
    choice: selectedRadio.choice
  }
  const isEditing = openFood.index >= 0

  function showToppings(food) {
    return food.section === 'Pizza'
  }

  function showChoices(food) {
    return food.section === 'Drink'
  }

  function hideDialog() {
    setOpenFood()
  }

  function editOrder() {
    orders[openFood.index] = order

    setOrders([...orders])
    hideDialog()
  }

  function addToOrder() {
    setOrders([...orders, order])
    hideDialog()
  }

  return (
    <div className="dialog">
      <Dialog
        autoComplete="off"
        onSubmit={event => {
          isEditing ? editOrder() : addToOrder()
          event.preventDefault()
        }}
      >
        <DialogBanner image={openFood.image}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>

        <DialogContent>
          <QuantityInput {...quantity} />

          {/* A topping section */}
          {showToppings(openFood) && <Toppings {...toppings} />}

          {showChoices(openFood) && (
            <Choices {...openFood} {...selectedRadio} />
          )}
        </DialogContent>

        <DialogFooter>
          <ConfirmButton
            type="submit"
            disabled={openFood.choices && !selectedRadio.choice}
          >
            {isEditing ? 'Update order:' : 'Add to order:'}
            <span className="price">{formatPrice(getPrice(order))}</span>
          </ConfirmButton>
        </DialogFooter>
      </Dialog>

      <DialogBackdrop onClick={hideDialog} />
    </div>
  )
}

export function FoodDialog(props) {
  if (!props.openFood) {
    return null
  }

  return <FoodDialogContainer {...props} />
}
