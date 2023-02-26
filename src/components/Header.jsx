import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

let textColor = 'white'
let bgColor = 'black'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
`

export default function Header(props) {
  const [login, setLogin] = useState('notLogged')

  if (props.type == 'home') {
    textColor = 'black'
    bgColor = 'rgba(0, 0, 0, 0.3)'
  } else {
    bgColor = 'rgba(61, 86, 49, 1)'
    textColor = 'white'
  }

  const Nav = styled.div`
    margin-left: 20%;
    span {
      margin-left: 2rem;
      a {
        color: ${textColor};
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
    /* max-width: 200px; */
    margin-left: auto;
    div {
      margin-left: 1rem;
      a {
        color: ${textColor};
        text-decoration: none;
        font-weight: 400;
        font-family: 'Quicksand';
      }
    }
  `

  const OuterContainer = styled.div`
    background-color: ${bgColor};
    color: ${textColor};
  `

  const ButtonDash = styled.div`
    margin-left: 20%;
    font-size: 15px;
    font-weight: 400;
    font-family: 'Quicksand';
    border-color: white;
    border-style: solid;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
  `

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      ></link>
      <OuterContainer>
        <Container>
          <Logo>CEYLONHERB</Logo>

          <Nav>
            <span>
              {' '}
              <a href="#">Home</a>{' '}
            </span>
            <span>
              {' '}
              <a href="">Categories</a>{' '}
            </span>
            <span>
              {' '}
              <a href="">About us</a>{' '}
            </span>
            <span>
              {' '}
              <a href="">More</a>{' '}
            </span>
          </Nav>

          <ButtonDash>Seller Dash</ButtonDash>

          <Login>
            {login == 'Logged' ? (
              <div>
                <a href="">Logout </a>
              </div>
            ) : (
              <div>
                <a href="">Login</a>
                <span> | </span>
                <a href="">Signup</a>
              </div>
            )}
          </Login>
        </Container>
      </OuterContainer>
    </>
  )
}
