import React from 'react'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'

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
  padding-bottom: 0px;
`

const Image = styled.div`
  padding-bottom: 10px;
`

const Title = styled.label`
  display: flex;
  padding: 0px;
  justify-content: center;
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
`

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 150px;
  margin-bottom: 5px;
`

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
`

function ProductCard() {
  return (
    <Container>
      <ButtonGroup>
        <Image>
          <img src="images/products/product.png" alt="Product_Image" />
        </Image>
        <Title>Amila Zindagi Juice for hair Growth and stress reliever</Title>
      </ButtonGroup>
      <IconGroup>
        <Button>
          <Shape icon>
            <FaRegEdit />
          </Shape>
        </Button>
        <Button>
          <Shape icon>
            <FaTrashAlt />
          </Shape>
        </Button>
      </IconGroup>

      <Shape>
        <Price>$28.88</Price>
      </Shape>
    </Container>
  )
}

export default ProductCard
