import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #729b0e;
  color: white;
  border: none;
  width: 80px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background: #5e7e0e;
  }
`

export default function Button1(props) {
  return (
    <>
      <Button> {props.name} </Button>
    </>
  )
}
