import React, { useState } from 'react'
import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa'

const DropDownContainer = styled.div`
  position: relative;
  width: 200px;
`

const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color: #333;
  cursor: pointer;
  width: 200px;
  height: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media only screen and (max-width: 1000px) {
    width: 450px;
  }
`

const DropDownIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`

const DropDownListContainer = styled.div`
  position: absolute;
  top: 44px;
  width: 100%;
  z-index: 1;
`

const DropDownList = styled.ul`
  width: 200px;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
`

const DropDownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`

function DropDown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const toggle = () => setIsOpen(!isOpen)

  const onOptionClicked = item => () => {
    setSelectedItem(item)
    setIsOpen(false)
  }

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggle}>
        {selectedItem ? selectedItem : 'Select an item'}
        <DropDownIcon>
          <FaAngleDown />
        </DropDownIcon>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            <DropDownItem onClick={onOptionClicked('Health Care')}>
              Health Care
            </DropDownItem>
            <DropDownItem onClick={onOptionClicked('Personal Care')}>
              Personal Care
            </DropDownItem>
            <DropDownItem onClick={onOptionClicked('LifeStyle')}>
              LifeStyle
            </DropDownItem>
            <DropDownItem onClick={onOptionClicked('Herbal Food')}>
              Herbal Food
            </DropDownItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

export default DropDown
