import { useEffect, useState } from 'react'
import { auth, googleAuthProvider } from '../firebase.config'

export function useAuth() {
  const [authenticated, SetAuthenticated] = useState()

  function login() {
    SetAuthenticated('loading')

    auth
      .signInWithPopup(googleAuthProvider)
      .then(function (result) {
        console.log(result)
      })
      .catch(function (error) {
        SetAuthenticated(null)
      })
  }

  function logout() {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        SetAuthenticated(null)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    auth.onAuthStateChanged(
      user => {
        if (user) {
          // User is signed in.
          SetAuthenticated(user)
        }
      },
      error => {
        // An error happened.
        console.log(123, error)
        SetAuthenticated(null)
      }
    )
  }, [])

  return { loggedInUser: authenticated, login, logout }
}
