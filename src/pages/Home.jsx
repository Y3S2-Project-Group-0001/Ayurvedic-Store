import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: coral;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 50px;
  text-align: center;
`

const Container2 = styled(Container)`
  background-color: blue;
  min-height: 200px;
`

export default function Home() {
  return (
    <>
      <Container>
        This is home <br />
        and this component has been coded with styled component.
        <br /> see it is really easy!
      </Container>
      <Container2>
        here i have inherited all the styles from above container. and overrided
        only color and height.
      </Container2>
    </>
  )
}
