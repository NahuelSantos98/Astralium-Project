import React from 'react'
import { useState } from 'react'
import {appFirebase} from '../services/firebaseConfig.js'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Login from '../Components/Login/Login'
import HomePage from './HomePage.jsx'

const auth = getAuth(appFirebase)

const LoginPage = () => {

  const [user, setUser]= useState(null)

  onAuthStateChanged(auth, (userFirebase)=>{
    if(userFirebase){
      setUser(userFirebase)
    }else {
      setUser(null)
    }
  })

  return (
    <div>
        {user ? <HomePage /> : <Login/>}
    </div>
  )
}

export default LoginPage;