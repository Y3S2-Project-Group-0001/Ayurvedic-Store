import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RangeInput = styled.input`
  width: 250px;
  padding: 20px 5px;
`

const FilteredItems = styled.div`
  margin-top: 20px;
`

const Label = styled.label`
  padding: 15px 15px 15px 55px;
  justify-content: center;
  font-weight: 700;
`

const items = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  { id: 3, name: 'Item 3', price: 30 },
  { id: 4, name: 'Item 4', price: 40 },
  { id: 5, name: 'Item 5', price: 50 },
]

const SliderFilter = () => {
  const [range, setRange] = useState({ min: 0, max: 50 })

  const handleRangeChange = event => {
    setRange({ ...range, [event.target.name]: event.target.value })
  }

  const filteredItems = items.filter(
    item => item.price >= range.min && item.price <= range.max,
  )

  return (
    <>
      <Label> Price Range </Label>
      <Container>
        <RangeInput
          type="range"
          min="0"
          max="50"
          name="min"
          value={range.min}
          onChange={handleRangeChange}
        />
        <div>
          Price Range: {range.min} - {range.max}
        </div>
        <FilteredItems>
          <h3>Filtered Items:</h3>
          {filteredItems.map(item => (
            <div key={item.id}>
              {item.name} - ${item.price}
            </div>
          ))}
        </FilteredItems>
      </Container>
    </>
  )
}

export default SliderFilter
