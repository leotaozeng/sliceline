import React from 'react'
import styled from 'styled-components'

import { FoodLabel } from '../Menu/FoodGrid'

const Dialog = styled.div`
  position: fixed;
  top: 75px;
  left: calc(50% - 250px);
  width: 500px;
  height: 2000px;
  max-height: calc(100% - 100px);
  background-color: white;
  z-index: 1001;
`

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  background: ${({ image }) => `url(${image}) no-repeat center/cover`};
`

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  left: 0;
  font-size: 30px;
  padding: 5px 40px;
`

const DialogBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

export function FoodDialog({ openFood, setOpenFood }) {
  function hideDialog() {
    setOpenFood()
  }

  return openFood ? (
    <>
      <DialogBackdrop onClick={hideDialog} />
      <Dialog>
        <DialogBanner image={openFood.image}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
      </Dialog>
    </>
  ) : null
}
