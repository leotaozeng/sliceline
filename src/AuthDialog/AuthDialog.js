import React from 'react'
import styled from 'styled-components'
import { FirebaseAuth } from 'react-firebaseui'
import { useTranslation } from 'react-i18next'

import { uiConfig, auth } from '../firebase.config'
import { Dialog, DialogBackdrop, DialogContent } from '../FoodDialog/FoodDialog'

const AuthFormDialog = styled(Dialog)`
  height: auto;
`

const AuthDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
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
  const { t } = useTranslation()

  function hideDialog() {
    setOpenAuthDialog(false)
  }

  return (
    <div className="dialog-auth">
      <AuthFormDialog
        onSubmit={event => {
          hideDialog()
          event.preventDefault()
        }}
      >
        <AuthDialogContent>
          <AuthDialogTitle>{t('dialog.title')}</AuthDialogTitle>
          <AuthDialogSubtitle>{t('dialog.subtitle')}</AuthDialogSubtitle>
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </AuthDialogContent>
      </AuthFormDialog>

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
