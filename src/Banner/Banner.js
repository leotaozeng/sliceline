import React from 'react'
import styled from 'styled-components'

export const BannerStyled = styled.div`
  width: calc(100% - 340px);
  height: 300px;
  margin-top: 49px;
  background: url('images/banner.jpg') no-repeat center/cover;
  filter: contrast(75%);
`

export function Banner() {
  return <BannerStyled />
}
