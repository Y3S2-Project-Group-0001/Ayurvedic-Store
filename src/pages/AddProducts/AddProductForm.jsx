import React, { useState } from 'react'
import styled from 'styled-components'
import Dropdown from './DropDown'
import { FaAngleDown } from 'react-icons/fa'
import ImageUpload from './ImageUpload'
import axios from 'axios'
// import { Storage, uploadFile } from '../../firebase'
// import { ref, uploadBytes } from 'firebase/storage'

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
  background-color: ${props => (props.cancel ? '#767676' : '#729b0e')};
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
const UploadImage = styled.div`
  display: flex;
  flex-direction: column;
`

const ImagePreview = styled.img`
  max-width: 100%;
  margin-top: 1rem;
`

const UploadButton = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
})`
  display: none;
`

const UploadLabel = styled.label`
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  width: 100px;

  &:hover {
    background-color: white;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`

const UploadedImage = ({ src, onRemove }) => {
  const handleRemove = () => {
    onRemove(src)
  }

  return (
    <div style={{ position: 'relative' }}>
      <ImagePreview src={src} width="100px" height="100px" />
      <RemoveButton onClick={handleRemove}>&times;</RemoveButton>
    </div>
  )
}

const RemoveButton = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  font-size: 20px;
  clip-path: circle(50% at 50% 50%);
  background-color: red;

  &:hover {
    color: #990000;
  }
`

const AddImgGroup = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    width: 450px;
  }
`

const DropDownContainer = styled.div`
  position: relative;
  width: 200px;
`

const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color: #333;
  cursor: pointer;
  width: 200px;
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
  width: 100%;
  z-index: 1;
`

const DropDownList = styled.ul`
  width: 200px;
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

function AddProducts() {
  const [itemName, setItemName] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [stockAmount, setStockAmount] = useState('')

  // const formData = new FormData()

  // formData.append('itemName', itemName)
  // formData.append('description', description)
  // formData.append('category', category)
  // formData.append('price', price)
  // formData.append('stockAmount', stockAmount)
  // //formData.append('rating', rating)

  // const handleSubmit = async e => {
  //   e.preventDefault()

  //   await axios
  //     .post('http://localhost:3004/api/item/addItem', formData)
  //     .then(() => {
  //       alert('Product added successfully')
  //     })

  //   console.log(formData)
  // }

  function handleSubmit(e) {
    e.preventDefault()

    const newItem = {
      itemName,
      description,
      category,
      price,
      stockAmount,
    }

    axios
      .post('http://localhost:3004/api/item/addItem', newItem)
      .then(() => {
        alert('Item added')
      })
      .catch(err => {
        alert(err)
      })
  }

  const [priceError, setPriceError] = useState('')
  const [stockAmountError, setStockAmountError] = useState('')

  const [images, setImages] = useState([])
  const [imageUpload, setImageUpload] = useState(null)

  // const uploadImage = () => {
  //   if(imageUpload == null) return;

  //   const imageRef = ref(Storage, `products/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload).then(() => {
  //     alert("image uploaded");
  //   });
  // };

  const handleImageUpload = event => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      setImages([...images, reader.result])
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = src => {
    setImages(images.filter(imageSrc => imageSrc !== src))
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

  //drop down menu
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const toggle = () => setIsOpen(!isOpen)

  const onOptionClicked = item => () => {
    setSelectedItem(item)
    setIsOpen(false)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label> Add Images </Label>
        <ImageUpload />
        <Label> Product Name </Label>
        <Input
          type="text"
          id="itemName"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        />
        <Label> Product Description </Label>
        <TextArea
          type="text"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <FormGroup>
          <LeftForm>
            <Label> M.F.D </Label>
            <LeftFormInput type="date" max={maxDate} />
            <Label> Price (Rs.) </Label>
            <LeftFormInput
              id="price"
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </LeftForm>
          <RightForm>
            <Label> Category </Label>
            <>
              <DropDownContainer>
                <DropDownHeader
                  value={category}
                  onClick={toggle}
                  onChange={e => setCategory(e.target.value)}
                >
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
                      <DropDownItem onClick={onOptionClicked('LifeStyle')}>
                        LifeStyle
                      </DropDownItem>
                      <DropDownItem onClick={onOptionClicked('Herbal Food')}>
                        Herbal Food
                      </DropDownItem>
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
            </>
            <Label> Stock Amount (Rs.) </Label>
            <RightFormInput
              id="stockAmount"
              type="number"
              value={stockAmount}
              onChange={e => setDescription(e.target.value)}
            />
          </RightForm>
        </FormGroup>
        <ButtonGroup>
          <Button cancel>Cancel</Button>
          <Button type="submit">Add Item</Button>
        </ButtonGroup>
      </Form>
    </Container>
  )
}

export default AddProducts
