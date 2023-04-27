import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import axios from 'axios'

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

const AddNewModel = ({ setAddNewModel, cid }) => {
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')

  function closer(e) {
    e.preventDefault()
    setAddNewModel(false)
  }

  const adder = async () => {
    const array = {
      Title: title,
      Address: address,
      country: country,
    }
    const data = {
      CID: cid,
      Addresses: array,
    }
    console.log(data)
    try {
      const response = await axios.post(
        'http://localhost:8000/delivery/api/addAddress',
        data,
      )
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
    setAddNewModel(false)
  }

  // function adder(e) {
  //   e.preventDefault()
  //   setAddNewModel(false)
  // }

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>Add New Address</h2>
        <form style={{ display: 'grid' }}>
          <label>
            Title:
            <ModalInput
              type="text"
              onChange={event => setTitle(event.target.value)}
            />
          </label>
          <label>
            Address:
            <ModalInput
              type="text"
              onChange={event => setAddress(event.target.value)}
            />
          </label>
          <label>
            Country:
            <ModalInput
              type="text"
              onChange={event => setCountry(event.target.value)}
            />
          </label>
          <ModalButton c="gray" onClick={closer}>
            Close
          </ModalButton>
          <ModalButton c="#729b0e" onClick={adder}>
            Add
          </ModalButton>
        </form>
      </ModalContent>
    </ModalWrapper>
  )
}

export default AddNewModel
