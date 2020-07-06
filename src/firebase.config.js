// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

// Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCYepthBoI7yaSSQxdGsf_w9HL2RrKdkuc',
  authDomain: 'react-sliceline.firebaseapp.com',
  databaseURL: 'https://react-sliceline.firebaseio.com',
  projectId: 'react-sliceline',
  storageBucket: 'react-sliceline.appspot.com',
  messagingSenderId: '37357682404',
  appId: '1:37357682404:web:3ac998115674793e04f6f1',
  measurementId: 'G-Q1YE30HL0W'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
