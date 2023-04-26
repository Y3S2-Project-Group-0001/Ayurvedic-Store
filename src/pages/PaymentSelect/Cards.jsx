import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import Text from '../../common/Text'
import Button from '../../common/Button'
import axios from 'axios'
import { useEffect } from 'react'
import PaymentSuccessModal from './Success'
import StripContainer from './StripeContainer'

const InText = styled(Container)`
  font-family: 'Quicksand';
`

const Buttons = styled(Button)`
  width: 150px;
  width: ${props => props.w};
`

const InnerContainer = styled(Container)`
  img {
    width: 100px;
    height: 100px;
  }
`

const Input = styled.input`
  /* width: 100%; */
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

export default function Cards() {
  const [card, setCard] = useState('2334')
  // const [email, setEmail] = useState("");
  const [amount, setAmount] = useState('634893')
  const [name, setName] = useState('Pedro pascal')
  const [exp, setExp] = useState('23/12/2077')
  const [type, setType] = useState('card')
  const [cardNumber, setCardNumber] = useState(null)
  const [nameOnCard, setNameOnCard] = useState(null)
  const [expOnCard, setExpOnCard] = useState(null)
  const [cvc, setCvc] = useState(null)
  const [email, setEmail] = useState(null)
  const [addAmount, setAddAmount] = useState(null)
  const [cards, setCards] = useState([])
  const [count, setCount] = useState(0)
  const [successModel, setSuccessModel] = useState(false)
  const cid = 'sefwesf'

  // View all cards.
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/payment/api/getPaymanetOptions/?CID=${cid}&Type=${type}`,
      )
      .then(response => {
        // console.log(response.data[0].PaymentDetails)
        setCards(response.data[0].PaymentDetails)
        // console.log('This is card' + cards)
      })
      .catch(error => {
        console.log(error)
      })
  }, [count])

  // Add a new credit card
  async function addCard() {
    setCount(1)
    console.log('add card log')
    const array = {
      Type: type,
      CardNumber: cardNumber,
      CardHolderName: nameOnCard,
      Expire: expOnCard,
      CVC: cvc,
      Email: email,
    }
    const data = {
      CID: cid,
      PaymentDetails: array,
    }
    console.log(data)
    try {
      const response = await axios.post(
        'http://localhost:8000/payment/api/addPayment',
        data,
      )
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
    setCount(2)
    // setAddNewModel(false)
  }

  function payNow(cardHolderName, expire, cardNumber, cvc) {
    console.log('pay now with CARFD methoif activated')
    setSuccessModel(true)
  }

  async function Remove(cardID) {
    // DELETE A SINGLE ADDRESS
    setCount(3)
    await axios
      .delete(
        `http://localhost:8000/payment/api/deleteOnePayment?CID=${cid}&paymentID=${cardID}`,
      )
      .then(response => {
        console.log('Method deleted successfully')
      })
      .catch(error => {
        console.error('Error deleting Method:', error)
      })
    setCount(4)
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      ></link>

      <Container>
        <Container
          bgColor="#ebd7c0"
          borderR="10px"
          pl="50px"
          pr="50px"
          ml="85px"
          mr="85px"
        >
          <Container display="flex" justify="center" pt="20px">
            <InText>Credit Card</InText>
          </Container>
          {console.log(cards)}

          {cards.map(card => (
            // <div key={card?._id}> {console.log(card?.CardNumber)}
            <Container
              display="grid"
              auto="auto auto"
              smallauto="auto"
              justify="space-between;"
              pb="20px"
            >
              <InnerContainer
                display="flex"
                align="center"
                smallPaddingTop="40px"
              >
                <img src="images/payment/card.png" alt="google pay" />
                <InText ml="50px">
                  {/* {card} <br /> */}
                  Name on card : {card.CardHolderName} <br />
                  Expires on : {card.Expire} <br />
                  Card Number :{' '}
                  {'**** **** **** ' + card.CardNumber.slice(15, 19)} <br />
                </InText>
              </InnerContainer>
              <Container display="flex" align="center" h="100px">
                <Buttons w="100px" onClick={() => Remove(card._id)}>
                  Remove
                </Buttons>
                <Buttons
                  w="100px"
                  onClick={() =>
                    payNow(
                      card.CardHolderName,
                      card.Expire,
                      card.CardNumber,
                      card.CVC,
                    )
                  }
                >
                  Pay
                </Buttons>
              </Container>
            </Container>
            // </div>
          ))}
        </Container>

        <StripContainer></StripContainer>
        {/* <Container
          bgColor="#ebd7c0"
          borderR="10px"
          pl="50px"
          pr="50px"
          ml="85px"
          mr="85px"
          mt="24px"
          pb="40px"
        >
          <Container display="flex" justify="center" pt="20px">
            <InText>Add New Card</InText>
          </Container>

          <Container display="grid">
            <label for="fname">Card Number</label>
            <Input
              type="text"
              id="fname"
              name="firstname"
              placeholder="1234 5678 9101 1234"
              onChange={e => {
                setCardNumber(e.target.value)
              }}
            />
          </Container>
          <Container display="grid">
            <label for="fname">Card Holder's Name</label>
            <Input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Name"
              onChange={e => {
                setNameOnCard(e.target.value)
              }}
            />
          </Container>
          <Container display="grid" auto="auto auto" smallauto="auto">
            <Container display="grid" mr="10px">
              <label for="fname">Expiration Date</label>
              <Input
                type="text"
                id="fname"
                name="firstname"
                placeholder="MM/YY"
                onChange={e => {
                  setExpOnCard(e.target.value)
                }}
              />
            </Container>
            <Container display="grid">
              <label for="fname">CVC</label>
              <Input
                type="text"
                id="fname"
                name="firstname"
                placeholder="CVC"
                onChange={e => {
                  setCvc(e.target.value)
                }}
              />
            </Container>
          </Container>

          <Container display="flex" justify="end">
            <Buttons onClick={() => addCard()} w="100px">
              Add Card
            </Buttons>
          </Container>
        </Container> */}
        {successModel && (
          <PaymentSuccessModal
            successModel={setSuccessModel}
          ></PaymentSuccessModal>
        )}
      </Container>
    </>
  )
}
