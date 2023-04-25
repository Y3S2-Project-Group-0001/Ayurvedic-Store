// import React from 'react'
// import styled from 'styled-components'
// import { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import useDebounce from '../hooks/debounce'
// import { cartActions } from '../Store/cart-slice'

// const MainContainer = styled.div`
//   position: fixed;
//   top: 0%;
//   width: 100%;
//   z-index: 100;
// `

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 90%;
//   margin: 0 auto;
//   padding: 1rem 0;
// `

// const Nav = styled.div`
//   span {
//     margin-left: 2rem;
//     a {
//       color: ${props => props.color};
//       transition: 0.5s;
//       text-decoration: none;
//       font-weight: 400;
//       font-family: 'Quicksand';
//     }
//   }
// `
// const Logo = styled.div`
//   font-weight: 400;
//   font-family: 'Quicksand';
//   font-size: 30px;
// `

// const Login = styled.div`
//   align-items: center;
//   display: flex;
//   div {
//     margin-left: 1rem;
//     a {
//       color: ${props => props.color};
//       transition: 0.5s;
//       text-decoration: none;
//       font-weight: 400;
//       font-family: 'Quicksand';
//     }
//   }
// `

// const OuterContainer = styled.div`
//   background-color: ${props => props.background};
//   color: ${props => props.color};
//   transition: 0.5s;
// `

// const ButtonDash = styled.div`
//   margin-right: 45px;
//   font-size: 15px;
//   font-weight: 400;
//   font-family: 'Quicksand';
//   border-color: white;
//   border-style: solid;
//   padding: 10px;
//   padding-left: 20px;
//   padding-right: 20px;
// `

// export default function Header(props) {
//   const [textColor, setTextColor] = useState('white')
//   const [bgColor, setBgColor] = useState('rgba(61, 86, 49, 1)')
//   const [login, setLogin] = useState('notLogged')
//   const [scrolled, setScrolled] = useState(true)
//   const cart = useSelector(state => state.cart)
//   const dispatch = useDispatch()
//   let debouncedValue = useDebounce(cart, 1000)

//   const changeBackground = () => {
//     if (window.scrollY > 100) {
//       setScrolled(false)
//     } else {
//       setScrolled(true)
//     }
//   }

//   window.addEventListener('scroll', changeBackground)

//   useEffect(() => {
//     if (props.type === 'home' && scrolled) {
//       setTextColor('black')
//       setBgColor('rgba(0, 0, 0, 0)')
//     } else {
//       setTextColor('white')
//       setBgColor('#3d5631ec')
//     }
//   }, [props, scrolled])

//   // get cart by customer id from backend and set to redux state
//   useEffect(() => {
//     fetch('http://localhost:3000/order/api/getCustomerCart', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ customerId: 12 }),
//     })
//       .then(res => res.json())
//       .then(data => {
//         dispatch(cartActions.replaceCart(data[0]))
//         console.log(data)
//       })
//   }, [dispatch])

//   return (
//     <>
//       <MainContainer>
//         <link
//           href="https://fonts.googleapis.com/css?family=Quicksand"
//           rel="stylesheet"
//         ></link>

//         <OuterContainer color={textColor} background={bgColor}>
//           <Container>
//             <Logo>CEYLONHERB</Logo>

//             <Nav color={textColor}>
//               <span>
//                 {' '}
//                 <a href="/">Home</a>{' '}
//               </span>
//               <span>
//                 {' '}
//                 <a href="#">Categories</a>{' '}
//               </span>
//               <span>
//                 {' '}
//                 <a href="/rating">Reviews</a>{' '}
//               </span>
//               <span>
//                 {' '}
//                 <a href="#">More</a>{' '}
//               </span>
//             </Nav>

//             <Login color={textColor}>
//               <ButtonDash>Seller Dash</ButtonDash>

//               {login == 'Logged' ? (
//                 <div>
//                   <a href="#">Logout </a>
//                 </div>
//               ) : (
//                 <div>
//                   <a href="http://localhost:3000/login">Login</a>
//                   <span> | </span>
//                   <a href="http://localhost:3000/register">Signup</a>
//                 </div>
//               )}
//             </Login>
//           </Container>
//         </OuterContainer>
//       </MainContainer>
//     </>
//   )
// }

import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

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
    a {
      color: ${props => props.color};
      transition: 0.5s;
      text-decoration: none;
      font-weight: 400;
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
`

export default function Header(props) {
  const [textColor, setTextColor] = useState('white')
  const [bgColor, setBgColor] = useState('rgba(61, 86, 49, 1)')
  const [login, setLogin] = useState('notLogged')
  const [scrolled, setScrolled] = useState(true)

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
                <a href="/">Home</a>{' '}
              </span>
              <span>
                {' '}
                <a href="#">Categories</a>{' '}
              </span>
              <span>
                {' '}
                <a href="/rating">Reviews</a>{' '}
              </span>
              <span>
                {' '}
                <a href="#">More</a>{' '}
              </span>
            </Nav>

            <Login color={textColor}>
              <ButtonDash>Seller Dash</ButtonDash>

              {login == 'Logged' ? (
                <div>
                  <a href="#">Logout </a>
                </div>
              ) : (
                <div>
                  <a href="http://localhost:3000/login">Login</a>
                  <span> | </span>
                  <a href="http://localhost:3000/register">Signup</a>
                </div>
              )}
            </Login>
          </Container>
        </OuterContainer>
      </MainContainer>
    </>
  )
}
