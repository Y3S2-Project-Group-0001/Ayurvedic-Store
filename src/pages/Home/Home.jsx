import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Banner from './Banner'
import Categories from './Categories'
import SellAd from './SellWithUs'
import AboutUsHome from './AboutUsInHome'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
      <Header type="home" />
      <Banner />
      <Categories />
      <SellAd />
      <AboutUsHome />
      <Footer />
    </>
  )
}
