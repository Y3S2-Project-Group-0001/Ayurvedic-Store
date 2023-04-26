import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import { useEffect } from 'react'

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`

const ModalInput = styled.input`
  /* width: 100%; */
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`

const ModalButton = styled.button`
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: ${props => props.c};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

const Smallbox = styled(Container)`
  background-color: #bed496;
  padding: 16;
  font-family: 'Quicksand';
  width: 100%;
  border-bottom: solid;
  border-color: #658726;
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

const SelectAddrModel = ({
  setSelectAddrModel,
  addresses,
  setTitle,
  setAddress,
  setCountry,
  setAID,
}) => {
  function save(e, title, addr, country, id) {
    e.preventDefault()
    setTitle(title)
    setAddress(addr)
    setCountry(country)
    setAID(id)
    setSelectAddrModel(false)
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>Select your Location</h2>

        {addresses.map(addr => (
          <div key={addr._id}>
            <Smallbox
              display="flex"
              w="100%"
              onClick={e =>
                save(e, addr.Title, addr.Address, addr.country, addr._id)
              }
            >
              <link
                href="https://fonts.googleapis.com/css?family=Quicksand"
                rel="stylesheet"
              ></link>
              {addr.Title}
              <br />
              {addr.Address}
              {addr.country}
              {/* <br />
                {addr._id} */}
              <Container
                w="100%"
                display="flex"
                align="end"
                justify="end"
              ></Container>
            </Smallbox>
          </div>
        ))}

        <ModalButton c="gray" onClick={() => setSelectAddrModel(false)}>
          Close
        </ModalButton>
      </ModalContent>
    </ModalWrapper>
  )
}

export default SelectAddrModel
