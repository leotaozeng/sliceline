import { useEffect, useState } from 'react'
import { auth, googleAuthProvider } from '../firebase.config'

export function useAuth() {
  const [authenticated, SetAuthenticated] = useState()

  function login() {
    // Set the authenticated status
    SetAuthenticated('loading')

    auth
      .signInWithPopup(googleAuthProvider)
      .then(result => console.log(result))
      .catch(() => SetAuthenticated(null))
  }

  function logout() {
    // Set the authenticated status
    SetAuthenticated('loading')

    auth
      .signOut()
      .then(() => SetAuthenticated(null))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    SetAuthenticated('loading')

    auth.onAuthStateChanged(
      user => (user ? SetAuthenticated(user) : SetAuthenticated(null)),
      () => SetAuthenticated(null)
    )
  }, [])

  return { loggedInUser: authenticated, login, logout }
}
