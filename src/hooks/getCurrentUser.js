import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { cartActions } from '../Store/cart-slice'
import { useDispatch } from 'react-redux'
import { userActions } from '../Store/user-slice'

const GetCurrentUser = () => {
  const currentUser = localStorage.getItem('token')
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentUser && !user) {
      const decodedToken = jwt_decode(currentUser)
      setUser(decodedToken.data)
      dispatch(userActions.replaceCustomer({ customer: decodedToken.data }))
    }
  }, [user, currentUser, dispatch])
  if (user != null) return user
}

export default GetCurrentUser
