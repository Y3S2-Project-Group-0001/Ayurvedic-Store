import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dedede;
  width: 420px;
  height: 155px;
  border-radius: 10px;
  margin: 0px;
  padding: 15px;
  transition: 0.3s;

  &:hover {
    background: #c7df8a;
    transform: scale(1.05);
  }
`

const InnerContainer = styled.div`
  background-color: ${props => props.color};
  margin-left: ${props => props.margin};
  width: ${props => props.size};
  height: 100%;
  border: 20px;
  img {
    object-fit: cover;
    object-position: right top;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`

const TextContainer = styled.div`
  margin-left: ${props => props.margin};
  align-items: ${props => props.align};
  margin-bottom: 10px;
  font-size: ${props => props.fontSize};
  color: ${props => props.Textcolor};
  display: flex;
  flex-direction: row;
  background-color: ${props => props.color};
  width: ${props => props.size};
  font-family: 'Quicksand';
  font-weight: ${props => props.bold};
  height: 50%;
`

export default function CategoryBox(props) {
  return (
    <>
      <OuterContainer>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand"
          rel="stylesheet"
        ></link>

        <InnerContainer size="60%">
          <TextContainer
            align="flex-end;"
            size="100%"
            Textcolor="#3b3b3b"
            size="70%"
            margin="15px"
            fontSize="20px"
            bold="600"
          >
            {props.title}
          </TextContainer>
          <TextContainer
            size="100%"
            fontSize="15px"
            Textcolor="gray"
            margin="15px"
          >
            {props.description}
          </TextContainer>
        </InnerContainer>

        <InnerContainer size="39%" margin="15px">
          <img src={props.image} alt="" />
        </InnerContainer>
      </OuterContainer>
    </>
  )
}
