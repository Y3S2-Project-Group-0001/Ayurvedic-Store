import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: ${props => props.h};
  width: ${props => props.w};
  background-color: ${props => props.bgColor};
  display: ${props => props.display};
  justify-content: ${props => props.justify};
  column-gap: ${props => props.colgap};
  align-items: ${props => props.align};
  flex-direction: ${props => props.dirrection};
  grid-template-columns: ${props => props.auto};
  border-radius: ${props => props.borderR};
  border-bottom: ${props => props.borderBot};
  border-right: ${props => props.borderRight};
  border-color: ${props => props.borderColor};
  padding: ${props => props.p};
  @media only screen and (max-width: 1000px) {
    grid-template-columns: ${props => props.smallauto};
    border-right: ${props => props.smallborderRight};
    border-top: ${props => props.smallborderTop};
    padding-top: ${props => props.smallPaddingTop};
  }
  padding: ${props => props.padding};
  margin: ${props => props.m};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
`
export default Container
