import React, { useState } from 'react'
import styled from 'styled-components'
import ProductList from '../products.json'
import ProductCard from './ProductCard'
import { BsSearch } from 'react-icons/bs'

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
const Label = styled.label`
  padding: 15px 15px 0px 55px;
  justify-content: center;
  font-weight: 700;
`

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: gray;
  padding: 10px 20px 20px 30px;
`
const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const RadioInput = styled.input`
  margin-right: 8px;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  grid-gap: 20px; /* spacing between grid items */
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const RadioButton = ({ label, value, checked, onChange }) => {
  return (
    <RadioLabel>
      <RadioInput
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </RadioLabel>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
`

const Stars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`

const Star = styled.button`
  font-size: 2rem;
  color: ${({ selected }) => (selected ? '#ffc700' : '#A9A9A9')};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Item = styled.li`
  margin-bottom: 0.5rem;
`

const RangeInput = styled.input`
  width: 250px;
  padding: 20px 5px;
`

const FilteredItems = styled.div`
  margin-top: 20px;
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

function ProductsPage() {
  /*
      filter products by radio buttons
  */

  const [selectedValue, setSelectedValue] = useState(null)

  const handleRadioChange = event => {
    setSelectedValue(event.target.value)
  }

  const filteredProductsRadio = selectedValue
    ? ProductList.filter(product => product.category === selectedValue)
    : ProductList

  console.log(filteredProductsRadio)
  /*
      filter products by rating stars
  */
  const [selectedStars, setSelectedStars] = useState(0)

  const handleStarClick = index => {
    setSelectedStars(index + 1)
  }

  const filterProductsStars = ProductList.filter(
    item => item.rating === selectedStars,
  )

  console.log(filterProductsStars)
  /*
     filter products by price range
  */
  const [range, setRange] = useState({ min: 0, max: 5000 })

  const handleRangeChange = event => {
    setRange({ ...range, [event.target.name]: event.target.value })
  }

  const filterProductsPrice = ProductList.filter(
    item => item.price >= range.min && item.price <= range.max,
  )

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
        <LeftContainer>
          <>
            <Label> Category </Label>
            <RadioGroup>
              <RadioButton
                label="HEALTH CARE"
                value="healthCare"
                checked={selectedValue === 'healthCare'}
                onChange={handleRadioChange}
              />
              <RadioButton
                label="PERSONAL CARE"
                value="personalCare"
                checked={selectedValue === 'personalCare'}
                onChange={handleRadioChange}
              />
              <RadioButton
                label="LIFESTYLE"
                value="lifeStyle"
                checked={selectedValue === 'lifeStyle'}
                onChange={handleRadioChange}
              />
              <RadioButton
                label="HERBAL FOOD"
                value="herbalFood"
                checked={selectedValue === 'herbalFood'}
                onChange={handleRadioChange}
              />
            </RadioGroup>
          </>
          <hr />
          <>
            <Label> Ratings </Label>
            <Container>
              <Stars>
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    selected={index < selectedStars}
                    onClick={() => handleStarClick(index)}
                  >
                    &#9733;
                  </Star>
                ))}
              </Stars>
            </Container>
          </>
          <hr />
          <>
            <Label> Price Range </Label>
            <Container>
              <RangeInput
                type="range"
                min="0"
                max="5000"
                name="min"
                value={range.min}
                onChange={handleRangeChange}
              />
              <div>
                Price Range: {range.min} - {range.max}
              </div>
            </Container>
          </>
        </LeftContainer>
        <RightContainer>
          <GridContainer>
            <ProductCard
              products={[...filteredProductsRadio, ...filterProductsStars]}
            />
          </GridContainer>
        </RightContainer>
      </VerticalContainer>
    </MainContainer>
  )
}

export default ProductsPage
