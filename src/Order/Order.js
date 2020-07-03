import React from 'react'
import styled from 'styled-components'

import {
  DialogContent,
  DialogFooter,
  ConfirmButton
} from '../FoodDialog/FoodDialog'
import { formatPrice } from '../Data/FoodData'

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
`

const OrderItem = styled.li`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid grey;

  .quantity,
  .price {
    flex: 1;
    text-align: center;
  }

  .name {
    flex: 2;
    text-align: center;
  }
`

const OrderFooter = styled(DialogFooter)``

export function Order({ orders }) {
  return (
    <OrderStyled>
      <OrderContent>
        {orders.length > 0 ? (
          <>
            <OrderTitle>Your Order: </OrderTitle>
            <OrderList>
              {orders.map(order => (
                <OrderItem key={order.name}>
                  <div className="quantity">1</div>
                  <div className="name">{order.name}</div>
                  <div className="price">{formatPrice(order.price)}</div>
                </OrderItem>
              ))}
            </OrderList>
          </>
        ) : (
          <p className="text">Your order is looking pretty empty.</p>
        )}
      </OrderContent>

      <OrderFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </OrderFooter>
    </OrderStyled>
  )
}
