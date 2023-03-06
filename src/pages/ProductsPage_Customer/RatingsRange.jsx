import React, { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  padding: 35px 15px 0px 55px;
  justify-content: center;
  font-weight: 700;
`

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`

const StarRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #ffb400;
  margin: 10px;

  &.selected {
    color: #fbd702;
  }
`

const items = [
  { name: 'Item 1', rating: 1 },
  { name: 'Item 2', rating: 2 },
  { name: 'Item 3', rating: 3 },
  { name: 'Item 4', rating: 4 },
  { name: 'Item 5', rating: 5 },
]

function RatingsRange() {
  const [rating, setRating] = useState(null)

  const handleRatingClick = selectedRating => {
    setRating(selectedRating)
  }

  const filteredItems = rating
    ? items.filter(item => item.rating === rating)
    : items

  return (
    <>
      <Label> Ratings </Label>

      {[1, 2, 3, 4, 5].map(index => (
        <StarRating
          key={index}
          className={rating === index ? 'selected' : ''}
          onClick={() => handleRatingClick(index)}
        >
          &#9733;
        </StarRating>
      ))}

      <div>
        {filteredItems.map(item => (
          <div key={item.name}>{item.name}</div>
        ))}
      </div>
    </>
  )
}

export default RatingsRange
