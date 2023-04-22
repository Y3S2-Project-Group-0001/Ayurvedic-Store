import React, { useState } from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import ProductList from '../products.json'
import ProductCard from './ProductCard'

const SearchBarContainer = styled.div`
  margin: 50px;
  background: white;
  border-color: black;
  border-width: 2px;
  border-style: solid;
  width: 500px;
  height: 40px;
  border-radius: 100px;
  img {
    height: 100%;
    width: 100%;
  }
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

function SearchBar() {
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
    <div>
      <SearchBarInput value={query} onChange={handleInputChange} />
      <SearchIcon onClick={handleSearch}>
        <BsSearch />
      </SearchIcon>
      {product.map(pro => (
        <ProductCard key={pro.id} products={product} />
      ))}
    </div>
  )
}

export default SearchBar
