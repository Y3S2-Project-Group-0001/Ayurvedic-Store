import styled from 'styled-components'

const Text = styled.div`
  font-size: ${props => props.fs};
  font-family: ${props => props.ff};
  margin-left: ${props => props.ml};
  display: ${props => props.display};
  align-items: ${props => props.align};
  text-align: ${props => props.justify};
  font-weight: 600;
`

export default Text
