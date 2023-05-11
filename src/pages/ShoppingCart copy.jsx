import React from 'react'
import styled from 'styled-components'
import AyruvedicButton from '../common/AyruvedicButton'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 90%;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  color: #333;
  margin: 20px 40px;
`

const ProductListAndOrderSummary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`

const ProductList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 800px;
`

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 3px solid #0007;
  border-radius: 10px;
  padding: 1rem;
  margin-left: 20px;
  margin-top: 40px;
  height: 400px;
`

const OrderSummaryRecord = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
`

const StyledAyruvedicButton = styled(AyruvedicButton)`
  margin-top: 90px;
  width: 90%;
  align-self: center;
  padding: 15px;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 700;
`

const productList = [
  {
    id: 1,
    name: 'Herbal Oil 100ml Add a longer title ',
    description:
      'Herbal Oil 100ml Add a longer title somt more descriptions and more',
    img: 'https://picsum.photos/300/300',
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Herbal Oil 100ml Add a longer title',
    description:
      'Herbal Oil 100ml Add a longer title somt more descriptions and more',
    img: 'https://picsum.photos/300/300',
    price: 200,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Herbal Oil 100ml Add a longer title ',
    description:
      'Herbal Oil 100ml Add a longer title somt more descriptions and more',
    img: 'https://picsum.photos/300/300',
    price: 300,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Herbal Oil 100ml Add a longer title ',
    description:
      'Herbal Oil 100ml Add a longer title somt more descriptions and more',
    img: 'https://picsum.photos/300/300',
    price: 400,
    quantity: 1,
  },
]

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
`

const ImageWithDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
`

const ProductNameQuantityContainer = styled.div`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 20px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  margin-left: 50px;
`

const StyledImage = styled.img``

const StyledProductTitle = styled.span``

const QuantityContainer = styled.span`
  border: 1px solid black;
`

function NavToDelivery() {
  console.log('Nav works ')
}

function ShoppingCart() {
  return (
    <OuterContainer>
      <Container>
        <Title>Shopping Cart</Title>
        <ProductListAndOrderSummary>
          <ProductList>
            {productList.map(product => (
              <ProductContainer key={product.id}>
                <ImageWithDetailsContainer>
                  <StyledImage src={product.img} alt={product.name} />
                  <ProductNameQuantityContainer>
                    <StyledProductTitle>{product.name}</StyledProductTitle>
                    <span>{product.description}</span>
                    <QuantityContainer>
                      <AiOutlinePlus />
                      {product.quantity}
                      <AiOutlineMinus />
                    </QuantityContainer>
                  </ProductNameQuantityContainer>
                </ImageWithDetailsContainer>
                <p>Rs.{product.price}</p>
              </ProductContainer>
            ))}
          </ProductList>
          <OrderSummary>
            <h1>Order Summary</h1>
            <OrderSummaryRecord>
              <span>Subtotal</span>
              <span>1000</span>
            </OrderSummaryRecord>
            <OrderSummaryRecord>
              <span>Shipping</span>
              <span>290</span>
            </OrderSummaryRecord>
            <OrderSummaryRecord>
              <span>Total</span>
              <span>Rs.1290</span>
            </OrderSummaryRecord>
            <StyledAyruvedicButton onClick={() => NavToDelivery()}>
              <span>Proceed to Checkout</span>
            </StyledAyruvedicButton>
          </OrderSummary>
        </ProductListAndOrderSummary>
      </Container>
    </OuterContainer>
  )
}

export default ShoppingCart
