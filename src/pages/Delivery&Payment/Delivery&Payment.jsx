import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import Text from '../../common/Text'
import Button from '../../common/Button'
import NewLocation from './NewLocation'
import DeliveryMiniBox from './DeliveryOption'
import DeliveryContain from './DeliveryOptionContain'

export default function DeliveryPayment() {
  return (
    <>
      <Container display="flex" align="center" justify="center">
        <Container bgColor="#EAEAEA" w="80%" padding="5px">
          <Container display="flex" m="50px">
            <Container borderRight="solid" w="50%" h="500px">
              Select your Delivery Address
              <Container mb="20px" m="20px">
                <NewLocation savedLocation="test"></NewLocation>
              </Container>
              <Container mb="20px" m="20px">
                <NewLocation></NewLocation>
              </Container>
            </Container>
            <Container w="50%">
              Select Delivery Option
              <DeliveryContain />
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  )
}
