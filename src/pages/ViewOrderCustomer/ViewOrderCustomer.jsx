import React from 'react'
import styled from 'styled-components'
import Products from './Products'
import { useSelector } from 'react-redux'

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
  padding: 1rem;
  margin-left: 20px;
  margin-top: 40px;
  border-bottom: 3px solid #0007;
`

const OrderSummaryRecord = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 20px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
`
const OrderSummaryRecordTitle = styled.span`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`

function ViewOrderCustomer() {
  const order = useSelector(state => state.order).selectedOrder
  return (
    <OuterContainer>
      <Container>
        <Title>Order Summary</Title>
        <OrderSummary>
          <OrderSummaryRecord>
            <OrderSummaryRecordTitle>Order Id: </OrderSummaryRecordTitle>
            <span>{` ${order.subTotal + order._id}`}</span>
          </OrderSummaryRecord>
          <OrderSummaryRecord>
            <OrderSummaryRecordTitle>Subtotal: </OrderSummaryRecordTitle>
            <span>{` ${order.subTotal}`}</span>
          </OrderSummaryRecord>
          <OrderSummaryRecord>
            <OrderSummaryRecordTitle>Shipping cost: </OrderSummaryRecordTitle>
            <span> {` ${order.shippingCost}`}</span>
          </OrderSummaryRecord>
          <OrderSummaryRecord>
            <OrderSummaryRecordTitle>Total: </OrderSummaryRecordTitle>
            <span>{` ${order.subTotal + order.shippingCost}`}</span>
          </OrderSummaryRecord>
          <OrderSummaryRecord>
            <OrderSummaryRecordTitle>Order date: </OrderSummaryRecordTitle>
            <span>{` ${order.orderDate.slice(0, 10)}`}</span>
          </OrderSummaryRecord>
        </OrderSummary>
        <ProductListAndOrderSummary>
          <ProductList>
            {order.products.map(product => (
              <Products product={product} />
            ))}
          </ProductList>
        </ProductListAndOrderSummary>
      </Container>
    </OuterContainer>
  )
}

export default ViewOrderCustomer
