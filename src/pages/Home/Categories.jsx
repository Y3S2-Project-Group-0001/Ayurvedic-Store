import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import CategoryBox from '../../components/CategoryBox'

const link1 =
  'https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
const link2 =
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
const title1 = 'A community that likes killing'
const descriptoon1 =
  'sometimes its the thought that counts of killing someone else.'

const BigContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 30px;
  row-gap: 50px;
  column-gap: 100px;
  flex-wrap: 2;
`

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Quicksand';
  font-weight: 600;
  font-size: 22px;
  color: gray;
  margin-top: 50px;
  margin-bottom: 20px;
`

export default function Categories() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      ></link>

      <Title>Categories</Title>

      <BigContainer>
        <Container>
          <CategoryBox
            title={title1}
            description={descriptoon1}
            image={link1}
          />
          <CategoryBox
            title={title1}
            description={descriptoon1}
            image={link2}
          />
          <CategoryBox
            title={title1}
            description={descriptoon1}
            image={link1}
          />
          <CategoryBox
            title={title1}
            description={descriptoon1}
            image={link2}
          />
          <CategoryBox
            title={title1}
            description={descriptoon1}
            image={link1}
          />
          <CategoryBox
            title={title1}
            description={descriptoon1}
            image={link2}
          />
        </Container>
      </BigContainer>
    </>
  )
}
