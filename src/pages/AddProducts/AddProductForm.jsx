import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const Form = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Input = styled.input`
  width: 500px;
  height: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  @media only screen and (max-width: 1000px) {
    width: 450px;
  }
`

const LeftFormInput = styled.input`
  width: 200px;
  height: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  @media only screen and (max-width: 1000px) {
    width: 450px;
  }
`

const RightFormInput = styled.input`
  width: 200px;
  height: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  @media only screen and (max-width: 1000px) {
    width: 450px;
  }
`

const TextArea = styled.textarea`
  width: 500px;
  height: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  @media only screen and (max-width: 1000px) {
    width: 450px;
  }
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  padding: 20px 0 0 0;
`

const SubmitBtn = styled.button`
  background-color: #729b0e;
  color: white;
  padding: 11px;
  margin-top: 20px;
  border: none;
  border-radius: 2.5px;
  cursor: pointer;
  font-size: 15px;
  width: 100px;
`

const CancelBtn = styled.button`
  background-color: #767676;
  color: white;
  padding: 11px;
  margin-top: 20px;
  border: none;
  border-radius: 2.5px;
  cursor: pointer;
  font-size: 15px;
  width: 100px;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 250px;
  margin-top: 30px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

function AddProducts() {
  return (
    <Container>
      <Form>
        <Label> Product Name </Label>
        <Input />
        <Label> Product Description </Label>
        <TextArea />
        <FormGroup>
          <LeftForm>
            <Label> M.F.D </Label>
            <LeftFormInput />
            <Label> Price </Label>
            <LeftFormInput />
          </LeftForm>
          <RightForm>
            <Label> Category </Label>
            <RightFormInput />
            <Label> Stock Amount </Label>
            <RightFormInput />
          </RightForm>
        </FormGroup>
        <ButtonGroup>
          <CancelBtn>Cancel</CancelBtn>
          <SubmitBtn>Add Item</SubmitBtn>
        </ButtonGroup>
      </Form>
    </Container>
  )
}

export default AddProducts
