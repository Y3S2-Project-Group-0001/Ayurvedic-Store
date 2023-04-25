import React from 'react'
import styled from 'styled-components'

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

export default function Heading() {
  return (
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
  )
}
