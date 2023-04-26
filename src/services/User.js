// import axios from '../lib/axios'
import axios from 'axios'

export const login = async data => {
  const response = await axios.post(
    'http://localhost:3001/api/auth/login',
    data,
  )
  return response
}

export const register = async data => {
  const response = await axios.post(
    'http://localhost:3001/api/auth/register',
    data,
  )
  return response
}

export const verify = async data => {
  const response = await axios.post(
    'http://localhost:3001/api/auth/register/verify',
    data,
  )
  return response
}

export const updateUser = async data => {
  const response = await axios.post(
    'http://localhost:3001/api/user/editUser',
    data,
  )
  return response
}

export const getUser = async data => {
  const response = await axios.post(
    'http://localhost:3001/api/user/getOneUser',
    data,
  )
  return response
}
export const deleteUser = async data => {
  const response = await axios.post(
    'http://localhost:3001/api/user/delete',
    data,
  )
  return response
}
