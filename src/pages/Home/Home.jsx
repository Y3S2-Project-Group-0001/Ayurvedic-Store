import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Banner from './Banner'

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
`

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Header type="home" />
      </HeaderContainer>

      <Banner />
    </>
  )
}
