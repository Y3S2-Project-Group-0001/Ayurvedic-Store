import React, { useState } from 'react'
import styled from 'styled-components'
import Dropdown from './DropDown'
import ImageUpload from './ImageUpload'

const Container = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const Form = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Input = styled.input`
  width: 500px;
  height: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${props => (props.hasError ? '#f44336' : '#ccc')};
  @media only screen and (max-width: 1000px) {
    width: 450px;
  }
`

const LeftFormInput = styled.input`
  width: 200px;
  height: 20px;
  padding: 10px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#ccc')};
  border-radius: 5px;
  @media only screen and (max-width: 1000px) {
    width: 450px;
  }
`

const RightFormInput = styled.input`
  width: 200px;
  height: 20px;
  padding: 10px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#ccc')};
  border-radius: 5px;
  @media only screen and (max-width: 1000px) {
    width: 450px;
  }
`

const TextArea = styled.textarea`
  width: 500px;
  height: 70%;
  padding: 10px;
  border: 1px solid ${props => (props.hasError ? '#f44336' : '#ccc')};
  border-radius: 5px;
  @media only screen and (max-width: 1000px) {
    width: 450px;
  }
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  padding: 20px 0 0 0;
`

const SubmitBtn = styled.button`
  background-color: #729b0e;
  color: white;
  padding: 11px;
  margin-top: 20px;
  border: none;
  border-radius: 2.5px;
  cursor: pointer;
  font-size: 15px;
  width: 100px;
`

const CancelBtn = styled.button`
  background-color: #767676;
  color: white;
  padding: 11px;
  margin-top: 20px;
  border: none;
  border-radius: 2.5px;
  cursor: pointer;
  font-size: 15px;
  width: 100px;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 250px;
  margin-top: 30px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const ErrorMessage = styled.span`
  color: #f44336;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`

function AddProducts() {
  const [price, setPrice] = useState('')
  const [stockAmount, setStockAmount] = useState('')

  const [priceError, setPriceError] = useState('')
  const [stockAmountError, setStockAmountError] = useState('')

  const handleSubmit = e => {
    //form submission
  }

  /*
      validate price
  */
  const validatePrice = e => {
    const priceValue = e.target.value

    if (priceValue < 0) {
      setPriceError('Please enter a valid price')
    } else {
      setPriceError('')
    }
    setPrice(priceValue)
  }

  /*
      validate stock amount
  */
  const validateStockAmount = e => {
    const stockAmountValue = e.target.value

    if (stockAmountValue < 0) {
      setStockAmountError('Please enter a valid price')
    } else {
      setStockAmountError('')
    }
    setStockAmount(stockAmountValue)
  }

  //make upcoming dates invisible
  const [maxDate, setMaxDate] = useState(getMaxDate())

  function getMaxDate() {
    const date = new Date()
    date.setDate(date.getDate())
    return date.toISOString().split('T')[0]
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label> Add Images </Label>
        <ImageUpload />
        <Label> Product Name </Label>
        <Input type="text" />
        <Label> Product Description </Label>
        <TextArea type="text" />
        <FormGroup>
          <LeftForm>
            <Label> M.F.D </Label>
            <LeftFormInput type="date" max={maxDate} />
            <Label> Price (Rs.) </Label>
            <LeftFormInput
              id="price"
              type="number"
              value={price}
              onChange={validatePrice}
              error={priceError}
            />
            {priceError && <ErrorMessage>{priceError}</ErrorMessage>}
          </LeftForm>
          <RightForm>
            <Label> Category </Label>
            <Dropdown />
            <Label> Stock Amount (Rs.) </Label>
            <RightFormInput
              id="stockAmount"
              type="number"
              value={stockAmount}
              onChange={validateStockAmount}
              error={stockAmountError}
            />
            {stockAmountError && (
              <ErrorMessage>{stockAmountError}</ErrorMessage>
            )}
          </RightForm>
        </FormGroup>
        <ButtonGroup>
          <CancelBtn>Cancel</CancelBtn>
          <SubmitBtn type="submit">Add Item</SubmitBtn>
        </ButtonGroup>
      </Form>
    </Container>
  )
}

export default AddProducts
