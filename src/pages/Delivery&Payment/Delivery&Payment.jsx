import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import Text from '../../common/Text'
import Button from '../../common/Button'
import NewLocation from './NewLocation'
import DeliveryMiniBox from './DeliveryOption'
import DeliveryContain from './DeliveryOptionContain'

export default function DeliveryPayment() {
  const [selectedDelivery, setSelectedDelivery] = useState(null)
  const [deliveryOption, setDeliveryOption] = useState(null)

  return (
    <>
      <Container display="flex" align="center" justify="center">
        <Container bgColor="#EAEAEA" w="80%">
          <Container display="flex" m="50px">
            <Container borderRight="solid" w="50%" h="400px">
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
          <Container display="flex" justify="center" align="center">
            {selectedDelivery && deliveryOption && (
              <Button w="150px" h="40px">
                Proceed To Pay
              </Button>
            )}
            {!selectedDelivery && !deliveryOption && (
              <Button w="150px" h="40px" bgc="gray" hbc="gray">
                select both to continue
              </Button>
            )}
          </Container>
        </Container>
      </Container>
    </>
  )
}
