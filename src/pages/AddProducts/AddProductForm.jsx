import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Dropdown from './DropDown'
import { FaAngleDown } from 'react-icons/fa'
import ImageUpload from './ImageUpload'
import axios from 'axios'
import { FileUpload } from '../examples/file-upload'
import { uploadFile } from '../../firebase'
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

function AddProducts() {
  const file_input_ref = useRef(null)
  const [state, setState] = useState('Ready.')

  const [itemName, setItemName] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [stockAmount, setStockAmount] = useState('')
  //const [image, setImage] = useState(null)

  const history = useNavigate()

  function handleSubmit(e) {
    //Upload images
    e.preventDefault()

    setState('Uploading...')
    if (file_input_ref.current) {
      // Get the file dom reference
      let file_input = file_input_ref.current

      // Check if file is set
      if (!file_input.files || file_input.files.length <= 0) {
        setState("You don't have a file selected.")
        return
      }
      // Get file object
      let file = file_input.files[0]
      console.log(file)
      // Check the image size - 2MB for example
      if (file.size > 2 * 1024 * 1024) {
        setState(
          'You exceed the max file size. ' +
            'Consider learning IT' +
            'So you can learn yourself how to code a image scaler. ' +
            'Do it in C++ with web assembly, ' +
            'So you can run it on a browser. ' +
            'Now you can scale this image' +
            'To fit the requirement. ' +
            'If you figure it out, ' +
            'Hatsune miku will personally come to your home and' +
            'Give you a kiss. ',
        )
        return
      }

      // Finally upload it
      try {
        uploadFile(file).then(res => {
          console.log('this is respose', res)
          const newItem = {
            itemName,
            description,
            category: selectedItem,
            price,
            stockAmount,
            image: res,
          }

          //add new product
          //display all the products after adding the new item
          axios
            .post('http://localhost:8000/api/item/addItem', newItem)
            .then(() => {
              alert('Item added Successfully')
              history('/allProductSeller')
            })
            .catch(err => {
              alert('save failed')
            })
        })
      } catch (e) {
        alert('save failed in firebase')
      }
    }
  }

  //drop down menu functions
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const toggle = () => setIsOpen(!isOpen)

  const onOptionClicked = item => () => {
    setSelectedItem(item)
    setIsOpen(false)
  }

  //form --> addProduct
  return (
    <Container>
      <Form as="form" onSubmit={handleSubmit} encType="multipart/form-data">
        <Label> Add Images </Label>
        <input type="file" ref={file_input_ref} />
        <Label> Product Name </Label>
        <Input
          type="text"
          id="itemName"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
          autoComplete="off"
        />
        <Label> Product Description </Label>
        <TextArea
          type="text"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          autoComplete="off"
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
              onChange={e => setPrice(e.target.value)}
              autoComplete="off"
            />
          </LeftForm>
          <RightForm>
            <Label> Stock Amount (Rs.) </Label>
            <RightFormInput
              id="stockAmount"
              type="number"
              value={stockAmount}
              onChange={e => setStockAmount(e.target.value)}
              autoComplete="off"
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
