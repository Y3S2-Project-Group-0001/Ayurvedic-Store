import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import styled from 'styled-components'

const Description = styled.div`
  padding-top: 35px;
  font-size: 18px;
`

const Image = styled.img`
  padding-bottom: 10px;
  width: 240px;
`

const Title = styled.label`
  padding: 0px;
  font-weight: 700;
  font-size: 23px;
`

const Price = styled.label`
  font-weight: 700;
  font-size: 20px;
  color: black;
`

const PriceDiv = styled.div`
  margin-top: 50px;
`

const LeftContainer = styled.div`
  margin: 20px 20px 20px 40px;
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
  margin-top: 40px;
`
const VerticalContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
  height: 600px;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align: center;
  margin: 40px 100px;
  padding: 15px 15px 0 15px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  border-radius: 10px;
`

const Button = styled.button`
  background-color: ${props => (props.cart ? '#D0D400' : '#729B0E')};
  color: black;
  padding: 11px;
  margin-top: 20px;
  border: none;
  border-radius: 2.5px;
  cursor: pointer;
  font-weight: 200;
  font-size: 15px;
  width: 100px;
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin-top: 10px;
  margin bottom: 20px;
`

function SingleProduct() {
  const [ProductList, setProductList] = useState([])

  const { _id } = useParams()

  const data = async () => {
    const response = await axios.post(
      `http://localhost:8000/api/item/getOneItem/${_id}`,
    )
    setProductList([response.data])
    console.log([response.data])
  }

  useEffect(() => {
    data()
  }, [])

  return (
    <>
      {ProductList.map(pro => (
        <MainContainer>
          <VerticalContainer>
            <LeftContainer>
              <Image src={pro.image[1]} alt="Product_Image" />
            </LeftContainer>
            <RightContainer>
              <Title>{pro.itemName}</Title>
              <br />
              <PriceDiv>
                <Price>LKR {pro.price}.00</Price>
              </PriceDiv>

              <ButtonGroup>
                <Button cart>Add to cart</Button>
                <Button buy>Buy Now</Button>
              </ButtonGroup>

              <Description>{pro.description}</Description>
            </RightContainer>
          </VerticalContainer>
        </MainContainer>
      ))}
    </>
  )
}

export default SingleProduct
