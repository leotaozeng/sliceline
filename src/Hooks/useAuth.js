import { useState } from 'react'
import { auth, googleAuthProvider } from '../firebase.config'

export function useAuth() {
  function login() {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return { login }
}
