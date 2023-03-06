import React, { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  padding: 15px 15px 0px 55px;
  justify-content: center;
  font-weight: 700;
`

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: gray;
  padding: 10px 20px 20px 30px;
`
const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const RadioInput = styled.input`
  margin-right: 8px;
`

const RadioButton = ({ label, value, checked, onChange }) => {
  return (
    <RadioLabel>
      <RadioInput
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </RadioLabel>
  )
}

function Category() {
  const [selectedValue, setSelectedValue] = useState('')

  const handleRadioChange = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <>
      <Label> Category </Label>
      <RadioGroup>
        <RadioButton
          label="HEALTH CARE"
          value="healthCare"
          checked={selectedValue === 'healthCare'}
          onChange={handleRadioChange}
        />
        <RadioButton
          label="PERSONAL CARE"
          value="personalCare"
          checked={selectedValue === 'personalCare'}
          onChange={handleRadioChange}
        />
        <RadioButton
          label="LIFESTYLE"
          value="lifeStyle"
          checked={selectedValue === 'lifeStyle'}
          onChange={handleRadioChange}
        />
        <RadioButton
          label="HERBAL FOOD"
          value="herbalFood"
          checked={selectedValue === 'herbalFood'}
          onChange={handleRadioChange}
        />
      </RadioGroup>
    </>
  )
}

export default Category
