import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'

const Text = styled.div`
  font-size: ${props => props.fs};
  font-family: 'Quicksand';
  margin-left: ${props => props.ml};
  display: ${props => props.display};
  align-items: ${props => props.align};
  text-align: ${props => props.justify};
`

const SelectContainer = styled(Container)`
  height: 140px;
  width: 250px;
  margin: 20px;
  border-radius: 15px;
  background-image: linear-gradient(
    to right,
    ${props => props.color1},
    ${props => props.color2}
  );
  display: flex;
  justify-content: center;
  transition: 0.3s;
  img {
    object-fit: cover;
    /* object-position: right top; */
    width: 50%%;
    height: 100%;
    border-radius: 15px;
    scale: ${props => props.scale};
  }
  &:hover {
    background: #8e9e7e;
    transform: scale(1.05);
  }
`

export default function PaymentOptions(props) {
  function setMethod(method) {
    props.setTheMethod(method)
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      ></link>

      <Container>
        <Container display="flex" justify="center" mt="30px" mb="30px">
          <Text>Choose Option</Text>
        </Container>

        <Container display="flex" justify="center">
          <Container display="grid" auto="auto auto auto" smallauto="auto">
            <SelectContainer
              color1="#ebe842"
              color2="#eb6c42"
              onClick={() => setMethod('card')}
            >
              <img src="images/payment/card.png" alt="google pay" />
            </SelectContainer>
            <SelectContainer
              color1="#63cdcf"
              color2="#2d50b3"
              onClick={() => setMethod('paypal')}
            >
              <img src="images/payment/pp.png" alt="google pay" />
            </SelectContainer>
            <SelectContainer
              color1="rgb(89, 233, 162)"
              color2="rgb(29, 209, 185)"
              scale="60%"
              onClick={() => setMethod('gpay')}
            >
              <img src="images/payment/gpay.png" alt="google pay" />
            </SelectContainer>
          </Container>
        </Container>
      </Container>
    </>
  )
}
