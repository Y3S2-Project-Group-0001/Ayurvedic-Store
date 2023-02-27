import React from 'react'
import styled from 'styled-components'

const TextData =
  'Are you an owner of a great but puny business? Then this is your chance to be something meaningfull rather than small and useless. Come join with us right now you will not regret this oppertunity. Not to mention we have alot of nice herbs that you might also like. we dont support selling iligal drugs so keep in mind to package them nicely so we dont notice it. Thank you. Click button below to join now!'
const TextData2 =
  'What are you waiting for? Till your grandma approves? Come click the button below to sign up as a seller right now and sell all your drugs and herbs and plant. Come and see the difference of our shop compared to other peasant shops. Thius is the best you can buy so you better register.'
const Image =
  'https://images.unsplash.com/photo-1531058240690-006c446962d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

const Container = styled.div`
  margin-top: 30px;
  background-color: #bfbfbf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 120px;
`

const Text = styled.div``

const Button = styled.button`
  margin-top: 18px;
  width: 200px;
  height: 50px;
  background: #699300;
  color: white;
  border-style: solid;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #5b6a36;
  }
  &:active {
    background: #49552c;
  }
`

const SmallerContainer = styled.div`
  display: flex;
  column-gap: 100px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
  justify-content: center;
`

const MiniContainer = styled.div`
  background-color: ${props => props.color};
  display: ${props => props.flex};
  flex-direction: ${props => props.dirrection};
  justify-content: ${props => props.center};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  width: ${props => props.width};
  font-family: 'Quicksand';
  font-size: ${props => props.fontSize};

  img {
    display: flex;
    margin-top: 50px;
    margin-left: 50px;
    justify-content: center;
    object-fit: cover;
    object-position: right top;
    @media only screen and (max-width: 1000px) {
      width: 80%;
      height: 70%;
    }
    width: 100%;
    height: 80%;
    border-style: solid;
    rotate: -10deg;
  }
`

const CenterContain = styled.div`
  @media only screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`

export default function SellAd() {
  function SignUpPressed() {
    console.log('Pressed')
  }
  return (
    <>
      <Container>
        <MiniContainer
          center="center"
          mt="100px"
          mb="80px"
          fontSize="30px"
          flex="flex"
        >
          Come Sell with us
        </MiniContainer>

        <CenterContain>
          <SmallerContainer>
            <MiniContainer color="" width="500px" flex="flex">
              {' '}
              <img src={Image} />{' '}
            </MiniContainer>
            <MiniContainer
              mt="40px"
              color=""
              width="500px"
              dirrection="column"
              flex="grid"
            >
              {TextData} <br />
              <br /> {TextData2}
              <MiniContainer center="center" flex="flex">
                <Button onClick={() => SignUpPressed()}>
                  Register as a seller!
                </Button>{' '}
              </MiniContainer>
            </MiniContainer>
          </SmallerContainer>
        </CenterContain>
      </Container>
    </>
  )
}
