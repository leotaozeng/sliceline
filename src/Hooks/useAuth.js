import { useEffect, useState } from 'react'
import { auth } from '../firebase.config'

export function useAuth() {
  const [authenticated, setAuthenticated] = useState()
  const [openAuthDialog, setOpenAuthDialog] = useState()

  function logout() {
    // Set the authenticated status
    setAuthenticated('loading')

    auth
      .signOut()
      .then(() => setAuthenticated(null))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    setAuthenticated('loading')

    auth.onAuthStateChanged(
      user => {
        if (user) {
          setOpenAuthDialog(false)
          setAuthenticated(user)
        } else {
          setAuthenticated(null)
        }
      },
      () => setAuthenticated(null)
    )
  }, [])

  return {
    openAuthDialog,
    setOpenAuthDialog,
    loggedInUser: authenticated,
    logout
  }
}
