import React from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'

const Smallbox = styled(Container)`
  background-color: #bed496;
  padding: 16;
  font-family: 'Quicksand';
  width: 100%;
`

const Button = styled.div`
  align-items: center;
  display: flex;
  padding: 10px;
  font-family: 'Quicksand';
  background-color: ${props => props.bgColor};
  cursor: pointer;
  div {
    margin-left: 1rem;
    a {
      color: ${props => props.color};
      transition: 0.5s;
      text-decoration: none;
      font-weight: 400;
      font-family: 'Quicksand';
    }
  }
  &:hover {
    background-color: ${props => props.hColor};
    transform: scale(1.15);
    transition: 0.1s;
  }
`

function SaveLocationBox({ savedLocation }) {
  return (
    <Smallbox display="flex" w="100%">
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      ></link>
      {savedLocation}
      <Container w="100%" display="flex" align="end" justify="end">
        <Button bgColor="gray" hColor="#626262">
          Modify
        </Button>
        <Button bgColor="red">Delete</Button>
      </Container>
    </Smallbox>
  )
}

export default SaveLocationBox
