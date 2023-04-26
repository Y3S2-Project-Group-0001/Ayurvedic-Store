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

const DeleteModel = ({ setDeleteModel, CID, AID }) => {
  function closer(e) {
    e.preventDefault()
    setDeleteModel(false)
  }

  function deleted(e) {
    e.preventDefault()

    // DELETE A SINGLE ADDRESS
    axios
      .delete(
        `http://localhost:8000/delivery/api/deleteOneAddress?CID=${CID}&AID=${AID}`,
      )
      .then(response => {
        console.log('Address deleted successfully')
      })
      .catch(error => {
        console.error('Error deleting address:', error)
      })

    setDeleteModel(false)
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>You sure you want to delete?</h2>
        <ModalButton c="gray" onClick={closer}>
          Close
        </ModalButton>
        <ModalButton c="Red" onClick={deleted}>
          Delete
        </ModalButton>
      </ModalContent>
    </ModalWrapper>
  )
}

export default DeleteModel
