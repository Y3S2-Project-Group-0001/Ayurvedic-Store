import React from 'react'
import styled from 'styled-components'
import AyruvedicButton from '../common/AyruvedicButton'

function OrderHistory() {
  const OrderList = [
    {
      id: 1,
      date: '2022-01-04',
      status: 'Delivered',
      total: 100,
    },
    {
      id: 2,
      date: '2022-01-04',
      status: 'Delivered',
      total: 100,
    },
    {
      id: 3,
      date: '2022-01-04',
      status: 'Delivered',
      total: 100,
    },
    {
      id: 4,
      date: '2022-01-04',
      status: 'Delivered',
      total: 100,
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

  return (
    <OuterContainer>
      <Container>
        <Title>Order History</Title>
      </Container>
      <OrderListContainer>
        {OrderList.map(order => (
          <OrderContainer>
            <OrderDetailsContainer>
              <OrderDetailContainer>
                <BoldText>Order ID: </BoldText>
                <span> {order.id}</span>
              </OrderDetailContainer>
              <OrderDetailContainer>
                <BoldText>Order Date: </BoldText>
                <span> {order.date}</span>
              </OrderDetailContainer>
              <OrderDetailContainer>
                <BoldText>Order Status: </BoldText>
                <span> {order.status}</span>
              </OrderDetailContainer>
            </OrderDetailsContainer>
            <OrderButtonsContainer>
              <OrderDetailContainer>
                <BoldText>Order Total: </BoldText> <span>{order.total}</span>
              </OrderDetailContainer>
              <OrderButtons>
                <StyledAyruvedicButton>View Order</StyledAyruvedicButton>
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
