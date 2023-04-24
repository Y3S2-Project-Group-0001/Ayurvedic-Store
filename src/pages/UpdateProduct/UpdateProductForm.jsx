import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Dropdown from '../AddProducts/DropDown'
import ImageUpload from '../AddProducts/ImageUpload'
import Heading from './Heading'

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

const Button = styled.button`
  background-color: ${props =>
    props.cancel ? '#767676' : props.update ? '#729b0e' : '#000000'};
  color: white;
  padding: 11px;
  margin-top: 20px;
  border: none;
  border-radius: 2.5px;
  cursor: pointer;
  font-size: ${props => (props.update ? '13px' : '15px')};
  width: 100px;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 150px;
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
const ContainerHeader = styled.div`
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`

const Title = styled.h1`
  color: white;
  font-size: 50px;
`

const Shape = styled.div`
  width: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  background-color: #223818;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 66%;
`

function UpdateProductForm(props) {
  const [priceV, setPrice] = useState('')
  const [stockAmount, setStockAmount] = useState('')

  const [priceError, setPriceError] = useState('')
  const [stockAmountError, setStockAmountError] = useState('')

  const initialState = {
    itemName: '',
    description: '',
    category: '',
    price: '',
  }

  const [state, setState] = useState(initialState)

  const { itemName, description, category, price } = state

  const history = useNavigate()

  //update
  const { id } = useParams()

  useEffect(() => {
    axios
      .post(`http://localhost:3004/api/item/getOneItem/${id}`)
      .then(res => setState({ ...res.data[0] }))
  }, [id])

  const handleInputChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const UpdateData = async e => {
    e.preventDefault()

    const data = {
      itemName: itemName,
      description: description,
      category: category,
      price: price,
    }

    await axios.post(`http://localhost:3004/api/item/updateItem/${id}`, data)

    alert('Product updated successfully..')
    history('/allProductSeller')
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
    <>
      <>
        <ContainerHeader>
          <Shape />
          <img
            src="images/products/addProduct_Bg.png"
            alt="AddProduct_Bg_Image"
          />
          <TitleContent>
            <Title>Update Product</Title>
          </TitleContent>
        </ContainerHeader>
      </>
      <Container>
        <Form onSubmit={UpdateData}>
          <Label> Add Images </Label>
          <ImageUpload />
          <Label> Product Name </Label>
          <Input
            type="text"
            name="itemName"
            id="itemName"
            value={itemName || ''}
            onChange={handleInputChange}
          />
          <Label> Product Description </Label>
          <TextArea
            type="text"
            name="description"
            id="description"
            value={description || ''}
            onChange={handleInputChange}
          />
          <FormGroup>
            <LeftForm>
              <Label> M.F.D </Label>
              <LeftFormInput type="date" max={maxDate} />
              <Label> Price (Rs.) </Label>
              <LeftFormInput
                id="price"
                type="number"
                value={price || ''}
                onChange={handleInputChange}
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
            <Button cancel>Cancel</Button>
            <Button>Delete</Button>
            <Button update type="submit">
              Update Item
            </Button>
          </ButtonGroup>
        </Form>
      </Container>
    </>
  )
}

export default UpdateProductForm
