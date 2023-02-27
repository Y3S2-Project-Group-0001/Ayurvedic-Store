import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
  background-color: gray;
  width: 100%;
  height: 722px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  img {
    object-fit: cover;
    object-position: right top;
    width: 100%;
    height: 100%;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
`

const HeroText = styled.div`
  font-size: 40px;
  text-align: start;
  color: rgba(61, 86, 49, 1);
`

const Button = styled.button`
  margin-top: 10px;
  width: 120px;
  height: 40px;
  background: #729b0e;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #5b6a36;
  }
  &:active {
    background: #49552c;
  }
`

const SearchBar = styled.input`
  margin-top: 40px;
  background: #828a6e;
  width: 280px;
  height: 35px;
  border-style: none;
  color: white;
  outline: none;
  border-radius: 5px;

  &:focus {
    background: #434839;
  }
`

export default function Banner() {
  const [searchResult, setSearchResult] = useState(null)

  function SearchPressed() {
    console.log('Searched. Sending to other pages... ' + searchResult)
  }

  return (
    <>
      <Container>
        <img src="images/homeBanner.jpg" alt="Home_Page_Image" />
        <HeroContent>
          <HeroText>
            Since Nature Provides <br />
            Everything, Medicine <br />
            Is Just A Part
          </HeroText>

          <SearchBar
            onChange={e => {
              setSearchResult(e.target.value)
            }}
          />

          <Button onClick={() => SearchPressed()}>SEARCH</Button>
        </HeroContent>
      </Container>
    </>
  )
}
