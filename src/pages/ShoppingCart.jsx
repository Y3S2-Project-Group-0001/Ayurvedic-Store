import React from 'react'
import styled from 'styled-components'
import AyruvedicButton from '../common/AyruvedicButton'

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  color: #333;
  margin: 1rem 2rem;
`

const ProductListAndOrderSummary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const ProductList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  border: 3px solid #0007;
  flex-grow: 1;
  min-height: 800px;
`

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 3px solid #0007;
  border-radius: 15px;
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

// const productList = [
//   {
//     id: 1,
//     name: 'Product 1',
//     price: 100,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     price: 200,
//     quantity: 1,
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     price: 300,
//     quantity: 1,
//   },
//   {
//     id: 4,
//     name: 'Product 4',
//     price: 400,
//     quantity: 1,
//   },
// ]

function ShoppingCart() {
  return (
    <OuterContainer>
      <Container>
        <Title>Shopping Cart</Title>
        <ProductListAndOrderSummary>
          <ProductList></ProductList>
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
