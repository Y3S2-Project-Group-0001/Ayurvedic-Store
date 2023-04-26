import React, { useEffect } from 'react'
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
  const [product, setProduct] = React.useState({ ...productOuter })
  const [isLoading, setIsLoading] = React.useState(true)
  const _id = productOuter.productId

  useEffect(() => {
    // fetch product by id
    setIsLoading(true)
    fetch(`http://localhost:8000/item/api/item/getOneItem/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data)
        setProduct({ ...productOuter, ...data })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [_id])

  // TODO: add prodct fetch function and only get product id and quantity from props

  function addProductHandler() {
    dispatch(
      cartActions.addItem({
        id: product?._id,
        price: product?.price,
      }),
    )
  }

  function removeProductHandler() {
    dispatch(
      cartActions.removeItem({ id: product?._id, price: product?.price }),
    )
  }

  return (
    <ProductContainer key={product?._id}>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <ImageWithDetailsContainer>
            <StyledImage src={product?.image[1]} alt={product?.itemName} />
            <ProductNameQuantityContainer>
              <StyledProductTitle>{product?.itemName}</StyledProductTitle>
              <Description>{product?.description}</Description>
              <QuantityContainer>
                <QuentityHandler>
                  <AiOutlinePlus onClick={() => addProductHandler()} />
                  <QuantitySpan>{productOuter?.quantity}</QuantitySpan>
                  <AiOutlineMinus onClick={() => removeProductHandler()} />
                </QuentityHandler>
              </QuantityContainer>
            </ProductNameQuantityContainer>
          </ImageWithDetailsContainer>
          <p>Rs.{product?.price}</p>
        </>
      )}
    </ProductContainer>
  )
}

export default Products
