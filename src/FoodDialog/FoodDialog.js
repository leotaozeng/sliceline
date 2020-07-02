import React from 'react'
import styled from 'styled-components'

import { FoodLabel } from '../Menu/FoodGrid'
import { pizzaRad } from '../Styles/colors'

const Dialog = styled.div`
  position: fixed;
  top: 50%;
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  width: 500px;
  height: calc(100vh - 100px);
  transform: translate3d(0, -50%, 0);
  border-radius: 0.3rem;
  background-color: white;
  z-index: 1000;
`

const DialogBanner = styled.header`
  min-height: 200px;
  margin-bottom: 20px;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
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

export const DialogContent = styled.div`
  flex-grow: 1;
  overflow: auto;
`

export const DialogFooter = styled.footer`
  display: flex;
  justify-content: center;
  height: 60px;
  box-shadow: 0 -2px 10px 0 grey;
`

export const ConfirmButton = styled.button`
  width: 200px;
  min-height: 20px;
  line-height: 20px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  font-family: 'Righteous', cursive;
  color: white;
  background-color: ${pizzaRad};
  cursor: pointer;
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

        <DialogContent></DialogContent>

        <DialogFooter>
          <ConfirmButton>Add to order</ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : null
}
