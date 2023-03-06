import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import Text from '../../common/Text'
import Button from '../../common/Button'

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
  const [card, setCard] = useState('**** **** **** **24')
  // const [email, setEmail] = useState("");
  const [amount, setAmount] = useState('634893')
  const [name, setName] = useState('Pedro pascal')
  const [exp, setExp] = useState('23/12/2077')

  const [cardNumber, setCardNumber] = useState(null)
  const [nameOnCard, setNameOnCard] = useState(null)
  const [expOnCard, setExpOnCard] = useState(null)
  const [cvc, setCvc] = useState(null)
  const [addAmount, setAddAmount] = useState(null)

  function payNow() {
    console.log('pay now with CARFD methoif activated')
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

          {card ? (
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
                  {card} <br />
                  Name on card : {name} <br />
                  Expires on : {exp} <br />
                  Amount: {amount}
                </InText>
              </InnerContainer>
              <Container display="flex" align="center" h="100px">
                <Buttons w="100px" onClick={() => payNow()}>
                  Pay
                </Buttons>
              </Container>
            </Container>
          ) : (
            <Container p="20px">
              <Container display="flex" justify="center">
                <InText> You dont have any accounts linked!</InText>
              </Container>
              <Container display="flex" justify="center" mt="20px">
                <Buttons>Link An Account</Buttons>
              </Container>
            </Container>
          )}
        </Container>

        <Container
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
          <Container display="grid">
            <label for="fname">Amount</label>
            <Input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Amount"
              onChange={e => {
                setAddAmount(e.target.value)
              }}
            />
          </Container>

          <Container display="flex" justify="end">
            <Buttons onClick={() => payNow()} w="100px">
              Pay
            </Buttons>
          </Container>
        </Container>
      </Container>
    </>
  )
}
