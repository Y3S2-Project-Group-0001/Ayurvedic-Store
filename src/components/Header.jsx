import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useDebounce from '../hooks/debounce'
import { cartActions } from '../Store/cart-slice'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import GetCurrentUser from '../hooks/getCurrentUser'

const ShoppingCartContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 20px;
  margin-left: 20px;
  &:hover {
    opacity: 0.9;
  }
`

const ShoppingCartCount = styled.span`
  cursor: pointer;
  position: absolute;
  top: -10px;
  right: -20px;
  background-color: #333;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ShoppingCartIcon = styled(FaShoppingCart)`
  cursor: pointer;
  width: 20px;
  height: 20px;
`

const MainContainer = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
  z-index: 100;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
`

const Nav = styled.div`
  span {
    margin-left: 2rem;
    span {
      color: ${props => props.color};
      transition: 0.5s;
      cursor: pointer;
      font-family: 'Quicksand';
    }
  }
`
const Logo = styled.div`
  font-weight: 400;
  font-family: 'Quicksand';
  font-size: 30px;
`

const Login = styled.div`
  align-items: center;
  display: flex;
  div {
    margin-left: 1rem;
    a {
      color: ${props => props.color};
      transition: 0.5s;
      text-decoration: none;
      font-weight: 400;
      font-family: 'Quicksand';
    }
  }
`

const OuterContainer = styled.div`
  background-color: ${props => props.background};
  color: ${props => props.color};
  transition: 0.5s;
`

const ButtonDash = styled.div`
  margin-right: 45px;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Quicksand';
  border-color: white;
  border-style: solid;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`

let isInitial = true
export default function Header(props) {
  const [textColor, setTextColor] = useState('white')
  const [bgColor, setBgColor] = useState('rgba(61, 86, 49, 1)')
  const [login, setLogin] = useState('notLogged')
  const [scrolled, setScrolled] = useState(true)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const debouncedValue = useDebounce(cart, 1000)
  const user = GetCurrentUser()
  console.log('current user', user)

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setScrolled(false)
    } else {
      setScrolled(true)
    }
  }

  window.addEventListener('scroll', changeBackground)

  useEffect(() => {
    if (props.type === 'home' && scrolled) {
      setTextColor('black')
      setBgColor('rgba(0, 0, 0, 0)')
    } else {
      setTextColor('white')
      setBgColor('#3d5631ec')
    }
  }, [props, scrolled])

  // get cart by customer id from backend and set to redux state
  useEffect(() => {
    fetch('http://localhost:8000/order/api/getCustomerCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ customerId: user?._id.toString() || '' }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(cartActions.replaceCart(data[0]))
        console.log(data)
      })
  }, [dispatch, user])

  useEffect(() => {
    console.log(debouncedValue)
    if (isInitial || !debouncedValue.changed) {
      isInitial = false
      return
    }
    console.log('in', debouncedValue)
    fetch('http://localhost:8000/order/api/updateCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartId: debouncedValue.cartId,
        products: debouncedValue.items,
        subTotal: debouncedValue.subTotal,
        shippingCost: debouncedValue.shippingCost,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }, [
    dispatch,
    debouncedValue,
    debouncedValue.items,
    debouncedValue.subTotal,
    debouncedValue.shippingCost,
  ])

  function navigateToCart() {
    navigate('/customer/shoppingCart')
  }

  function navigateToHome() {
    navigate('/')
  }

  function navigateToCategory() {
    navigate('/customer/allProductsCustomer')
  }

  function navigateToUserDashboard() {
    navigate('/customer/dashBoard/orderHistory')
  }

  function navigateToSellerDashboard() {
    navigate('/customer/shoppingCart')
  }

  function navigateToAdminDashboard() {
    navigate('/admin/dashBoard/orders')
  }

  function navigateToLogin() {
    navigate('/login')
  }

  function navigateToRegister() {
    navigate('/register')
  }

  return (
    <>
      <MainContainer>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand"
          rel="stylesheet"
        ></link>

        <OuterContainer color={textColor} background={bgColor}>
          <Container>
            <Logo>CEYLONHERB</Logo>

            <Nav color={textColor}>
              <span>
                {' '}
                <span onClick={() => navigateToHome()}>Home</span>{' '}
              </span>
              <span>
                {' '}
                <span onClick={() => navigateToCategory()}>
                  Categories
                </span>{' '}
              </span>
              <span>
                {' '}
                <span href="#">About us</span>{' '}
              </span>
              <span>
                {' '}
                <span href="#">More</span>{' '}
              </span>
            </Nav>

            {user?.type === 'user' && (
              <ShoppingCartContainer onClick={() => navigateToCart()}>
                <ShoppingCartIcon />
                <ShoppingCartCount>{cart.totalQuantitiy}</ShoppingCartCount>
              </ShoppingCartContainer>
            )}

            <Login color={textColor}>
              {user?.type === 'seller' && (
                <ButtonDash onClick={() => navigateToSellerDashboard()}>
                  Seller Dashboard
                </ButtonDash>
              )}
              {user?.type === 'admin' && (
                <ButtonDash onClick={() => navigateToAdminDashboard()}>
                  Admin Dashboard
                </ButtonDash>
              )}
              {user?.type === 'user' && (
                <ButtonDash onClick={() => navigateToUserDashboard()}>
                  User Dashboard
                </ButtonDash>
              )}

              {user ? (
                <div>
                  <span onClick={() => navigateToLogin()}>Logout </span>
                </div>
              ) : (
                <div>
                  <span onClick={() => navigateToLogin()}>Login</span>
                  <span> | </span>
                  <span onClick={() => navigateToRegister()}>Signup</span>
                </div>
              )}
            </Login>
          </Container>
        </OuterContainer>
      </MainContainer>
    </>
  )
}
