import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import Text from '../../common/Text'
import Button from '../../common/Button'
import DeliveryBox from './DeliveryBox'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AddNewModel from './AddNewModel'
import SelectAddrModel from './SelectAddrModel'
import DeleteModel from './DeleteModel'
import UpdateModel from './UpdateModel'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Smallbox = styled(Container)`
  background-color: #cfd7bc;
  background-color: ${props => props.select};
  padding: 16px;
  margin: 20px;
  height: 100px;
  width: 100px;
  font-family: 'Quicksand';
  &:hover {
    background-color: #97a96f;
    transform: scale(1.05);
    transition: 0.2s;
  }
`

export default function Delivery() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [AID, setAID] = useState('')
  const [addresses, setAddresses] = useState([])
  const [selectedDelivery, setSelectedDelivery] = useState('Not Selected')
  const [selectedPrice, setPrice] = useState(0)

  const [setAddNewModel, setSetAddNewModel] = useState(false)
  const [setSelectAddrModel, setSetSelectAddrModel] = useState(false)
  const [setDeleteModel, setSetDeleteModel] = useState(false)
  const [setUpdateModel, setSetUpdateModel] = useState(false)
  const [cart, setCart] = useState('')

  const cid = '543f6267192ae5493bd709a4'
  const customerId = '543f6267192ae5493bd709a4'

  // View all addresses.
  useEffect(() => {
    axios
      .get(`http://localhost:8000/delivery/api/getAddresses/?CID=${cid}`)
      .then(response => {
        setAddresses(response.data[0].Addresses)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios
      .post('http://localhost:8000/order/api/getCustomerCart', { customerId })
      .then(response => {
        console.log('DATA semora')
        setCart(response.data[0])
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  function CContinue(title, addresss, country, selectedPrice) {
    console.log(title, addresss, country, selectedPrice)
    const address = addresss + ',' + country
    navigate('/payment', {
      state: { address: addresss, price: selectedPrice },
    })
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
              <br />
              <Button
                w="150px"
                mt="5px"
                h="40px"
                bgc="gray"
                hbc="green"
                onClick={() => setSetSelectAddrModel(true)}
              >
                Select Address
              </Button>
              <br />
              <Button
                w="150px"
                mt="5px"
                h="40px"
                bgc="gray"
                hbc="green"
                onClick={() => setSetAddNewModel(true)}
              >
                Add Address
              </Button>
              <br />
              {title} <br />
              {address} <br />
              {country} <br />
              {/* {AID} <br /> */}
              {address && (
                <>
                  <Button
                    w="100px"
                    mt="5px"
                    h="30px"
                    bgc="gray"
                    hbc="black"
                    onClick={() => setSetUpdateModel(true)}
                  >
                    Modify
                  </Button>
                  <Button
                    w="100px"
                    mt="5px"
                    h="30px"
                    bgc="red"
                    hbc="black"
                    onClick={() => setSetDeleteModel(true)}
                  >
                    Delete
                  </Button>
                </>
              )}
            </Container>
            <Container w="50%">
              <br />
              <Container display="flex" dirrection="column" align="center">
                <Container display="flex" dirrection="row">
                  <DeliveryBox
                    selected={selectedDelivery}
                    setPrice={setPrice}
                    name="POSTAL"
                    price="100"
                    setSelected={setSelectedDelivery}
                  ></DeliveryBox>
                  <DeliveryBox
                    selected={selectedDelivery}
                    setPrice={setPrice}
                    name="UPS"
                    price="250"
                    setSelected={setSelectedDelivery}
                  ></DeliveryBox>
                </Container>
                <Container display="flex" dirrection="row">
                  <DeliveryBox
                    selected={selectedDelivery}
                    setPrice={setPrice}
                    name="DHL"
                    price="300"
                    setSelected={setSelectedDelivery}
                  ></DeliveryBox>
                  <DeliveryBox
                    selected={selectedDelivery}
                    setPrice={setPrice}
                    name="FEDEX"
                    price="430"
                    setSelected={setSelectedDelivery}
                  ></DeliveryBox>
                </Container>
                {selectedDelivery}
              </Container>
              <br />
            </Container>
          </Container>

          <Container display="flex" justify="center" align="center">
            <Button
              w="150px"
              mt="5px"
              h="40px"
              bgc="gray"
              hbc="gray"
              onClick={() => CContinue(title, address, country, selectedPrice)}
            >
              Continue
            </Button>
          </Container>
        </Container>
      </Container>

      {setSelectAddrModel && (
        <SelectAddrModel
          setSelectAddrModel={setSetSelectAddrModel}
          addresses={addresses}
          setTitle={setTitle}
          setAddress={setAddress}
          setCountry={setCountry}
          setAID={setAID}
        ></SelectAddrModel>
      )}

      {setAddNewModel && (
        <AddNewModel setAddNewModel={setSetAddNewModel} cid={cid}></AddNewModel>
      )}

      {setUpdateModel && (
        <UpdateModel
          setUpdateModel={setSetUpdateModel}
          CID={cid}
          AID={AID}
          Title={title}
          Address={address}
          AID={AID}
          Country={country}
        ></UpdateModel>
      )}

      {setDeleteModel && (
        <DeleteModel
          setDeleteModel={setSetDeleteModel}
          CID={cid}
          AID={AID}
        ></DeleteModel>
      )}
      <Footer />
    </>
  )
}
