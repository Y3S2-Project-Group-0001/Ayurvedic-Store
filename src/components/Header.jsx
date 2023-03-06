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
                <a href="#">Home</a>{' '}
              </span>
              <span>
                {' '}
                <a href="#">Categories</a>{' '}
              </span>
              <span>
                {' '}
                <a href="#">About us</a>{' '}
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
                  <a href="#">Login</a>
                  <span> | </span>
                  <a href="#">Signup</a>
                </div>
              )}
            </Login>
          </Container>
        </OuterContainer>
      </MainContainer>
    </>
  )
}
