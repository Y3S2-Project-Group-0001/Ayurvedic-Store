import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'

const OuterContainer = styled.div`
  /* height: 500px; */
  background-color: #aeba92;
  align-items: center;
  display: grid;
  padding-top: 150px;
  padding-bottom: 100px;
`

const Text = styled.div`
  color: ${props => props.color};
  font-size: 20px;
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  font-family: Quicksand;
  font-family: ${props => props.family};
  padding-bottom: 20px;
  a {
    text-decoration: none;
    color: black;
  }
`

const Contain = styled(Container)`
  color: black;
  padding-top: 40px;
  margin-top: ${props => props.mt};
  padding-bottom: 20px;
  border-left: ${props => props.border};
  @media only screen and (max-width: 1000px) {
    margin-left: 35%;
    margin-left: ${props => props.pad};
    border-top: ${props => props.border};
    border-left: none;
    border-color: #48553c;
  }
  img {
    width: 15rem;
  }
`

export default function Home() {
  return (
    <>
      <OuterContainer>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand"
          rel="stylesheet"
        ></link>

        <Container display="flex" justify="center" align="center">
          <Container
            display="grid"
            auto="auto auto auto auto"
            w="70%"
            smallauto="auto"
          >
            <Contain w="100%" mt="30px">
              <Text>
                <a href="#">Give us Feedback</a>{' '}
              </Text>
              <Text>
                <a href="https://www.youtube.com/watch?v=I5mDGAzxyb0&ab_channel=TEDxTalks">
                  Help Center
                </a>
              </Text>
              <Text>
                <a href="https://www.innersloth.com/games/among-us/">
                  Be Part Of Us
                </a>
              </Text>
              <Text>
                <a href="#">Support Us</a>
              </Text>
            </Contain>
            <Contain w="100%" mt="30px">
              <Text>
                <a href="#">Contact Us</a>
              </Text>
              <Text>
                <a href="#">FAQ</a>
              </Text>
              <Text>
                <a href="#">Careers</a>
              </Text>
              <Text>
                <a href="#">Blogs</a>
              </Text>
            </Contain>
            <Contain w="100%" mt="30px">
              <Text>
                <a href="#">Categories</a>
              </Text>
              <Text>
                <a href="#">Seller Info</a>
              </Text>
              <Text>
                <a href="#">Development</a>
              </Text>
              <Text>
                <a href="https://www.more.com.au/">More</a>
              </Text>
            </Contain>
            <Contain
              w="100%"
              display="flex"
              dirrection="column"
              border="solid"
              pad="0px"
            >
              <Container
                w="100%"
                pt="20px"
                pb="20px"
                display="flex"
                justify="center"
              >
                <Text size="30px">CEYLONHERB</Text>
              </Container>
              <Container w="100%" pb="20px" display="flex" justify="center">
                <img src="images/footIcon.png" alt="footer icons" />
              </Container>
              <Container
                w="100%"
                pt="20px"
                pb="20px"
                display="flex"
                justify="center"
              >
                <Text size="15px">Connect With Us</Text>
              </Container>
            </Contain>
          </Container>
        </Container>
      </OuterContainer>
    </>
  )
}
