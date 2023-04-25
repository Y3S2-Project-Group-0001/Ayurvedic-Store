import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import RatingDisplay from '../ProductsPage_Customer/RatingDisplay'
import { Link } from 'react-router-dom'
import { Buffer } from 'buffers'

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

const Image = styled.img`
  padding-bottom: 10px;
  width: 240px;
`

const Title = styled.label`
  display: inline-block;
  text-align: center;
  padding: 15px;
  font-weight: 700;
`

const Price = styled.label`
  color: white;
`

const Shape = styled.div`
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
  background-color: ${props => (props.icon ? '#000000' : '#3d5631')};
  opacity: ${props => (props.icon ? '63%' : '100%')};
  padding: ${props => (props.icon ? '7px 15px ' : '10px 20px')};
  color: white;
  border: none;
  margin-top: ${props => (props.icon ? '0' : '20px')};
`

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  width: 150px;
  margin-bottom: 25px;
  position: absolute;
`

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: black;
  opacity: 63%;
  padding: 5px 20px;
  color: white;
  margin-top: 45px;
`
const ButtonGroup = styled.button`
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  padding-bottom: 10px;
`

function ProductCardSeller() {
  const [ProductList, setProductList] = useState([])

  //read stock --> productList
  const data = async () => {
    const response = await axios.post(
      'http://localhost:3004/api/item/getAllItems',
    )
    setProductList(response.data)
    console.log(data)
  }

  function refresh() {
    window.parent.location = window.parent.location.href
  }

  const deleteItem = id => {
    alert('The item will delete permermenantly')
    axios.post(`http://localhost:3004/api/item/deleteItem/${id}`)
    refresh()
  }

  useEffect(() => {
    data()
  }, [])

  return (
    <>
      {ProductList.map(pro => (
        <Container>
          <ButtonGroup>
            <Image src="images/products/product.png" alt="Product_Image" />
          </ButtonGroup>

          <IconGroup>
            <Link to={`/updateProduct/${pro._id}`}>
              <Button>
                <FaRegEdit />
              </Button>
            </Link>

            <Button
              as="button"
              onClick={() => {
                deleteItem(pro._id)
              }}
            >
              <FaTrashAlt />
            </Button>
          </IconGroup>
          <Title>{pro.itemName}</Title>

          <Title>{pro.description}</Title>
          <RatingDisplay parameter={pro.rating} />
          <Shape>
            <Price>LKR {pro.price}.00</Price>
          </Shape>
        </Container>
      ))}
    </>
  )
}

export default ProductCardSeller
