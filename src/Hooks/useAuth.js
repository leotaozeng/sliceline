import { useEffect, useState } from 'react'
import { auth, googleAuthProvider } from '../firebase.config'

export function useAuth() {
  const [authenticated, setAuthenticated] = useState()
  const [openAuthDialog, setOpenAuthDialog] = useState()

  function login() {
    // Set the authenticated status
    setAuthenticated('loading')

    auth
      .signInWithPopup(googleAuthProvider)
      .then(result => console.log(result))
      .catch(() => setAuthenticated(null))
  }

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
      user => (user ? setAuthenticated(user) : setAuthenticated(null)),
      () => setAuthenticated(null)
    )
  }, [])

  return {
    openAuthDialog,
    setOpenAuthDialog,
    loggedInUser: authenticated,
    login,
    logout
  }
}
