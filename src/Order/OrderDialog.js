import React from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogFooter,
  ConfirmButton
} from '../FoodDialog/FoodDialog'

import { realtimeDB } from '../firebase.config'

function OrderDialogContainer({ setOrders, setOpenOrderDialog, loggedInUser }) {
  function hideDialog() {
    const ordersRef = realtimeDB.ref(`orders/${loggedInUser.uid}`)

    ordersRef.on('child_added', () => {
      setOrders([])
      setOpenOrderDialog(false)
    })
  }

  return (
    <div className="dialog-order">
      <Dialog
        onSubmit={event => {
          hideDialog()
          event.preventDefault()
        }}
      >
        <DialogContent>
          <h2>
            <span role="img" aria-label="car">
              🚚
            </span>
            &nbsp;Your order is on your way!
          </h2>
          <p>
            You have been emailed confirmation of your order. Thanks for
            choosing Sliceline.
          </p>
        </DialogContent>

        <DialogFooter>
          <ConfirmButton type="submit">I'm still hungry</ConfirmButton>
        </DialogFooter>
      </Dialog>

      <DialogBackdrop onClick={hideDialog} />
    </div>
  )
}

export function OrderDialog(props) {
  if (!props.openOrderDialog) {
    return null
  }

  return <OrderDialogContainer {...props} />
}
