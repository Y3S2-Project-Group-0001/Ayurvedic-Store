import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #729b0e;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #5e7e0e;
  }
`

function AyruvedicButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>
}

export default AyruvedicButton
