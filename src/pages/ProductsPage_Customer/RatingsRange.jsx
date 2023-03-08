import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
`

const Stars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`

const Star = styled.button`
  font-size: 2rem;
  color: ${({ selected }) => (selected ? '#ffc700' : '#A9A9A9')};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Item = styled.li`
  margin-bottom: 0.5rem;
`

const Label = styled.label`
  padding: 25px 15px 0px 55px;
  justify-content: center;
  font-weight: 700;
`

const data = [
  { id: 1, name: 'Item 1', rating: 3 },
  { id: 2, name: 'Item 2', rating: 5 },
  { id: 3, name: 'Item 3', rating: 4 },
  { id: 4, name: 'Item 4', rating: 2 },
  { id: 5, name: 'Item 5', rating: 1 },
]

const FilteredItems = () => {
  const [selectedStars, setSelectedStars] = useState(0)

  const handleStarClick = index => {
    setSelectedStars(index + 1)
  }

  const filteredItems = data.filter(item => item.rating === selectedStars)

  return (
    <>
      <Label> Ratings </Label>
      <Container>
        <Stars>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              selected={index < selectedStars}
              onClick={() => handleStarClick(index)}
            >
              &#9733;
            </Star>
          ))}
        </Stars>
        <ItemsList>
          {filteredItems.map(item => (
            <Item key={item.id}>{item.name}</Item>
          ))}
        </ItemsList>
      </Container>
    </>
  )
}

export default FilteredItems
