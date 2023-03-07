import React, { useState } from 'react'
import styled from 'styled-components'

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

function ImageUpload() {
  const [images, setImages] = useState([])

  const handleImageUpload = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      setImages([...images, reader.result])
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = src => {
    setImages(images.filter(imageSrc => imageSrc !== src))
  }

  return (
    <UploadImage>
      <AddImgGroup>
        <UploadButton id="image-upload" onChange={handleImageUpload} />
        <UploadLabel htmlFor="image-upload">
          <img src="images/products/addImageBtn.png" alt="AddImage_Image" />
          <UploadImage />
        </UploadLabel>
        <ul>
          <li>Add Least one Image</li>
          <li>All must be Image format</li>
          <li>Max size per image is 2MB</li>
        </ul>
      </AddImgGroup>

      <GridContainer>
        {images.map(src => (
          <UploadedImage key={src} src={src} onRemove={handleRemoveImage} />
        ))}
      </GridContainer>
    </UploadImage>
  )
}

export default ImageUpload
