import React from 'react'
import styled from 'styled-components'
import Button1 from '../../common/button1'

const Banner1 = styled.div`
  img {
    width: 100%;
    /* overflow: hidden; */
    /* position: relative; */
    /* height: 50rem; */
    background-size: cover;
    z-index: 10;
  }
`

const Top = styled.div`
  text-align: justify;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  color: #3d5631;
  font-size: 45px;
  display: flex;
  flex-direction: column;
`

const InputContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;

  /* background-color: inherit;
  border-style: none; */
  input {
    background: rgb(135, 150, 138, 1);
    border-radius: 2px;
    color: white;
    border: none;
    padding: 8px;
    cursor: pointer;
    height: 20px;
    width: 300px;
  }
`

export default function Banner() {
  return (
    <>
      <Banner1>
        <img src="../images/homeBanner.jpg" alt="home image" />
      </Banner1>
      <Top>
        Since Nature Provides <br /> Everything, Medicine <br /> Is Just A Part
        <InputContainer>
          <input type="text" />
        </InputContainer>
        <Button1 name="Search"></Button1>
      </Top>
    </>
  )
}
