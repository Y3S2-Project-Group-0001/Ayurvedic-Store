import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Category from '../ProductsPage_Customer/Category'
import PriceRange from '../ProductsPage_Customer/PriceRange'
import ProductsDisplay from './ProductsDisplaySeller'
import { BsSearch } from 'react-icons/bs'
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
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  margin: 12px;
  flex: 2;

  @media only screen and (max-width: 700px) {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const RightContainer = styled.div`
  flex: 9;
`
const SearchBarInput = styled.input`
  border-color: #d9d9d9;
  width: 500px;
  height: 40px;
  border-radius: 100px;
  font-size: 16px;
  margin: 60px 10px;

  &::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &::after svg {
    width: 16px;
    height: 16px;
  }

  @media only screen and (max-width: 700px) {
    width: 400px;
  }
`

const SearchIcon = styled.button`
  clip-path: circle(50% at 50% 50%);
  background-color: #3d5631;
  color: white;
  padding: 9px;
  border: none;
  margin: 2px;
  border: 1px solid #3d5631;
  border-radius: 50%;
  cursor: pointer;
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
  width: 200px;

  margin-left: 950px;
`

function ProductsPage() {
  const [ProductList, setProductList] = useState([])

  /*
    function search
  */
  const [query, setQuery] = useState(null)
  const [product, setProducts] = useState(ProductList)

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const handleSearch = () => {
    if (query) {
      const filteredProducts = ProductList.filter(product => {
        return product.name.toLowerCase().includes(query.toLowerCase())
      })
      setProducts(filteredProducts)
      console.log(filteredProducts)
    } else {
      setProducts(ProductList)
    }
  }

  return (
    <MainContainer>
      <HorizontalContainer>
        <div>
          <SearchBarInput value={query} onChange={handleInputChange} />
          <SearchIcon onClick={handleSearch}>
            <BsSearch />
          </SearchIcon>
        </div>
      </HorizontalContainer>
      <VerticalContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <Link to="/addProduct">
            <Button>Add Item</Button>
          </Link>

          <ProductsDisplay />
        </RightContainer>
      </VerticalContainer>
    </MainContainer>
  )
}

export default ProductsPage
