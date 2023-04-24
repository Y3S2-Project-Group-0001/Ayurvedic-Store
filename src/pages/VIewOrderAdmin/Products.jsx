import React from 'react'
import styled from 'styled-components'

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

const QuantitySpan = styled.span`
  width: 100px;
  margin: 0px 20px;
`

function Products({ product: productOuter }) {
  // TODO: add prodct fetch function and only get product id and quantity from props
  const product = {
    ...{
      id: 1,
      name: 'Herbal Oil 100ml Add a longer title ',
      description: 'Herbal Oil 100ml Add a longer title somt more descriptions',
      img: 'https://picsum.photos/300/300',
      price: 100,
      quantity: 1,
    },
    ...productOuter,
  }
  return (
    <ProductContainer key={product.id}>
      <ImageWithDetailsContainer>
        <StyledImage src={product.img} alt={product.name} />
        <ProductNameQuantityContainer>
          <StyledProductTitle>{product.name}</StyledProductTitle>
          <Description>{product.description}</Description>
          <QuantitySpan>{product.quantity}</QuantitySpan>
        </ProductNameQuantityContainer>
      </ImageWithDetailsContainer>
      <p>Rs.{product.price}</p>
    </ProductContainer>
  )
}

export default Products
