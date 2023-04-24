import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { FaStarHalf } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'

const StarContainer = styled.div`
  display: inline-block;
  font-size: 20px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  color: #ffc700;
  width: 200px;
`

function RatingDisplay({ rating }) {
  rating = 2.5
  const numStars = 5
  const filledStars = Math.floor(rating)
  const halfStar = rating - filledStars >= 0.5
  const emptyStars = numStars - filledStars - (halfStar ? 1 : 0)

  const stars = []

  for (let i = 0; i < filledStars; i++) {
    stars.push(<FaStar key={i} />)
  }

  if (halfStar) {
    stars.push(<FaStarHalf key={stars.length} />)
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={stars.length} />)
  }

  return <StarContainer>{stars}</StarContainer>
}

export default RatingDisplay
