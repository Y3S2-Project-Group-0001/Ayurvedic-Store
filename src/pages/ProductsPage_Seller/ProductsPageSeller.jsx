import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'

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
const ButtonAdd = styled.button`
  background-color: ${props => (props.cancel ? '#767676' : '#729b0e')};
  color: white;
  padding: 11px;
  margin-bottom: 10px;
  border: none;
  border-radius: 2.5px;
  cursor: pointer;
  font-size: ${props => (props.update ? '13px' : '15px')};
  width: 200px;
  margin-left: 950px;

  @media only screen and (max-width: 1500px) {
    margin-left: 50px;
  }
`
const CardContainer = styled.div`
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
const CardTitle = styled.label`
  display: inline-block;
  text-align: center;
  padding: 0px;
  font-weight: 700;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  grid-gap: 20px; /* spacing between grid items */
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
const Button = styled.button`
  background-color: ${props => (props.cancel ? '#767676' : '#729b0e')};
  color: white;
  padding: 11px;
  margin-top: 20px;
  border: none;
  border-radius: 2.5px;
  cursor: pointer;
  font-size: ${props => (props.update ? '13px' : '15px')};
  width: 300px;
`
const Shape = styled.div`
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
  background-color: #3d5631;
  opacity: 100%;
  padding: 10px 20px;
  margin-top: 40px;
`
const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 45px;
  width: 150px;
  margin-bottom: 5px;

  position: absolute;
`
const ButtonIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: black;
  opacity: 63%;
  padding: 5px 20px;
  color: white;
  margin-top: 45px;
`
/*
  This component displays all the products(Seller View)
    Search function is available
    Delete function is available 
    Navigate to the update page
*/

function ProductsPage() {
  const [ProductList, setProductList] = useState([])

  //get all the items
  const data = async () => {
    const response = await axios.post(
      'http://localhost:8003/api/item/getAllItems',
    )
    setProductList(response.data)
    console.log(data)
  }

  useEffect(() => {
    data()
  }, [])

  function refresh() {
    window.parent.location = window.parent.location.href
  }

  //delete the item
  //identify the item by id
  const deleteItem = _id => {
    alert('The item will delete permermenantly')
    axios.post(`http://localhost:8000/api/item/deleteItem/${_id}`)
    refresh()
  }

  /*
      filter products by buttons
  */
  const [filterItems, setFilterItems] = useState(ProductList)

  const filterResult = cateItem => {
    const result = ProductList.filter(currentData => {
      return currentData.category === cateItem
    })
    setFilterItems(result)
    console.log(result)
  }

  /*
    function search
  */
  const [query, setQuery] = useState(null)
  // const [product, setProducts] = useState(ProductList)

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const handleSearch = () => {
    if (query) {
      const filteredProducts = ProductList.filter(product => {
        return product.itemName.toLowerCase().includes(query.toLowerCase())
      })
      setProductList(filteredProducts)
      console.log(filteredProducts)
    } else {
      setProductList(ProductList)
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
            <hr />
            <Button>All</Button>
            <Button as="button" onClick={() => filterResult('health care')}>
              Health Care
            </Button>
            <Button>Personal Care</Button>
            <Button>LifeStyle</Button>
            <Button>Herbal Food</Button>
          </>
        </LeftContainer>
        <RightContainer>
          <Link to="/addProduct">
            <ButtonAdd>Add Item</ButtonAdd>
          </Link>
          <GridContainer>
            <>
              {ProductList.map(pro => (
                <CardContainer>
                  <ButtonGroup>
                    <Image src={pro.image[1]} alt="Product_Image" />
                    <IconGroup>
                      <Link to={`/updateProduct/${pro._id}`}>
                        <ButtonIcon>
                          <FaRegEdit />
                        </ButtonIcon>
                      </Link>

                      <ButtonIcon
                        as="button"
                        onClick={() => {
                          deleteItem(pro._id)
                        }}
                      >
                        <FaTrashAlt />
                      </ButtonIcon>
                    </IconGroup>
                    <CardTitle>{pro.itemName}</CardTitle>
                  </ButtonGroup>
                  <CardTitle>{pro.description}</CardTitle>
                  <Shape>
                    <Price>LKR {pro.price}.00</Price>
                  </Shape>
                </CardContainer>
              ))}
            </>
          </GridContainer>
        </RightContainer>
      </VerticalContainer>
    </MainContainer>
  )
}

export default ProductsPage
