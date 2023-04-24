import React from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import SaveLocationBox from './SaveLocationBox'

const Smallbox = styled(Container)`
  background-color: #cfd7bc;
  padding: 16px;
  font-family: 'Quicksand';
  &:hover {
    background-color: #97a96f;
    transform: scale(1.05);
    transition: 0.2s;
  }
`

function NewLocation({ address, streetName, city, savedLocation = false }) {
  return (
    <Smallbox>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      ></link>
      {savedLocation ? (
        <span>
          Saved
          <br />
          Location
        </span>
      ) : (
        <span>
          New
          <br />
          Location
        </span>
      )}
      {savedLocation && (
        <div style={{ paddingTop: 10 }}>
          <SaveLocationBox savedLocation={savedLocation}></SaveLocationBox>
        </div>
      )}
    </Smallbox>
  )
}

export default NewLocation