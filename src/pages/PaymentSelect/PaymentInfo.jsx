import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import axios from 'axios'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Text = styled.div`
  font-size: ${props => props.fs};
  font-family: 'Quicksand';
  margin-left: ${props => props.ml};
  display: ${props => props.display};
  align-items: ${props => props.align};
  text-align: ${props => props.justify};
  font-weight: 600;
`

export default function PaymentInfo({
  setSubTotal,
  setSaveAddress,
  setSavePrice,
  setCart,
}) {
  const [items, setItems] = useState(24)
  const [priceItems, setPriceItems] = useState(24500)
  const [delivery, setDelivery] = useState(188)
  const [service, setService] = useState(250)
  const [total, setTotal] = useState(0)
  const [update, setUpdate] = useState(0)
  const location = useLocation()
  const addThisAddress = location.state.address
  const addThisPrice = location.state.price
  const customerId = location.state.cid
  setSaveAddress(addThisAddress)
  setSavePrice(addThisPrice)
  // const [subTotal, setSubTotal] = useState(0)
  const [cartTot, setCartTot] = useState('no data yet')
  // const customerId = '543f6267192ae5493bd709a4'

  useEffect(() => {
    axios
      .post('http://localhost:8000/order/api/getCustomerCart', { customerId })
      .then(response => {
        setCartTot(response.data[0])
        setCart(response.data[0])
        console.log(response.data[0])
        setItems(cartTot.products.length)
        setTotal(cartTot.subTotal + service + +addThisPrice)
        setSubTotal(cartTot.subTotal + service + +addThisPrice)
        setUpdate(2)
      })
      .catch(error => {
        console.error(error)
      })
  }, [update])

  setTimeout(() => {
    setUpdate(1)
  }, 500)

  function AddOrder() {
    console.log('Add ORder tested')
  }

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
          <Text ml="40px">Price for Total Items : {cartTot.subTotal}</Text>
          <Text ml="40px">Delivery Fees : {addThisPrice}</Text>
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
