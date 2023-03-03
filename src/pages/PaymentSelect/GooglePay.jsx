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
    height: 50px;
  }
`

export default function GooglePay() {
  const [email, setEmail] = useState('semora@gmail.com')
  // const [email, setEmail] = useState("");
  const [amount, setAmount] = useState('634893')

  function payNow() {
    console.log('pay now methoif activated')
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      ></link>

      <Container>
        <Container
          bgColor="#d8ebc0"
          borderR="10px"
          pl="50px"
          pr="50px"
          ml="85px"
          mr="85px"
        >
          <Container display="flex" justify="center" pt="20px">
            <InText>Google Pay</InText>
          </Container>

          {email ? (
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
                <img src="images/payment/gpay.png" alt="google pay" />
                <InText ml="50px">
                  {email} <br />
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
      </Container>
    </>
  )
}
