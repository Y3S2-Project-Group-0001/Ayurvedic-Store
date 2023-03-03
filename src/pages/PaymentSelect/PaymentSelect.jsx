import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PaymentInfo from './PaymentInfo'
import PaymentOptions from './PaymentOptions'
import Container from '../../common/Container'
import GooglePay from './GooglePay'
import Paypal from './Paypal'
import Cards from './Cards'

const Trans = styled.div`
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
`

export default function PaymentSelect() {
  const [method, setMethod] = useState('none')
  console.log('yo ' + method)

  return (
    <>
      <Header />
      <Container display="flex" justify="center" mt="125px" mb="60px">
        <Container
          bgColor="#ededed80"
          padding="25px"
          borderR="15px"
          display="flex"
          justify="center"
        >
          <Container display="grid">
            <PaymentInfo></PaymentInfo>
            <PaymentOptions setTheMethod={setMethod} />
            {method == 'gpay' ? <GooglePay /> : ''}
            {method == 'paypal' ? <Paypal /> : ''}
            {method == 'card' ? <Cards /> : ''}
          </Container>
        </Container>
      </Container>

      <Footer />
    </>
  )
}
