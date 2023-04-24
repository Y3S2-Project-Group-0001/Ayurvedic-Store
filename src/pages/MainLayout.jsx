import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default function CustomerDashBoard() {
  return (
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
  )
}
