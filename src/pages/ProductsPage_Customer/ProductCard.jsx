import React, { useState } from 'react'
import styled from 'styled-components'
import RatingDisplay from '../ProductsPage_Customer/RatingDisplay'
import Category from './Category'
import ProductList from '../products.json'

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

const Image = styled.img`
  padding-bottom: 10px;
  width: 240px;
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
  margin-top: 40px;
`

function ProductCard({ products }) {
  return (
    <>
      {products &&
        products.map(pro => (
          <Container>
            <ButtonGroup>
              <Image src={pro.image} alt="Product_Image" />

              <Title>{pro.name}</Title>
            </ButtonGroup>
            <RatingDisplay parameter={pro.rating} />
            <Shape>
              <Price>LKR {pro.price}.00</Price>
            </Shape>
          </Container>
        ))}
    </>
  )
}

export default ProductCard
