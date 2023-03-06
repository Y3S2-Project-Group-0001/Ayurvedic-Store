import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const SideBar = styled.div`
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
`
const ContentContainer = styled.div`
  width: 80%;
  margin-left: 20%;
`

export default function CustomerDashBoard() {
  return (
    <MainContainer>
      <SideBar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </MainContainer>
  )
}
