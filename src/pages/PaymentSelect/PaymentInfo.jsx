import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'

const Text = styled.div`
  font-size: ${props => props.fs};
  font-family: 'Quicksand';
  margin-left: ${props => props.ml};
  display: ${props => props.display};
  align-items: ${props => props.align};
  text-align: ${props => props.justify};
  font-weight: 600;
`

export default function PaymentInfo() {
  const [items, setItems] = useState(24)
  const [priceItems, setPriceItems] = useState(24500)
  const [delivery, setDelivery] = useState(7500)
  const [service, setService] = useState(3000)
  const [total, setTotal] = useState(3000)

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      ></link>

      <Container
        display="grid"
        auto="auto auto"
        smallauto="auto"
        borderColor="#d1d1d1"
        borderBot="solid"
        pb="50px"
      >
        <Container
          ml="50px"
          h="100px"
          w="450px"
          borderColor="#d1d1d1"
          borderRight="solid"
          smallborderRight="none"
        >
          <Text>Payment Summery </Text>
          <Text ml="40px">Number of Items : {items}</Text>
          <Text ml="40px">Price for Total Items : {priceItems}</Text>
          <Text ml="40px">Delivery Fees : {delivery}</Text>
          <Text ml="40px">Service Charges : {service}</Text>
        </Container>
        <Container
          smallPaddingTop="20px"
          w="500px"
          display="flex"
          justify="center"
          align="center"
        >
          <Text fs="22px">Sub Total : {total}</Text>
        </Container>
      </Container>
    </>
  )
}
