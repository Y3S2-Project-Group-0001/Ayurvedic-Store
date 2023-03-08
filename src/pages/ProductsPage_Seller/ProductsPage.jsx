import React from 'react'
import styled from 'styled-components'
import Category from '../ProductsPage_Customer/Category'
import PriceRange from '../ProductsPage_Customer/PriceRange'
import ProductsDisplay from './ProductsDisplay'
import RatingsRange from '../ProductsPage_Customer/RatingsRange'
import SearchBar from '../ProductsPage_Customer/SearchBar'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const HorizontalContainer = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
`

const LeftContainer = styled.div`
  flex: 2;
`

const RightContainer = styled.div`
  flex: 9;
`

function ProductsPage() {
  return (
    <MainContainer>
      <HorizontalContainer>
        <SearchBar />
      </HorizontalContainer>
      <VerticalContainer>
        <LeftContainer>
          <Category />
          <hr />
          <RatingsRange />
          <hr />
          <PriceRange />
        </LeftContainer>
        <RightContainer>
          <ProductsDisplay />
        </RightContainer>
      </VerticalContainer>
    </MainContainer>
  )
}

export default ProductsPage
