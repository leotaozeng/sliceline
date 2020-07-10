import React from 'react'
import { FirebaseAuth } from 'react-firebaseui'
import styled from 'styled-components'

import { uiConfig, auth } from '../firebase.config'
import { Dialog, DialogBackdrop, DialogContent } from '../FoodDialog/FoodDialog'

const AuthDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AuthDialogTitle = styled.h2`
  margin: 0;
  font-size: 30px;
`

const AuthDialogSubtitle = styled.p`
  margin: 0;
  text-align: center;
`

export function AuthDialogContainer({ setOpenAuthDialog }) {
  function hideDialog() {
    setOpenAuthDialog(false)
  }

  return (
    <div className="dialog-auth">
      <Dialog
        onSubmit={event => {
          hideDialog()
          event.preventDefault()
        }}
      >
        <AuthDialogContent>
          <AuthDialogTitle>Start Your Order Now</AuthDialogTitle>
          <AuthDialogSubtitle>Let's create your account.</AuthDialogSubtitle>
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </AuthDialogContent>
      </Dialog>

      <DialogBackdrop onClick={hideDialog} />
    </div>
  )
}

export function AuthDialog(props) {
  if (!props.openAuthDialog) {
    return null
  }

  return <AuthDialogContainer {...props} />
}
