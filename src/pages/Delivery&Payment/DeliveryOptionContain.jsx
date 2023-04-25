import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import SaveLocationBox from './SaveLocationBox'
import DeliveryMiniBox from './DeliveryOption'

const Smallbox = styled(Container)`
  font-family: 'Quicksand';
  display: flex;
`

function DeliveryContain({ address, streetName, city }) {
  const [selected, setSelected] = useState('Select something')

  return (
    <Container display="flex" dirrection="column" align="center">
      <Smallbox>
        <DeliveryMiniBox
          selected={selected}
          name="UPS"
          setSelected={setSelected}
        ></DeliveryMiniBox>
        <DeliveryMiniBox
          name="FEDEX"
          selected={selected}
          setSelected={setSelected}
        ></DeliveryMiniBox>
      </Smallbox>
      <Smallbox>
        <DeliveryMiniBox
          name="NORMAL POSTAL"
          selected={selected}
          setSelected={setSelected}
        ></DeliveryMiniBox>
        <DeliveryMiniBox
          name="DHL"
          selected={selected}
          setSelected={setSelected}
        ></DeliveryMiniBox>
      </Smallbox>
      {selected}
    </Container>
  )
}

export default DeliveryContain
