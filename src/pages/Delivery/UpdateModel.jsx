import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
const axios = require('axios')

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

const UpdateModel = ({ setUpdateModel, Title, Address, AID, CID, Country }) => {
  const [title, setTitle] = useState(Title)
  const [address, setAddress] = useState(Address)
  const [country, setCountry] = useState(Country)

  function closer(e) {
    e.preventDefault()
    setUpdateModel(false)
  }

  function adder(e) {
    e.preventDefault()
    setUpdateModel(false)
  }

  const updateAddress = async () => {
    const array = {
      _id: AID,
      Title: title,
      Address: address,
      country: country,
    }
    const data = {
      CID: CID,
      Addresses: array,
    }
    try {
      const response = await axios.put(
        'http://localhost:8000/delivery/api/updateAddress',
        data,
      )
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>MODIFY</h2>
        <form style={{ display: 'grid' }}>
          <label>
            Title:
            <ModalInput
              type="text"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </label>
          <label>
            Address:
            <ModalInput
              type="text"
              value={address}
              onChange={event => setAddress(event.target.value)}
            />
          </label>
          <label>
            Country:
            <ModalInput
              type="text"
              value={country}
              onChange={event => setCountry(event.target.value)}
            />
          </label>
          <ModalButton c="gray" onClick={closer}>
            Close
          </ModalButton>
          <ModalButton c="#729b0e" onClick={updateAddress}>
            Update
          </ModalButton>
        </form>
      </ModalContent>
    </ModalWrapper>
  )
}

export default UpdateModel
