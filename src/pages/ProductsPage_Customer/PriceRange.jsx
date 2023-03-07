import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from 'react-slider'

const Label = styled.label`
  padding: 35px 15px 0px 55px;
  justify-content: center;
  font-weight: 700;
`

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px;

  .thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    ${({ position }) => `left: ${position}px;`}
    background-color: #91B744;
    position: absolute;
    cursor: grab;
  }

  .thumb:hover {
    background-color: #91b744;
  }

  .thumb.active {
    cursor: grabbing;
  }

  .track {
    height: 3px;
    background-color: #91b744;
  }
`

function PriceRange({ min, max, onChange }) {
  const [value, setValue] = useState(50)

  const handleSliderChange = newValue => {
    setValue(newValue)
  }

  return (
    <>
      <Label>Price Range </Label>
      <StyledSlider
        value={value}
        min={0}
        max={100}
        onChange={handleSliderChange}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`${props.className} track`}
            style={{ width: `${state.offset}%` }}
          />
        )}
        renderThumb={(props, state) => (
          <div {...props} className={`${props.className} thumb`} />
        )}
      />
    </>
  )
}

export default PriceRange
