import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Dropdown from '../AddProducts/DropDown'
import Heading from './Heading'
import { FaAngleDown } from 'react-icons/fa'

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
  padding-top: 50px;
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
const DropDownContainer = styled.div`
  position: relative;
  width: 500px;
`

const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color: #333;
  cursor: pointer;
  width: 500px;
  height: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media only screen and (max-width: 1000px) {
    width: 450px;
  }
`

const DropDownIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`

const DropDownListContainer = styled.div`
  position: absolute;
  top: 44px;
  width: 500px;
  z-index: 1;
`

const DropDownList = styled.ul`
  width: 500px;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
`

const DropDownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`

/*
  update the selected product
    get an item and store the values in relevant column 
      and update the values as user entered
*/
function UpdateProductForm(props) {
  //const [priceV, setPrice] = useState('')
  //const [stockAmount, setStockAmount] = useState('')

  const [priceError, setPriceError] = useState('')
  const [stockAmountError, setStockAmountError] = useState('')

  const initialState = {
    itemName: '',
    description: '',
    category: '',
    price: '',
    stockAmount: '',
  }

  const [state, setState] = useState(initialState)

  const { itemName, description, category, price, stockAmount } = state

  const history = useNavigate()

  //update

  const { _id } = useParams()

  //get one item
  const data = async () => {
    const response = await axios.post(
      `http://localhost:8000/item/api/item/getOneItem/${_id}`,
    )
    setState([response.data])
    console.log([response.data])
  }

  useEffect(() => {
    data()
  }, [])

  const handleInputChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  //update data
  const UpdateData = async e => {
    e.preventDefault()

    const data = {
      itemName: itemName,
      description: description,
      category: category,
      price: price,
    }

    //update the item
    await axios.post(
      `http://localhost:8000/item/api/item/updateItem/${_id}`,
      data,
    )

    alert('Product updated successfully..')
    history('/allProductSeller')
  }

  /*
      validate price
  */
  // const validatePrice = e => {
  //   const priceValue = e.target.value

  //   if (priceValue < 0) {
  //     setPriceError('Please enter a valid price')
  //   } else {
  //     setPriceError('')
  //   }
  //   setPrice(priceValue)
  // }

  /*
      validate stock amount
  */
  // const validateStockAmount = e => {
  //   const stockAmountValue = e.target.value

  //   if (stockAmountValue < 0) {
  //     setStockAmountError('Please enter a valid price')
  //   } else {
  //     setStockAmountError('')
  //   }
  //   setStockAmount(stockAmountValue)
  // }

  //drop down menu functions
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const toggle = () => setIsOpen(!isOpen)

  const onOptionClicked = item => () => {
    setSelectedItem(item)
    setIsOpen(false)
  }

  return (
    <>
      <>
        <ContainerHeader>
          <TitleContent>
            <h1>Update Product</h1>
          </TitleContent>
        </ContainerHeader>
      </>
      <Container>
        <Form onSubmit={UpdateData}>
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
          <Label> Category </Label>
          <DropDownContainer>
            <DropDownHeader value={category} onClick={toggle}>
              {selectedItem ? selectedItem : 'Select an item'}
              <DropDownIcon>
                <FaAngleDown />
              </DropDownIcon>
            </DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  <DropDownItem onClick={onOptionClicked('Health Care')}>
                    Health Care
                  </DropDownItem>
                  <DropDownItem onClick={onOptionClicked('Personal Care')}>
                    Personal Care
                  </DropDownItem>
                  <DropDownItem onClick={onOptionClicked('Life Style')}>
                    LifeStyle
                  </DropDownItem>
                  <DropDownItem onClick={onOptionClicked('Herbal Food')}>
                    Herbal Food
                  </DropDownItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
          <FormGroup>
            <LeftForm>
              <Label> Price (Rs.) </Label>
              <LeftFormInput
                id="price"
                type="number"
                value={price}
                onChange={handleInputChange}
                error={priceError}
              />
              {priceError && <ErrorMessage>{priceError}</ErrorMessage>}
            </LeftForm>
            <RightForm>
              <Label> Stock Amount (Rs.) </Label>
              <RightFormInput
                id="stockAmount"
                type="number"
                value={stockAmount}
                onChange={handleInputChange}
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
