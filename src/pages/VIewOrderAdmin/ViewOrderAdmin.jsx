import React from 'react'
import styled from 'styled-components'
import Products from './Products'
import { useDispatch, useSelector } from 'react-redux'
import AyruvedicButton from '../../common/AyruvedicButton'
import { orderActions } from '../../Store/order-slice'

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

const StyledAyruvedicButton = styled(AyruvedicButton)`
  width: 150px;
  height: 40px;
  font-size: 15px;
  margin: 0px 20px;
`
const DeclineButton = styled(StyledAyruvedicButton)`
  background-color: rgba(61, 86, 49, 1);
`

function ViewOrderAdmin() {
  const order = useSelector(state => state.order).selectedOrder
  const dispatch = useDispatch()

  function fetchOrder() {
    fetch('http://localhost:8000/order/api/getOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId: order._id }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        dispatch(orderActions.replaceSelectedOrder({ order: res }))
      })
  }

  function onApproveClick(orderID) {
    // send request to backend to approve order
    fetch('http://localhost:8000/order/api/approveOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId: orderID }),
    }).then(res => {
      if (res.ok) {
        // fetch order history
        fetchOrder()
      }
    })
  }

  function onDeclineClick(orderID) {
    // send request to backend to approve order
    fetch('http://localhost:8000/order/api/declineOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId: orderID }),
    }).then(res => {
      if (res.ok) {
        // fetch order history
        fetchOrder()
      }
    })
  }
  return (
    <OuterContainer>
      <Container>
        <Title>Order Summary</Title>

        {order.status === 'pending' && (
          <>
            <StyledAyruvedicButton onClick={() => onApproveClick(order._id)}>
              Accept Order
            </StyledAyruvedicButton>
            <DeclineButton onClick={() => onDeclineClick(order._id)}>
              Decline
            </DeclineButton>
          </>
        )}

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
          <OrderSummaryRecord>
            <OrderSummaryRecordTitle>Order status: </OrderSummaryRecordTitle>
            <span>{` ${order.status}`}</span>
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

export default ViewOrderAdmin
