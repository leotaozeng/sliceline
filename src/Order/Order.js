import React from 'react'
import styled, { css } from 'styled-components'

import {
  DialogContent,
  DialogFooter,
  ConfirmButton
} from '../FoodDialog/FoodDialog'
import { formatPrice } from '../Data/FoodData'
import { getPrice } from '../FoodDialog/FoodDialog'

const OrderStyled = styled.div`
  position: fixed;
  top: 49px;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 340px;
  height: calc(100vh - 49px);
  background-color: white;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  z-index: 998;
`

const OrderContent = styled(DialogContent)`
  padding: 20px;

  .text {
    text-align: center;
  }
`

const OrderTitle = styled.h2`
  margin: 0;
  border-bottom: 1px solid grey;
  padding: 10px 0;
  font-size: 18px;
`

const OrderList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const OrderItemContainer = styled.li`
  padding: 10px 0;
  border-bottom: dashed 1px #9da3a6;

  ${props =>
    props.editable &&
    css`
      &:hover {
        cursor: pointer;
        background-color: #eee;
      }
    `}
`

const OrderItem = styled.div`
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-around;
  align-items: baseline;
  padding: 10px 0;

  .quantity,
  .price {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .quantity,
  .btn-delete {
    text-align: center;
  }

  .btn-delete {
    cursor: pointer;
  }

  .price {
    text-align: right;
  }
`

const DetailItem = styled.div`
  color: grey;
  font-size: 10px;
`

const OrderFooter = styled(DialogFooter)``

export function Order({ orders, setOrders, setOpenFood, login, loggedInUser }) {
  const subtotal = orders.reduce((total, current) => {
    return total + getPrice(current)
  }, 0)

  const tax = subtotal * 0.07
  const total = subtotal + tax

  function deleteOrder(index) {
    const newOrders = [...orders]
    newOrders.splice(index, 1)

    setOrders(newOrders)
  }

  function setOrderIndex(order, index) {
    setOpenFood({ ...order, index })
  }

  function hasCheckedToppings(toppings) {
    const newToppings = toppings.filter(topping => topping.checked)

    return newToppings.length > 0
  }

  function showCheckedToppings(toppings) {
    return toppings
      .filter(topping => topping.checked)
      .map(item => item.name)
      .join(', ')
  }

  function checkAuthenticated() {
    if (loggedInUser) {
      console.log('logged in')
    } else {
      login()
    }
  }

  return (
    <OrderStyled>
      <OrderContent>
        {orders.length > 0 ? (
          <>
            <OrderTitle>Your Order: </OrderTitle>

            <OrderList>
              {orders.map((order, index) => (
                <OrderItemContainer
                  editable
                  key={order.name + Math.random().toFixed(2)}
                  onClick={() => setOrderIndex(order, index)}
                >
                  <OrderItem>
                    <div className="quantity" title={order.quantity}>
                      {order.quantity}
                    </div>
                    <div className="name">{order.name}</div>
                    <div
                      className="btn-delete"
                      onClick={e => {
                        e.stopPropagation()
                        deleteOrder(index)
                      }}
                    >
                      🗑
                    </div>
                    <div className="price" title={formatPrice(getPrice(order))}>
                      {formatPrice(getPrice(order))}
                    </div>
                  </OrderItem>

                  {hasCheckedToppings(order.toppings) && (
                    <DetailItem>
                      {showCheckedToppings(order.toppings)}
                    </DetailItem>
                  )}

                  {order.choice && <DetailItem>{order.choice}</DetailItem>}
                </OrderItemContainer>
              ))}

              <OrderItemContainer>
                <OrderItem>
                  <div></div>
                  <div className="subtotal">Sub-Total</div>
                  <div></div>
                  <div className="price" title={formatPrice(subtotal)}>
                    {formatPrice(subtotal)}
                  </div>
                </OrderItem>

                <OrderItem>
                  <div></div>
                  <div className="tax">Tax</div>
                  <div></div>
                  <div className="price" title={formatPrice(tax)}>
                    {formatPrice(tax)}
                  </div>
                </OrderItem>

                <OrderItem>
                  <div></div>
                  <div className="total">Total</div>
                  <div></div>
                  <div className="price" title={formatPrice(total)}>
                    {formatPrice(total)}
                  </div>
                </OrderItem>
              </OrderItemContainer>
            </OrderList>
          </>
        ) : (
          <p className="text">Your order is looking pretty empty.</p>
        )}
      </OrderContent>

      <OrderFooter>
        <ConfirmButton onClick={checkAuthenticated}>Checkout</ConfirmButton>
      </OrderFooter>
    </OrderStyled>
  )
}
