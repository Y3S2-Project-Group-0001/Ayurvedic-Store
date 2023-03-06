import React from 'react'
import styled from 'styled-components'

const content =
  'We are a small team of four who decided it is a good idea to make a team and build this application. All members are responsible for making this project with equal contribution and many sleepless nights.'

const Image =
  'https://www.annmariegianni.com/wp-content/uploads/2018/06/little-known-skin-care.jpg'

const Container = styled.div`
  background-color: #f2f2f2;
  height: ${props => props.h};
  display: flex;
  justify-content: center;
  padding-top: ${props => props.mt};
  padding-bottom: ${props => props.pb};
`

const SecondContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
  background-color: #ace36880;
  height: 450px;
  width: 60%;
`

const Text = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  width: ${props => props.w};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  font-family: 'Quicksand';
`

const CommonContainer = styled.div`
  display: ${props => props.flex};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  background-color: #c6e67641;
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
    object-position: right top;
    width: 100%;
    height: 100%;
  }
`

export default function AboutUsHome() {
  return (
    <>
      <Container h="60px">
        <Text size="30px" mt="55px" weight="500">
          About us
        </Text>
      </Container>

      <Container h="500px" mt="75px" pb="100px">
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand"
          rel="stylesheet"
        ></link>
        <SecondContainer>
          <CommonContainer flex="flex" justify="center" align="center">
            <Text w="250px">
              <Text size="32px" weight="600">
                Who Are We{' '}
              </Text>
              <Text size="18px" weight="500">
                {content}
              </Text>
            </Text>
          </CommonContainer>

          <CommonContainer>
            <img src={Image} alt="image" />
          </CommonContainer>
        </SecondContainer>
      </Container>
    </>
  )
}
