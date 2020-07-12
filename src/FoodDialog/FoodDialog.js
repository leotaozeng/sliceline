import React from 'react'
import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'

import { pizzaRad } from '../Styles/colors'
import { formatPrice } from '../Data/FoodData'
import { useQuantity } from '../Hooks/useQuantity'
import { useToppings } from '../Hooks/useToppings'
import { useChoice } from '../Hooks/useChoice'

import { FoodLabel } from '../Menu/FoodGrid'
import { QuantityInput } from './QuantityInput'
import { Toppings } from './Toppings'
import { Choices } from './Choices'

const DialogBanner = styled.header`
  min-height: 200px;
  margin-bottom: 20px;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: ${({ image }) => `url(${image}) no-repeat center/cover`};
`

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  left: 0;
  font-size: 30px;
  padding: 5px 40px;
`

export const Dialog = styled.form`
  position: fixed;
  top: 50%;
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  width: 500px;
  transform: translate3d(0, -50%, 0);
  border-radius: 0.5rem;
  background-color: white;
  z-index: 1001;
`

export const DialogBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

export const DialogContent = styled.div`
  padding: 0 40px 100px;
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
  const pricePerTopping = 5
  const totalToppings = order.toppings.filter(topping => {
    return topping.checked
  }).length

  return order.quantity * order.price * 10 + totalToppings * pricePerTopping
}

function FoodDialogContainer({
  orders,
  openFoodDialog,
  setOrders,
  setOpenFoodDialog
}) {
  const { t } = useTranslation()

  // quantity hook
  const quantity = useQuantity(openFoodDialog.quantity)
  const toppings = useToppings(openFoodDialog.toppings)
  const selectedRadio = useChoice(openFoodDialog.choice)

  // New order || 完整的新订单
  const order = {
    ...openFoodDialog,
    quantity: quantity.quantity,
    toppings: toppings.toppings,
    choice: selectedRadio.choice
  }
  const isEditing = openFoodDialog.index >= 0

  function showToppings(food) {
    return food.section === 'pizza'
  }

  function showChoices(food) {
    return food.section === 'drink'
  }

  function hideDialog() {
    setOpenFoodDialog(false)
  }

  function editOrder() {
    orders[openFoodDialog.index] = order

    setOrders([...orders])
    hideDialog()
  }

  function addToOrder() {
    setOrders([...orders, order])
    hideDialog()
  }

  return (
    <div className="dialog-food">
      <Dialog
        autoComplete="off"
        onSubmit={event => {
          isEditing ? editOrder() : addToOrder()
          event.preventDefault()
        }}
      >
        <DialogBanner image={openFoodDialog.image}>
          <DialogBannerName>{openFoodDialog.name}</DialogBannerName>
        </DialogBanner>

        <DialogContent>
          <QuantityInput {...quantity} />

          {/* A topping section */}
          {showToppings(openFoodDialog) && <Toppings {...toppings} />}

          {showChoices(openFoodDialog) && (
            <Choices {...openFoodDialog} {...selectedRadio} />
          )}
        </DialogContent>

        <DialogFooter>
          <ConfirmButton
            type="submit"
            disabled={openFoodDialog.choices && !selectedRadio.choice}
          >
            {isEditing ? t('dialog.button-update') : t('dialog.button-add')}
            <span className="price">{formatPrice(getPrice(order))}</span>
          </ConfirmButton>
        </DialogFooter>
      </Dialog>

      <DialogBackdrop onClick={hideDialog} />
    </div>
  )
}

export function FoodDialog(props) {
  if (!props.openFoodDialog) {
    return null
  }

  return <FoodDialogContainer {...props} />
}
