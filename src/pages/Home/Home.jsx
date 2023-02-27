import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Banner from './Banner'
import Categories from './Categories'
import SellAd from './SellWithUs'

const Test = styled.div`
  position: fixed;
`

export default function Home() {
  return (
    <>
      <Test></Test>
      <Header type="home" />
      <Banner />
      <Categories />
      <SellAd />
    </>
  )
}
