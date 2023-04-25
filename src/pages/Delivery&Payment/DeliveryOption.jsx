import React from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import SaveLocationBox from './SaveLocationBox'

const Smallbox = styled(Container)`
  background-color: #cfd7bc;
  background-color: ${props => props.select};
  padding: 16px;
  margin: 20px;
  height: 100px;
  width: 100px;
  font-family: 'Quicksand';
  &:hover {
    background-color: #97a96f;
    transform: scale(1.05);
    transition: 0.2s;
  }
`

function DeliveryMiniBox({ name, setSelected }) {
  function selected() {
    setSelected(name)
  }
  return (
    <Smallbox onClick={selected}>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      ></link>
      {name}
    </Smallbox>
  )
}

export default DeliveryMiniBox
