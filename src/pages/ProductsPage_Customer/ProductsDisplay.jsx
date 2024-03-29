import React, { useState } from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import Category from '../ProductsPage_Customer/Category'
import ProductList from '../products.json'

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  grid-gap: 20px; /* spacing between grid items */
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

function ProductsDisplay() {
  return (
    <>
      <Container>
        <GridContainer>
          <ProductCard />
        </GridContainer>
      </Container>
    </>
  )
}

export default ProductsDisplay
