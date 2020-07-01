import styled from 'styled-components'

export const FoodGrid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const Food = styled.li`
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 0.3rem;
  font-family: 'Righteous', cursive;
  font-size: 20px;
  box-shadow: 0 0.125rem 0.25rem grey;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    > a {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`

export const FoodLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: ${({ image }) => `url(${image}) no-repeat center/cover`};
  filter: contrast(75%);
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
`

export const FoodLabel = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  border-radius: 0.2rem;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 999;
`
