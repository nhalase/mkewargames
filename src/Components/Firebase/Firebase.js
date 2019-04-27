import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAGwplGHjupoLNImeiRdc9s4bLDkACLnEk',
  authDomain: 'mkewargames-firebase.firebaseapp.com',
  databaseURL: 'https://mkewargames-firebase.firebaseio.com',
  projectId: 'mkewargames-firebase',
  storageBucket: 'mkewargames-firebase.appspot.com',
  messagingSenderId: '567136866802',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()
const db = firebase.database()
const firestore = firebase.firestore()
const functions = firebase.functions()

export { auth, db, firestore, functions }

export default firebase
