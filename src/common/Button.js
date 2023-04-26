import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #729b0e;
  background: ${props => props.bgc};
  margin-top: ${props => props.mt};
  color: white;
  border: none;
  cursor: pointer;
  height: 30px;
  width: 100px;
  height: ${props => props.h};
  width: ${props => props.w};
  border-radius: 5px;

  &:hover {
    background: #5e7e0e;
    background: ${props => props.hbc};
  }
`

export default Button
