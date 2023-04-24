import React from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import SaveLocationBox from './SaveLocationBox'
import DeliveryMiniBox from './DeliveryOption'

const Smallbox = styled(Container)`
  font-family: 'Quicksand';
  display: flex;
`

function DeliveryContain({ address, streetName, city }) {
  return (
    <Container display="flex" dirrection="column" align="center">
      <Smallbox>
        <DeliveryMiniBox></DeliveryMiniBox>
        <DeliveryMiniBox></DeliveryMiniBox>
      </Smallbox>

      <Smallbox>
        <DeliveryMiniBox></DeliveryMiniBox>
        <DeliveryMiniBox></DeliveryMiniBox>
      </Smallbox>
    </Container>
  )
}

export default DeliveryContain
