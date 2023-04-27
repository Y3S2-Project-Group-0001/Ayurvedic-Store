import React from 'react'
import styled from 'styled-components'
import AyruvedicButton from '../../common/AyruvedicButton'
import { useSelector } from 'react-redux'
import Products from './Products'
import { useNavigate } from 'react-router-dom'

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

function ShoppingCart() {
  const navigate = useNavigate()

  function NavToDelivery() {
    navigate('/delivery')
    console.log('Navigating to delivery selector...')
  }

  const cartDetails = useSelector(state => state.cart)
  console.log(cartDetails)
  return (
    <OuterContainer>
      <Container>
        <Title>Shopping Cart</Title>
        <ProductListAndOrderSummary>
          <ProductList>
            {cartDetails.items.map(product => (
              <Products key={product.productId} product={product} />
            ))}
          </ProductList>
          <OrderSummary>
            <h1>Order Summary</h1>
            <OrderSummaryRecord>
              <span>Subtotal</span>
              <span>Rs.{cartDetails.subTotal}</span>
            </OrderSummaryRecord>
            <OrderSummaryRecord>
              <span>Shipping</span>
              <span>Rs.{cartDetails.shippingCost}</span>
            </OrderSummaryRecord>
            <OrderSummaryRecord>
              <span>Total</span>
              <span>Rs.{cartDetails.shippingCost + cartDetails.subTotal}</span>
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
