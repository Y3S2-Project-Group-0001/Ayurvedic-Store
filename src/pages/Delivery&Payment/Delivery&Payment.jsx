import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import Text from '../../common/Text'
import Button from '../../common/Button'
import NewLocation from './NewLocation'

export default function DeliveryPayment() {
  const [cardNumber, setCardNumber] = useState(null)
  const [nameOnCard, setNameOnCard] = useState(null)
  const [expOnCard, setExpOnCard] = useState(null)
  const [cvc, setCvc] = useState(null)
  const [addAmount, setAddAmount] = useState(null)

  return (
    <>
      <Container display="flex" align="center" justify="center">
        <Container bgColor="gray" w="80%" padding="5px">
          <Container display="flex" m="50px">
            <Container bgColor="red" w="50%" h="500px">
              Select your Delivery Address
            </Container>
            <Container bgColor="orange" w="50%">
              Select Delivery Option
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  )
}
