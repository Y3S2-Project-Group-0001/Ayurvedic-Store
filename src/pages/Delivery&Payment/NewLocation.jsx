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
const Button = styled.div`
  align-items: center;
  display: flex;
  padding: 10px;
  font-family: 'Quicksand';
  background-color: ${props => props.bgColor};
  cursor: pointer;
  div {
    margin-left: 1rem;
    a {
      color: ${props => props.color};
      transition: 0.5s;
      text-decoration: none;
      font-weight: 400;
      font-family: 'Quicksand';
    }
  }
`

function NewLocation({
  address,
  streetName,
  city,
  setOnClose,
  savedLocation = false,
  savedModel,
  setOnCloseD,
  modifyModel,
}) {
  function opener() {
    setOnClose(true)
  }
  return (
    <Smallbox>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      ></link>
      {savedModel ? (
        <span>
          <Button bgColor="#bed496" onClick={opener}>
            Saved Location
          </Button>
        </span>
      ) : (
        <span>
          New
          <br />
          Location
        </span>
      )}
      {savedModel && (
        <div style={{ paddingTop: 10 }}>
          <SaveLocationBox
            modifyModel={modifyModel}
            savedLocation={savedLocation}
            setOnCloseD={setOnCloseD}
          ></SaveLocationBox>
        </div>
      )}
    </Smallbox>
  )
}

export default NewLocation
