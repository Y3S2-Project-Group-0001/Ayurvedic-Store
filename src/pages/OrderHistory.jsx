import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AyruvedicButton from '../common/AyruvedicButton'
import { useNavigate } from 'react-router-dom'
import { orderActions } from '../Store/order-slice'
import { useDispatch } from 'react-redux'

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

const OrderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`

const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 0.22);
  margin: 10px 0px;
`

const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  justify-content: space-around;
  flex-grow: 1;
`

const OrderButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px 20px;
`
const OrderButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const OrderDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 20px;
  font-size: 20px;
`

const StyledAyruvedicButton = styled(AyruvedicButton)`
  width: 150px;
  height: 40px;
  font-size: 15px;
  margin: 0px 20px;
`

const BoldText = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
`

function OrderHistory() {
  const [orderList, setOrderList] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // get order history from backend
  useEffect(() => {
    // fetch order history
    fetch('http://localhost:8000/order/api/getCustomerOrders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ customerId: 12 }),
    })
      .then(res => res.json())
      .then(data => {
        setOrderList(data)
        console.log(data)
      })
  }, [])

  function handleViewOrder(order) {
    // Use the navigate function to navigate to the ViewOrderCustomer component
    dispatch(orderActions.replaceSelectedOrder({ order: order }))
    navigate('/customer/dashBoard/viewOrder')
  }

  return (
    <OuterContainer>
      <Container>
        <Title>Order History</Title>
      </Container>
      <OrderListContainer>
        {orderList.map(order => (
          <OrderContainer>
            <OrderDetailsContainer>
              <OrderDetailContainer>
                <BoldText>Order ID: </BoldText>
                <span> {order._id}</span>
              </OrderDetailContainer>
              <OrderDetailContainer>
                <BoldText>Order Date: </BoldText>
                <span> {order.orderDate.slice(0, 10)}</span>
              </OrderDetailContainer>
              <OrderDetailContainer>
                <BoldText>Order Status: </BoldText>
                <span> {order.status}</span>
              </OrderDetailContainer>
            </OrderDetailsContainer>
            <OrderButtonsContainer>
              <OrderDetailContainer>
                <BoldText>Order Total: </BoldText>{' '}
                <span>{order.subTotal + order.shippingCost}</span>
              </OrderDetailContainer>
              <OrderButtons>
                <StyledAyruvedicButton onClick={() => handleViewOrder(order)}>
                  View Order
                </StyledAyruvedicButton>
                <StyledAyruvedicButton>Inquiry</StyledAyruvedicButton>
                <StyledAyruvedicButton>Add Review</StyledAyruvedicButton>
              </OrderButtons>
            </OrderButtonsContainer>
          </OrderContainer>
        ))}
      </OrderListContainer>
    </OuterContainer>
  )
}

export default OrderHistory
