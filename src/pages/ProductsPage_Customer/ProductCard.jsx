import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 15px 15px 0 15px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 250px;
`

const ButtonGroup = styled.button`
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  padding-bottom: 10px;
`

const Image = styled.div`
  padding-bottom: 10px;
`

const Title = styled.label`
  padding: 0px;
  justify-content: center;
  font-weight: 700;
`

const Price = styled.label`
  color: white;
`

const Shape = styled.div`
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
  background-color: #3d5631;
  opacity: 100%;
  padding: 10px 20px;
`

function ProductCard() {
  return (
    <Container>
      <ButtonGroup>
        <Image>
          <img src="images/products/product.png" alt="Home_Page_Image" />
        </Image>
        <Title>Amila Zindagi Juice for hair Growth and stress reliever</Title>
      </ButtonGroup>
      <Shape>
        <Price>$28.88</Price>
      </Shape>
    </Container>
  )
}

export default ProductCard
