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
  background-color: #7590680;
  padding: 50px;
  border-radius: 20px;
  @media only screen and (max-width: 1000px) {
    left: 50%;
    background-color: #759068bd;
    padding: 50px;
    border-radius: 20px;
  }
  transition: 1s;
  transform: translate(-50%, -50%);
`

const HeroText = styled.div`
  font-size: 40px;
  text-align: start;
  color: rgba(61, 86, 49, 1);
  font-family: 'Quicksand';
  font-weight: 500;
  @media only screen and (max-width: 1000px) {
    color: #2d5b19;
  }
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
  transition: 2s;

  @media only screen and (max-width: 1000px) {
    background: #354410e3;
  }

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
  transition: 1s;

  @media only screen and (max-width: 1000px) {
    background: #f7ffe1bf;
  }

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
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand"
          rel="stylesheet"
        ></link>
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
