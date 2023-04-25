import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import Text from '../../common/Text'
import Button from '../../common/Button'
import NewLocation from './NewLocation'
import DeliveryMiniBox from './DeliveryOption'
import DeliveryContain from './DeliveryOptionContain'
import AddAddressModel from './AddAddressModel'
import SavedLocationModel from './SavedLocationModel'
import ModifyAddressModel from './ModifyAddressModel'
import DeleteModel from './DeleteModel'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function DeliveryPayment() {
  const [selectedDelivery, setSelectedDelivery] = useState('Select')
  const [deliveryOption, setDeliveryOption] = useState(null)
  const [onCloseA, setOnCloseA] = useState(false)
  const [onCloseV, setOnCloseV] = useState(false)
  const [onCloseM, setOnCloseM] = useState(false)
  const [onCloseD, setOnCloseD] = useState(false)

  function openNewLoc(e) {
    e.preventDefault()
    setOnCloseA(true)
  }

  function openSelectLoc(e) {
    e.preventDefault()
    setOnCloseV(true)
  }

  return (
    <>
      <Header />
      <Container
        display="flex"
        align="center"
        justify="center"
        mt="100px"
        mb="50px"
      >
        <Container bgColor="#EAEAEA" w="80%">
          <Container display="flex" m="50px">
            <Container borderRight="solid" w="50%" h="400px">
              Select your Delivery Address
              <Container mb="20px" m="20px">
                <NewLocation
                  setOnClose={setOnCloseV}
                  savedLocation={selectedDelivery}
                  savedModel={true}
                  modifyModel={setOnCloseM}
                  setOnCloseD={setOnCloseD}
                ></NewLocation>
              </Container>
              <Container mb="20px" m="20px" onClick={openNewLoc}>
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
            {selectedDelivery && !deliveryOption && (
              <Button w="150px" h="40px" bgc="gray" hbc="gray">
                select both to continue
              </Button>
            )}
          </Container>
        </Container>
      </Container>
      {onCloseA && (
        <AddAddressModel setOnCloseA={setOnCloseA}></AddAddressModel>
      )}

      {onCloseV && (
        <SavedLocationModel setOnCloseA={setOnCloseV}></SavedLocationModel>
      )}

      {onCloseM && (
        <ModifyAddressModel setOnCloseA={setOnCloseM}></ModifyAddressModel>
      )}

      {onCloseD && <DeleteModel setOnCloseA={setOnCloseD}></DeleteModel>}
      <Footer />
    </>
  )
}
