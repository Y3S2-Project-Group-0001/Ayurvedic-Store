import React from 'react'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import RatingDisplay from '../ProductsPage_Customer/RatingDisplay'

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

const Image = styled.div`
  padding-bottom: 0px;
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

function ProductCard() {
  return (
    <Container>
      <Image>
        <img src="images/products/product.png" alt="Product_Image" />
      </Image>
      <IconGroup>
        <Button>
          <FaRegEdit />
        </Button>
        <Button>
          <FaTrashAlt />
        </Button>
      </IconGroup>
      <Title>Amila Zindagi Juice for hair Growth and stress reliever</Title>

      <RatingDisplay />

      <Shape>
        <Price>$28.88</Price>
      </Shape>
    </Container>
  )
}

export default ProductCard
