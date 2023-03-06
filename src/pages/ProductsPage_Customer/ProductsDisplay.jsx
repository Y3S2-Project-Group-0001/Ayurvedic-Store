import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

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
`

function ProductsDisplay() {
  return (
    <>
      <Container>
        <GridContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </GridContainer>
      </Container>
    </>
  )
}

export default ProductsDisplay
