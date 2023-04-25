import React from 'react'
import styled from 'styled-components'
import AyruvedicButton from '../common/AyruvedicButton'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

const OuterContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`

const Title = styled.span`
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
  min-height: 800px;
  shrink: 1;
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
    description: 'Herbal Oil 100ml Add a longer title somt more descriptions',
    img: 'https://picsum.photos/300/300',
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Herbal Oil 100ml Add a longer title',
    description: 'Herbal Oil 100ml Add a longer title somt more descriptions',
    img: 'https://picsum.photos/300/300',
    price: 200,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Herbal Oil 100ml Add a longer title ',
    description: 'Herbal Oil 100ml Add a longer title somt more descriptions',
    img: 'https://picsum.photos/300/300',
    price: 300,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Herbal Oil 100ml Add a longer title ',
    description: 'Herbal Oil 100ml Add a longer title somt more descriptions',
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
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 20px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  margin-left: 50px;
`

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`

const StyledProductTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
`

const QuantityContainer = styled.div`
  display: flex;
`
const QuentityHandler = styled.span`
  border: 2px solid #a2a3b1;
  font-size: 15px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  *:last-child,
  *:first-child {
    cursor: pointer;
  }
`

const QuantitySpan = styled.span`
  width: 100px;
  margin: 0px 20px;
`

const Description = styled.div`
  white-space: nowrap;
  width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
`

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
                    <Description>{product.description}</Description>
                    <QuantityContainer>
                      <QuentityHandler>
                        <AiOutlinePlus />
                        <QuantitySpan>{product.quantity}</QuantitySpan>
                        <AiOutlineMinus />
                      </QuentityHandler>
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
            <StyledAyruvedicButton>
              <span>Proceed to Checkout</span>
            </StyledAyruvedicButton>
          </OrderSummary>
        </ProductListAndOrderSummary>
      </Container>
    </OuterContainer>
  )
}

export default ShoppingCart
