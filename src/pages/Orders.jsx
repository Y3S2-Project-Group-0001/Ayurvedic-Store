import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AyruvedicButton from '../common/AyruvedicButton'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { orderActions } from '../Store/order-slice'

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

const DeclineButton = styled(StyledAyruvedicButton)`
  background-color: rgba(61, 86, 49, 1);
`

const BoldText = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
`
const StatusButtonList = styled.div`
  display: flex;
  flex-direction: row;
`

const StatusButton = styled.div`
  ${props => (props.active ? 'background-color: #0007;' : '')}
  border: 1px solid #0007;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 0px 10px;
`

function Orders() {
  const [orderList, setOrderList] = useState([])
  const [filterdOrderList, setFilterdOrderList] = useState([])
  const [isOrdersLoading, setIsOrdersLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [status, setStatus] = React.useState('all')

  function handleChange(value) {
    setStatus(value)
  }

  useEffect(() => {
    if (status === 'all') {
      setFilterdOrderList(orderList)
    } else {
      const newOrderList = orderList.filter(order => order.status === status)
      setFilterdOrderList(newOrderList)
    }
  }, [orderList, status])

  // get order history from backend
  useEffect(() => {
    // fetch order history
    fetchOrders()
  }, [])

  function fetchOrders() {
    setIsOrdersLoading(true)
    fetch('http://localhost:8000/order/api/getAdminOrders', {
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
      .finally(() => setIsOrdersLoading(false))
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
        fetchOrders()
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
        fetchOrders()
      }
    })
  }

  function handleViewOrder(order) {
    // Use the navigate function to navigate to the ViewOrderCustomer component
    dispatch(orderActions.replaceSelectedOrder({ order: order }))
    navigate('/admin/dashBoard/viewOrder')
  }

  return (
    <OuterContainer>
      <Container>
        <Title>Orders</Title>
      </Container>
      <StatusButtonList>
        <StatusButton
          active={status === 'pending'}
          onClick={() => handleChange('pending')}
        >
          Pending
        </StatusButton>
        <StatusButton
          active={status === 'approved'}
          onClick={() => handleChange('approved')}
        >
          Approved
        </StatusButton>
        <StatusButton
          active={status === 'declined'}
          onClick={() => handleChange('declined')}
        >
          Declined
        </StatusButton>
        <StatusButton
          active={status === 'all'}
          onClick={() => handleChange('all')}
        >
          All
        </StatusButton>
      </StatusButtonList>

      <OrderListContainer>
        {filterdOrderList.map(order => (
          <OrderContainer key={order._id}>
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
                {order.status === 'pending' && (
                  <>
                    <StyledAyruvedicButton
                      onClick={() => onApproveClick(order._id)}
                    >
                      Accept Order
                    </StyledAyruvedicButton>
                    <DeclineButton onClick={() => onDeclineClick(order._id)}>
                      Decline
                    </DeclineButton>
                  </>
                )}
              </OrderButtons>
            </OrderButtonsContainer>
          </OrderContainer>
        ))}
      </OrderListContainer>
    </OuterContainer>
  )
}

export default Orders
