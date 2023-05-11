import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import GetCurrentUser from '../hooks/getCurrentUser'
import { useSelector } from 'react-redux'

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const SideBar = styled.div`
  padding-top: 100px;
  width: 20%;
  height: 100vh;
  background-color: #0007;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  font-weight: 300;
  position: fixed;
  top: 75px;
  color: #fff;
  div {
    cursor: pointer;
  }
`
const ContentContainer = styled.div`
  width: 80%;
  margin-left: 20%;
`

export default function CustomerDashBoard() {
  const navigate = useNavigate()
  const user = GetCurrentUser()
  const userDetails = useSelector(state => state.user)

  function navigateToOrders() {
    navigate('/admin/dashBoard/orders')
  }

  function navigateToOrderHistory() {
    navigate('/customer/dashBoard/orderHistory')
  }

  return (
    <MainContainer>
      <SideBar>
        <div>User Profile</div>
        {userDetails.customer.type === 'admin' && (
          <div onClick={() => navigateToOrders()}>Orders</div>
        )}
        {userDetails.customer.type === 'user' && (
          <div onClick={() => navigateToOrderHistory()}>Order History</div>
        )}
      </SideBar>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </MainContainer>
  )
}
