import React from 'react'
import styled from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../Store/cart-slice'

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

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
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

const StyledProductTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Description = styled.div`
  white-space: nowrap;
  width: 400px;
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

function Products({ product: productOuter }) {
  const dispatch = useDispatch()

  // TODO: add prodct fetch function and only get product id and quantity from props
  const product = {
    ...{
      name: 'Herbal Oil 100ml Add a longer title ',
      description: 'Herbal Oil 100ml Add a longer title somt more descriptions',
      img: 'https://picsum.photos/300/300',
      price: 100,
      quantity: 1,
    },
    ...productOuter,
  }

  function addProductHandler() {
    dispatch(
      cartActions.addItem({
        id: product.productId,
        price: product.price,
      }),
    )
  }

  function removeProductHandler() {
    dispatch(
      cartActions.removeItem({ id: product.productId, price: product.price }),
    )
  }

  return (
    <ProductContainer key={product.id}>
      <ImageWithDetailsContainer>
        <StyledImage src={product.img} alt={product.name} />
        <ProductNameQuantityContainer>
          <StyledProductTitle>{product.name}</StyledProductTitle>
          <Description>{product.description}</Description>
          <QuantityContainer>
            <QuentityHandler>
              <AiOutlinePlus onClick={() => addProductHandler()} />
              <QuantitySpan>{product.quantity}</QuantitySpan>
              <AiOutlineMinus onClick={() => removeProductHandler()} />
            </QuentityHandler>
          </QuantityContainer>
        </ProductNameQuantityContainer>
      </ImageWithDetailsContainer>
      <p>Rs.{product.price}</p>
    </ProductContainer>
  )
}

export default Products
