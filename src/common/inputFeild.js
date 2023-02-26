import React from 'react'
import styled from 'styled-components'

const Input = styled.button`
  background: rgb(135, 150, 138, 1);
  border-radius: 2px;
  color: white;
  border: none;
  width: 80px;
  padding: 8px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 10px;
  height: 30px;
  width: 300px;

  &:hover {
    background: #5e7e0e;
  }
`

export default function InputArea() {
  return (
    <>
      <Input> </Input>
    </>
  )
}
